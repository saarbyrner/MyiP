import { Paper, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface LineChartCardProps {
  title?: string;
  data: Array<{ [key: string]: string | number }>;
  dataKeys: string[];
  xAxisKey: string;
  colors?: string[];
  height?: number;
}

export function LineChartCard({
  title,
  data,
  dataKeys,
  xAxisKey,
  colors = ["#4285F4", "#34A853", "#FBBC04"],
  height = 300,
}: LineChartCardProps) {
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
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EAED" vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={{ stroke: "#E8EAED" }}
            />
            <YAxis
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                fontFamily: "var(--font-family-base)",
                backgroundColor: "var(--white)",
                border: "var(--border-width-thin) solid var(--border-default)",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
            <Legend
              wrapperStyle={{
                fontFamily: "var(--font-family-base)",
                fontSize: 12,
              }}
            />
            {dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}