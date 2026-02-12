import { InjuryRecord, InjuryType, InjuryStatus, SessionType, INJURY_RECORDS } from "../data/mockInjuryData";
import { FilterState } from "../components/DashboardFilters";

export interface FilteredData {
  records: InjuryRecord[];
  metrics: {
    totalInjuries: number;
    activeInjuries: number;
    averageDaysOut: number;
    totalDaysMissed: number;
    injuriesByType: Record<string, number>;
    injuriesByPosition: Record<string, number>;
    injuriesByTeam: Record<string, number>;
    injuriesBySeverity: Record<string, number>;
    recoveryRate: number;
    recurringInjuryRate: number;
  };
}

export function applyFilters(
  data: InjuryRecord[],
  filters: FilterState | null
): InjuryRecord[] {
  if (!filters) return data;

  let filtered = [...data];

  // Season filter (mutually exclusive with benchmark)
  if (filters.season) {
    const season = parseInt(filters.season);
    filtered = filtered.filter(record => record.season === season);
  }

  // Benchmark filter (if selected, aggregate across multiple seasons)
  if (filters.benchmarkValue) {
    const currentYear = new Date().getFullYear();
    let yearsBack = 2;
    
    if (filters.benchmarkValue === "3-Year Average") {
      yearsBack = 3;
    } else if (filters.benchmarkValue === "5-Year Average") {
      yearsBack = 5;
    }
    
    const seasons = Array.from({ length: yearsBack }, (_, i) => currentYear - i);
    filtered = filtered.filter(record => seasons.includes(record.season));
  }

  // Date range filter
  if (filters.startDate && filters.endDate) {
    filtered = filtered.filter(record => 
      record.injuryDate >= filters.startDate! && 
      record.injuryDate <= filters.endDate!
    );
  } else if (filters.startDate) {
    filtered = filtered.filter(record => record.injuryDate >= filters.startDate!);
  } else if (filters.endDate) {
    filtered = filtered.filter(record => record.injuryDate <= filters.endDate!);
  }

  // Quick date range filter (preset periods)
  if (filters.quickDateRange) {
    const season = filters.season ? parseInt(filters.season) : new Date().getFullYear();
    const seasonStart = new Date(season, 8, 1); // September 1st
    
    switch (filters.quickDateRange) {
      case "Preseason to Playoffs":
        filtered = filtered.filter(record => {
          const preseasonStart = new Date(season, 7, 1); // August 1st
          const playoffsEnd = new Date(season + 1, 1, 28); // Feb 28 next year
          return record.injuryDate >= preseasonStart && record.injuryDate <= playoffsEnd;
        });
        break;
      case "Week 1 to Week 8":
        filtered = filtered.filter(record => record.week >= 1 && record.week <= 8);
        break;
      case "Week 9 to Week 17":
        filtered = filtered.filter(record => record.week >= 9 && record.week <= 17);
        break;
      case "Playoffs Only":
        filtered = filtered.filter(record => record.week >= 18);
        break;
    }
  }

  // Session types filter (multi-select)
  if (filters.sessionTypes && filters.sessionTypes.length > 0) {
    filtered = filtered.filter(record => 
      filters.sessionTypes.includes(record.sessionTypeAtInjury)
    );
  }

  // Injury status filter
  if (filters.injuryStatus) {
    filtered = filtered.filter(record => record.status === filters.injuryStatus);
  }

  return filtered;
}

export function calculateMetrics(records: InjuryRecord[]): FilteredData["metrics"] {
  const totalInjuries = records.length;
  const activeInjuries = records.filter(r => r.status === "Out" || r.status === "Limited").length;
  
  const totalDays = records.reduce((sum, r) => sum + r.daysOut, 0);
  const averageDaysOut = totalInjuries > 0 ? Math.round(totalDays / totalInjuries) : 0;
  
  const totalDaysMissed = records.reduce((sum, r) => {
    if (r.returnDate) {
      const diff = r.returnDate.getTime() - r.injuryDate.getTime();
      return sum + Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    return sum + r.daysOut;
  }, 0);

  // Group by type
  const injuriesByType: Record<string, number> = {};
  records.forEach(r => {
    injuriesByType[r.injuryType] = (injuriesByType[r.injuryType] || 0) + 1;
  });

  // Group by position
  const injuriesByPosition: Record<string, number> = {};
  records.forEach(r => {
    injuriesByPosition[r.position] = (injuriesByPosition[r.position] || 0) + 1;
  });

  // Group by team
  const injuriesByTeam: Record<string, number> = {};
  records.forEach(r => {
    injuriesByTeam[r.teamAbbr] = (injuriesByTeam[r.teamAbbr] || 0) + 1;
  });

  // Group by severity
  const injuriesBySeverity: Record<string, number> = {};
  records.forEach(r => {
    injuriesBySeverity[r.severity] = (injuriesBySeverity[r.severity] || 0) + 1;
  });

  const recoveredCount = records.filter(r => r.status === "Recovered").length;
  const recoveryRate = totalInjuries > 0 ? (recoveredCount / totalInjuries) * 100 : 0;

  const recurringCount = records.filter(r => r.isRecurring).length;
  const recurringInjuryRate = totalInjuries > 0 ? (recurringCount / totalInjuries) * 100 : 0;

  return {
    totalInjuries,
    activeInjuries,
    averageDaysOut,
    totalDaysMissed,
    injuriesByType,
    injuriesByPosition,
    injuriesByTeam,
    injuriesBySeverity,
    recoveryRate,
    recurringInjuryRate,
  };
}

export function getFilteredData(filters: FilterState | null): FilteredData {
  const filtered = applyFilters(INJURY_RECORDS, filters);
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

// Dashboard-specific data helpers

export function getInjuryTypeData(
  filters: FilterState | null,
  injuryType: InjuryType
): FilteredData {
  let filtered = applyFilters(INJURY_RECORDS, filters);
  filtered = filtered.filter(r => r.injuryType === injuryType);
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

export function getMissedTimeData(filters: FilterState | null): FilteredData {
  const filtered = applyFilters(INJURY_RECORDS, filters);
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

export function getTeamViewData(
  filters: FilterState | null,
  teamId?: number
): FilteredData {
  let filtered = applyFilters(INJURY_RECORDS, filters);
  
  if (teamId) {
    filtered = filtered.filter(r => r.teamId === teamId);
  }
  
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

export function getRecoveryTimeData(filters: FilterState | null): FilteredData {
  const filtered = applyFilters(INJURY_RECORDS, filters);
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

// Position-based filtering
export function getPositionData(
  filters: FilterState | null,
  position?: string
): FilteredData {
  let filtered = applyFilters(INJURY_RECORDS, filters);
  
  if (position) {
    filtered = filtered.filter(r => r.position === position);
  }
  
  const metrics = calculateMetrics(filtered);

  return {
    records: filtered,
    metrics,
  };
}

// Get benchmark comparison data
export function getBenchmarkComparison(
  currentFilters: FilterState,
  benchmarkYears: number
): { current: FilteredData; benchmark: FilteredData } {
  const currentData = getFilteredData(currentFilters);
  
  const benchmarkFilters: FilterState = {
    ...currentFilters,
    season: "",
    benchmarkValue: `${benchmarkYears}-Year Average`,
  };
  
  const benchmarkData = getFilteredData(benchmarkFilters);
  
  return {
    current: currentData,
    benchmark: benchmarkData,
  };
}
