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
}

export function HorizontalBarChartCard({
  title,
  data,
  height = 300,
  maxValue,
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
            margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EAED" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, maxValue || "auto"]}
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={{ stroke: "#E8EAED" }}
              label={{
                value: "Missed Time Injuries",
                position: "insideBottom",
                offset: -5,
                style: {
                  fontFamily: "var(--font-family-base)",
                  fontSize: 12,
                  fill: "#5F6368",
                },
              }}
            />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={false}
              tickLine={false}
              width={110}
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
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
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
