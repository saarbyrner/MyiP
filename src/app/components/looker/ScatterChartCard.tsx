import { Paper, Typography, Box } from "@mui/material";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

interface ScatterChartCardProps {
  title?: string;
  data: Array<{ [key: string]: string | number }>;
  xKey: string;
  yKey: string;
  zKey?: string; // Optional size key for bubble chart
  color?: string;
  height?: number;
}

export function ScatterChartCard({
  title,
  data,
  xKey,
  yKey,
  zKey,
  color = "#4285F4",
  height = 300,
}: ScatterChartCardProps) {
  return (
    <Paper
      sx={{
        p: "var(--spacing-6)",
        borderRadius: "var(--radius-lg)",
        border: "var(--border-width-thin) solid var(--border-default)",
        backgroundColor: "var(--white)",
        height: "100%",
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
      <Box sx={{ width: "100%", height }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EAED" />
            <XAxis
              type="number"
              dataKey={xKey}
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={{ stroke: "#E8EAED" }}
            />
            <YAxis
              type="number"
              dataKey={yKey}
              tick={{ fontFamily: "var(--font-family-base)", fontSize: 12, fill: "#5F6368" }}
              axisLine={false}
              tickLine={false}
            />
            {zKey && <ZAxis type="number" dataKey={zKey} range={[50, 400]} />}
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                fontFamily: "var(--font-family-base)",
                backgroundColor: "var(--white)",
                border: "var(--border-width-thin) solid var(--border-default)",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
            <Scatter data={data} fill={color} fillOpacity={0.6} />
          </ScatterChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}