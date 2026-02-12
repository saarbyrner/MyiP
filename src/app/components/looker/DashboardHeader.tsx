import { Box, Typography, IconButton } from "@mui/material";
import { Refresh as RefreshIcon, FilterList as FilterListIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";

interface DashboardHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export function DashboardHeader({ title, actions }: DashboardHeaderProps) {
  return (
    <Box
      sx={{
        p: "var(--spacing-6)",
        backgroundColor: "var(--white)",
        borderBottom: "var(--border-width-thin) solid var(--border-default)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "var(--font-family-base)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </Typography>
        {actions && (
          <Box sx={{ display: "flex", gap: "var(--spacing-2)" }}>
            {actions}
          </Box>
        )}
      </Box>
    </Box>
  );
}