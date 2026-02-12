import { Paper, Typography, Box } from "@mui/material";

interface MetricCardProps {
  value: string | number;
  label: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: string;
}

export function MetricCard({ value, label, trend, color = "var(--primary-main)" }: MetricCardProps) {
  return (
    <Paper
      sx={{
        p: "var(--spacing-3)",
        borderRadius: "var(--radius-lg)",
        border: "var(--border-width-thin) solid var(--border-default)",
        backgroundColor: "var(--white)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "var(--spacing-1)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-h5)",
          fontWeight: "var(--font-weight-semibold)",
          color: color,
          lineHeight: "var(--line-height-tight)",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontFamily: "var(--font-family-base)",
          color: "var(--text-secondary)",
          fontSize: "var(--font-size-body2)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "var(--line-height-normal)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </Typography>
      {trend && (
        <Typography
          sx={{
            fontFamily: "var(--font-family-base)",
            color: trend.isPositive ? "var(--success-main)" : "var(--error-main)",
            fontSize: "var(--font-size-caption)",
            fontWeight: "var(--font-weight-regular)",
          }}
        >
          {trend.isPositive ? "↑" : "↓"} {trend.value}
        </Typography>
      )}
    </Paper>
  );
}