import { Paper, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { ChartLegendContent } from "../ui/chart";
import {
  cartesianGridConfig,
  xAxisConfig,
  yAxisConfig,
  tooltipConfig,
  legendConfig,
} from "./chartConfig";

interface HorizontalBarData {
  category: string;
  value: number;
  color: string;
}

interface HorizontalBarChartCardProps {
  title?: string;
  data: HorizontalBarData[];
  height?: number;
  maxValue?: number;
  xAxisLabel?: string;
  valueLabel?: string;
}

export function HorizontalBarChartCard({
  title,
  data,
  height = 300,
  maxValue,
  xAxisLabel,
  valueLabel = "Count",
}: HorizontalBarChartCardProps) {
  return (
    <Paper
      sx={{
        p: "var(--spacing-6)",
        borderRadius: "var(--radius-lg)",
        border: "var(--border-width-thin) solid var(--border-default)",
        backgroundColor: "var(--white)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: 0,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--font-family-base)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--text-primary)",
            mb: "var(--spacing-4)",
          }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ width: "100%", height: `${height}px`, minHeight: `${height}px`, minWidth: 0 }}>
        <ResponsiveContainer width="100%" height={height} minWidth={0} minHeight={height}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid {...cartesianGridConfig} horizontal={false} />
            <XAxis
              type="number"
              domain={[0, maxValue || "auto"]}
              {...xAxisConfig}
              label={xAxisLabel ? {
                value: xAxisLabel,
                position: "insideBottom",
                offset: -5,
                style: {
                  fontFamily: "var(--font-family-base)",
                  fontSize: 12,
                  fill: "var(--chart-axis-text)",
                },
              } : undefined}
            />
            <YAxis
              type="category"
              dataKey="category"
              {...yAxisConfig}
              width={150}
            />
            <Tooltip {...tooltipConfig} />
            <Legend {...legendConfig} content={ChartLegendContent} />
            <Bar dataKey="value" name={valueLabel} radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
