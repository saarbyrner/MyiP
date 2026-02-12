import { useState, useMemo } from "react";
import { useParams } from "react-router";
import { Box, Grid, IconButton, Tabs, Tab } from "@/app/components/playbook";
import { MainNavigation } from "@/app/components/MainNavigation";
import { AppBarHeader } from "@/app/components/AppBarHeader";
import { Header } from "@/app/components/Header";
import { DashboardFilters, FilterState } from "@/app/components/DashboardFilters";
import { MetricCard } from "@/app/components/looker/MetricCard";
import { GaugeCard } from "@/app/components/looker/GaugeCard";
import { BarChartCard } from "@/app/components/looker/BarChartCard";
import { HorizontalBarChartCard } from "@/app/components/looker/HorizontalBarChartCard";
import { MissedTimeStatsCard } from "@/app/components/looker/MissedTimeStatsCard";
import { DonutChartCard } from "@/app/components/looker/DonutChartCard";
import { DashboardDrawer } from "@/app/components/DashboardDrawer";
import { getFilteredData, getBenchmarkComparison, getInjuryTypeData } from "@/app/utils/dataFilters";
import { InjuryType } from "@/app/data/mockInjuryData";
import { getBenchmarkData, getTeamStandingPosition, getNFLAvgForSeason, getTeamMissedTimeStats } from "@/app/data/missedTimeData";
import { NFL_TEAMS } from "@/app/data/nflTeams";
import RefreshIcon from "@mui/icons-material/Refresh";
import FilterListIcon from "@mui/icons-material/FilterList";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Map dashboard types to display names
const dashboardTitles: Record<string, string> = {
  "dashboard": "Dashboard",
  "missed-time": "Missed Time",
  "concussion": "Concussion",
  "shoulder": "Shoulder",
  "lex-sprain": "LEX Sprain",
  "lex-strain": "LEX Strain",
  "acl": "ACL",
  "hamstring": "Hamstring",
  "other-injuries": "Other Injuries",
  "recovery-time": "Recovery Time",
  "team-view": "Team View",
};

// Map dashboard types to injury types for specific dashboards
const dashboardToInjuryType: Record<string, InjuryType | undefined> = {
  "concussion": "Concussion",
  "shoulder": "Shoulder",
  "lex-sprain": "LEX Sprain",
  "lex-strain": "LEX Strain",
  "acl": "ACL",
  "hamstring": "Hamstring",
};

export function DashboardPage() {
  const { dashboardType } = useParams<{ dashboardType: string }>();
  const [filtersOpen, setFiltersOpen] = useState(true); // Open by default
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filterState, setFilterState] = useState<FilterState>({
    season: "2024",
    benchmarkValue: "",
    startDate: null,
    endDate: null,
    quickDateRange: "",
    sessionTypes: [],
    injuryStatus: "",
    teamId: "18", // Default to New York Giants - Changed to string
  }); // Default to 2024 season

  const dashboardTitle = dashboardType 
    ? dashboardTitles[dashboardType] || "Dashboard"
    : "Dashboard";

  // Calculate data based on filters
  const dashboardData = useMemo(() => {
    const injuryType = dashboardType ? dashboardToInjuryType[dashboardType] : undefined;
    
    if (injuryType) {
      return getInjuryTypeData(filterState, injuryType);
    }
    
    return getFilteredData(filterState);
  }, [filterState, dashboardType]);

  // Calculate benchmark comparison if we have any filters applied
  const benchmarkData = useMemo(() => {
    // Show benchmark comparison if any filter is applied (all are time-based periods)
    if (filterState && (
      filterState.season || 
      filterState.benchmarkValue || 
      filterState.startDate || 
      filterState.endDate || 
      filterState.quickDateRange ||
      filterState.sessionTypes?.length ||
      filterState.injuryStatus
    )) {
      return getBenchmarkComparison(filterState, 3);
    }
    return null;
  }, [filterState]);

  // Calculate percentage changes for each injury type
  const injuryTypeMetrics = useMemo(() => {
    const types: InjuryType[] = ["Concussion", "Shoulder", "LEX Sprain", "LEX Strain", "ACL", "Hamstring"];
    
    return types.map(type => {
      const typeData = getInjuryTypeData(filterState, type);
      const currentCount = typeData.metrics.totalInjuries;
      
      let percentChange = 0;
      let hasChange = false;
      
      if (benchmarkData) {
        const benchmarkTypeData = getInjuryTypeData({
          ...filterState!,
          season: "",
          benchmarkValue: "3-Year Average"
        }, type);
        const benchmarkCount = benchmarkTypeData.metrics.totalInjuries;
        
        if (benchmarkCount > 0) {
          percentChange = ((currentCount - benchmarkCount) / benchmarkCount) * 100;
          hasChange = true;
        }
      }
      
      return {
        type,
        count: currentCount,
        percentChange,
        hasChange,
      };
    });
  }, [filterState, benchmarkData]);

  // Missed Time Dashboard Data
  const missedTimeData = useMemo(() => {
    if (dashboardType !== "missed-time") return null;

    const season = parseInt(filterState.season || "2024");
    const teamId = parseInt(filterState.teamId || "18"); // Convert string to number, default to New York Giants
    const teamInfo = NFL_TEAMS.find(t => t.id === teamId);

    const benchmarkData = getBenchmarkData(teamId, season);
    const standingData = getTeamStandingPosition(teamId, season);
    const currentSeasonStats = getTeamMissedTimeStats(teamId, season);
    const nflAvg = getNFLAvgForSeason(season);

    return {
      teamName: teamInfo?.name || "Team",
      season,
      benchmarkData,
      standingData,
      currentSeasonStats,
      nflAvg,
    };
  }, [dashboardType, filterState]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    // Filter state persists - no reset needed
  };

  const handleFilterChange = (filters: FilterState) => {
    setFilterState(filters);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "var(--background)",
      }}
    >
      {/* Main Navigation */}
      <MainNavigation />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {/* AppBar Header */}
        <AppBarHeader
          pageTitle={dashboardTitle}
          selectedSquad="First Team"
          squads={[
            "First Team",
            "Second Team",
            "Under 18s",
            "Under 16s",
          ]}
          userName="JSM"
          onSquadChange={(squad) =>
            console.log("Squad changed:", squad)
          }
          onAvatarClick={() => console.log("Avatar clicked")}
        />

        {/* Page Content */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
              overflow: "auto",
            }}
          >
            {/* Tabs Section - Hide for main Dashboard */}
            {dashboardType !== "dashboard" && (
              <Box
                sx={{
                  borderBottom: "var(--border-width-thin) solid var(--border-default)",
                  backgroundColor: "var(--white)",
                  px: "var(--spacing-6)",
                }}
              >
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  sx={{
                    "& .MuiTabs-indicator": {
                      backgroundColor: "var(--primary-main)",
                    },
                    "& .MuiTab-root": {
                      fontFamily: "var(--font-family-base)",
                      textTransform: "none",
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-secondary)",
                      "&.Mui-selected": {
                        color: "var(--primary-main)",
                      },
                    },
                  }}
                >
                  <Tab label="Season" />
                  <Tab label="Position" />
                  <Tab label="Team" />
                </Tabs>
              </Box>
            )}

            {/* Dashboard Content */}
            <Box
              sx={{
                px: "var(--spacing-6)",
                py: "var(--spacing-4)",
                overflow: "auto",
              }}
            >
              <Header
                title={dashboardTitle}
                actions={
                  <>
                    <IconButton
                      sx={{
                        backgroundColor: "#F1F2F3",
                        color: "var(--color-text-primary)",
                        borderRadius: "var(--radius-sm)",
                        p: "var(--spacing-2)",
                        "&:hover": {
                          backgroundColor: "#E0E1E2",
                        },
                      }}
                    >
                      <RefreshIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => setFiltersOpen(!filtersOpen)}
                      sx={{
                        backgroundColor: filtersOpen ? "#E0E1E2" : "#F1F2F3",
                        color: "var(--color-text-primary)",
                        borderRadius: "var(--radius-sm)",
                        p: "var(--spacing-2)",
                        "&:hover": {
                          backgroundColor: "#E0E1E2",
                        },
                      }}
                    >
                      <FilterListIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => setDrawerOpen(!drawerOpen)}
                      sx={{
                        backgroundColor: "#F1F2F3",
                        color: "var(--color-text-primary)",
                        borderRadius: "var(--radius-sm)",
                        p: "var(--spacing-2)",
                        "&:hover": {
                          backgroundColor: "#E0E1E2",
                        },
                      }}
                    >
                      <FolderOutlinedIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: "#F1F2F3",
                        color: "var(--color-text-primary)",
                        borderRadius: "var(--radius-sm)",
                        p: "var(--spacing-2)",
                        "&:hover": {
                          backgroundColor: "#E0E1E2",
                        },
                      }}
                    >
                      <MoreVertIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                  </>
                }
                sx={{ mb: "var(--spacing-4)" }}
              />
              {filtersOpen && <DashboardFilters onFilterChange={handleFilterChange} showTeamFilter={dashboardType === "missed-time"} />}
              
              {/* Conditionally render Missed Time Dashboard or Default Dashboard */}
              {dashboardType === "missed-time" && missedTimeData ? (
                <Grid container spacing={2} sx={{ width: "100%", minWidth: 0 }}>
                  {/* Horizontal Bar Chart */}
                  <Grid size={{ xs: 12, md: 8 }} sx={{ minWidth: 0 }}>
                    <HorizontalBarChartCard
                      title={`Missed Time Injuries Benchmark - ${missedTimeData.teamName}`}
                      data={[
                        {
                          category: "1-year Team Avg",
                          value: missedTimeData.benchmarkData.oneYearTeamAvg,
                          color: "#86EFAC",
                        },
                        {
                          category: `${missedTimeData.season}`,
                          value: missedTimeData.benchmarkData.currentSeason,
                          color: "#00C4B4",
                        },
                        {
                          category: "3-Yr Avg",
                          value: missedTimeData.benchmarkData.threeYearAvg,
                          color: "#1F2937",
                        },
                        {
                          category: "1-year NFL Avg",
                          value: missedTimeData.benchmarkData.oneYearNFLAvg,
                          color: "#FF6B35",
                        },
                      ]}
                      height={300}
                      maxValue={30}
                    />
                  </Grid>

                  {/* Stats Card */}
                  <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: 0 }}>
                    <MissedTimeStatsCard
                      season={missedTimeData.season}
                      teamAvg={missedTimeData.currentSeasonStats?.missedTimeInjuries || 0}
                      nflAvg={missedTimeData.nflAvg}
                      standingPosition={missedTimeData.standingData.position}
                      isTied={missedTimeData.standingData.isTied}
                      numberOfInjuries={missedTimeData.currentSeasonStats?.totalInjuries || 0}
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2} sx={{ width: "100%", minWidth: 0 }}>
                {/* Top Row - 7 Injury Metric Cards - All Inline */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 12/7 }} sx={{ minWidth: 0 }}>
                  <MetricCard 
                    value={`${dashboardData.metrics.totalInjuries}`}
                    label="Total Injuries" 
                    trend={benchmarkData ? { 
                      value: `${Math.abs(((dashboardData.metrics.totalInjuries - benchmarkData.benchmark.metrics.totalInjuries) / benchmarkData.benchmark.metrics.totalInjuries * 100).toFixed(1))}%`, 
                      isPositive: dashboardData.metrics.totalInjuries < benchmarkData.benchmark.metrics.totalInjuries 
                    } : undefined}
                    color={benchmarkData && dashboardData.metrics.totalInjuries < benchmarkData.benchmark.metrics.totalInjuries ? "#34A853" : "#5F6368"} 
                  />
                </Grid>
                {injuryTypeMetrics.map((metric, index) => (
                  <Grid key={metric.type} size={{ xs: 12, sm: 6, md: 4, lg: 12/7 }} sx={{ minWidth: 0 }}>
                    <MetricCard 
                      value={`${metric.count}`}
                      label={metric.type}
                      trend={metric.hasChange ? { 
                        value: `${Math.abs(metric.percentChange).toFixed(1)}%`, 
                        isPositive: metric.percentChange < 0 
                      } : undefined}
                      color={metric.hasChange ? (metric.percentChange < 0 ? "#34A853" : metric.percentChange > 0 ? "#EA4335" : "#5F6368") : "#5F6368"} 
                    />
                  </Grid>
                ))}

                {/* Bottom Section - Benchmark Bar Chart */}
                <Grid size={{ xs: 12 }} sx={{ minWidth: 0 }}>
                  <BarChartCard
                    title={benchmarkData 
                      ? `${filterState?.season || 'Current'} Season vs 3-Year Average`
                      : "Injury Distribution by Type"
                    }
                    data={injuryTypeMetrics.map(metric => ({
                      category: metric.type,
                      value: metric.count,
                    }))}
                    dataKey="value"
                    xAxisKey="category"
                    color="#00C4B4"
                    height={350}
                  />
                </Grid>
              </Grid>
              )}
            </Box>
          </Box>
          <DashboardDrawer open={drawerOpen} />
        </Box>
      </Box>
    </Box>
  );
}