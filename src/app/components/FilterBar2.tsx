import {
  Box,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from "@/app/components/playbook";
import { SearchField } from "@/app/components/inputs/SearchField";
import { DatePickerField } from "@/app/components/inputs/DatePickerField";
import { useState } from "react";

const athleteOptions = [
  { id: 1, label: "John Smith" },
  { id: 2, label: "Sarah Johnson" },
  { id: 3, label: "Mike Williams" },
  { id: 4, label: "Emily Davis" },
  { id: 5, label: "Chris Brown" },
];

const teamOptions = [
  "U16 Boys",
  "U18 Girls",
  "Senior Men",
  "Senior Women",
  "Academy",
];

export function FilterBar2() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedAthletes, setSelectedAthletes] = useState<typeof athleteOptions>([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "var(--spacing-2)",
        overflowX: "auto",
        mb: "var(--spacing-4)",
      }}
    >
      {/* Search */}
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{
          maxWidth: "320px",
        }}
      />

      {/* Athletes */}
      <Autocomplete
        multiple
        size="small"
        options={athleteOptions}
        value={selectedAthletes}
        onChange={(_, newValue) => setSelectedAthletes(newValue)}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Athletes"
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                {...tagProps}
                label={option.label}
                size="small"
              />
            );
          })
        }
        sx={{
          minWidth: "260px",
          maxWidth: "320px",
        }}
      />

      {/* Team */}
      <FormControl variant="filled" size="small" sx={{ minWidth: "180px", maxWidth: "320px" }}>
        <InputLabel>Team</InputLabel>
        <Select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          label="Team"
        >
          {teamOptions.map((team) => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Date */}
      <DatePickerField
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        sx={{
          maxWidth: "320px",
        }}
      />
    </Box>
  );
}