import { useState } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  Chip,
  Box,
  LocalizationProvider,
  DatePicker,
} from "@/app/components/playbook";
import { AdapterDateFns } from "@/app/components/playbook";
import { SelectChangeEvent } from "@mui/material";
import { NFL_TEAMS } from "@/app/data/nflTeams";

interface DashboardFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
  showTeamFilter?: boolean;
}

export interface FilterState {
  season: string;
  benchmarkValue: string;
  startDate: Date | null;
  endDate: Date | null;
  quickDateRange: string;
  sessionTypes: string[];
  injuryStatus: string;
  teamId: string; // Changed from number | null to string
}

const SEASONS = ["2024", "2023", "2022", "2021", "2020"];
const BENCHMARK_OPTIONS = ["2-Year Average", "3-Year Average", "5-Year Average"];
const QUICK_DATE_RANGES = [
  "Preseason to Playoffs",
  "Week 1 to Week 8",
  "Week 9 to Week 17",
  "Playoffs Only",
];
const SESSION_TYPES = [
  "Games",
  "Practice",
  "Conditioning",
  "Recovery",
  "Strength Training",
  "Film Study",
];
const INJURY_STATUS_OPTIONS = ["Out", "Limited"];

export function DashboardFilters({ onFilterChange, showTeamFilter }: DashboardFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    season: "2024",
    benchmarkValue: "",
    startDate: null,
    endDate: null,
    quickDateRange: "",
    sessionTypes: [],
    injuryStatus: "",
    teamId: "", // Changed from null to ""
  });

  const handleSeasonChange = (event: SelectChangeEvent<string>) => {
    const newFilters = {
      ...filters,
      season: event.target.value,
      benchmarkValue: "",
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleBenchmarkChange = (event: SelectChangeEvent<string>) => {
    const newFilters = {
      ...filters,
      benchmarkValue: event.target.value,
      season: "",
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleDateRangeChange = (newValue: Date | null) => {
    const newFilters = { ...filters, startDate: newValue };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    const newFilters = { ...filters, endDate: newValue };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleQuickDateRangeChange = (event: SelectChangeEvent<string>) => {
    const newFilters = { ...filters, quickDateRange: event.target.value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSessionTypesChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const newFilters = {
      ...filters,
      sessionTypes: typeof value === "string" ? value.split(",") : value,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleInjuryStatusChange = (event: SelectChangeEvent<string>) => {
    const newFilters = { ...filters, injuryStatus: event.target.value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSessionTypeDelete = (typeToDelete: string) => {
    const newSessionTypes = filters.sessionTypes.filter(
      (type) => type !== typeToDelete
    );
    const newFilters = { ...filters, sessionTypes: newSessionTypes };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleTeamChange = (event: SelectChangeEvent<string>) => {
    const newFilters = { ...filters, teamId: event.target.value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          overflowX: "auto",
          pb: 1,
        }}
      >
        {/* Season Filter */}
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel variant="filled">Season</InputLabel>
          <Select
            variant="filled"
            value={filters.season}
            onChange={handleSeasonChange}
            label="Season"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {SEASONS.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Benchmark Filter */}
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel variant="filled">Benchmark</InputLabel>
          <Select
            variant="filled"
            value={filters.benchmarkValue}
            onChange={handleBenchmarkChange}
            label="Benchmark"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {BENCHMARK_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Date Range Picker */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <DatePicker
            value={filters.startDate}
            onChange={handleDateRangeChange}
            size="small"
            label="Start Date"
            slotProps={{
              textField: {
                variant: "filled",
                size: "small",
                sx: { minWidth: 240 },
              },
            }}
          />
          <DatePicker
            value={filters.endDate}
            onChange={handleEndDateChange}
            size="small"
            label="End Date"
            slotProps={{
              textField: {
                variant: "filled",
                size: "small",
                sx: { minWidth: 240 },
              },
            }}
          />
        </Box>

        {/* Set Periods Filter */}
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel variant="filled">Set Periods</InputLabel>
          <Select
            variant="filled"
            value={filters.quickDateRange}
            onChange={handleQuickDateRangeChange}
            label="Set Periods"
          >
            <MenuItem value="">
              <em>Custom</em>
            </MenuItem>
            {QUICK_DATE_RANGES.map((range) => (
              <MenuItem key={range} value={range}>
                {range}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Session Types Filter */}
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel variant="filled">Session Types</InputLabel>
          <Select
            variant="filled"
            multiple
            value={filters.sessionTypes}
            onChange={handleSessionTypesChange}
            label="Session Types"
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    size="small"
                    onDelete={(e) => {
                      e.stopPropagation();
                      handleSessionTypeDelete(value);
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                    }}
                  />
                ))}
              </Box>
            )}
          >
            {SESSION_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={filters.sessionTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Injury Status Filter */}
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel variant="filled">Injury Status</InputLabel>
          <Select
            variant="filled"
            value={filters.injuryStatus}
            onChange={handleInjuryStatusChange}
            label="Injury Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {INJURY_STATUS_OPTIONS.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Team Filter */}
        {showTeamFilter && (
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel variant="filled">Team</InputLabel>
            <Select
              variant="filled"
              value={filters.teamId}
              onChange={handleTeamChange}
              label="Team"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {NFL_TEAMS.map((team) => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
    </LocalizationProvider>
  );
}