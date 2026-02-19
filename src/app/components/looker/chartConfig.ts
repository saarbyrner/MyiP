/**
 * Shared Looker-style chart configuration
 * Centralizes all Recharts styling to use CSS variables from the design system
 */

/**
 * Get a CSS variable value from the document root
 */
const getCSSVar = (varName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

/**
 * Get chart color by index (1-8)
 */
export const getChartColor = (index: number): string => {
  const colorIndex = ((index - 1) % 8) + 1;
  const color = getCSSVar(`--chart-${colorIndex}`);
  // Fallback colors - vibrant palette
  const fallbacks = ['#3B8EDB', '#D946C6', '#F97316', '#22C55E', '#FACC15', '#A5A5A5', '#3B82F6', '#1E40AF'];
  return color || fallbacks[colorIndex - 1];
};

/**
 * Get multiple chart colors as an array
 */
export const getChartColors = (count: number): string[] => {
  return Array.from({ length: count }, (_, i) => getChartColor(i + 1));
};

/**
 * CartesianGrid configuration - Looker's subtle grid style
 */
export const cartesianGridConfig = {
  strokeDasharray: "3 3",
  stroke: getCSSVar('--chart-grid') || '#EEEEEE',
  vertical: false,
  strokeOpacity: 1,
};

/**
 * XAxis configuration - Looker's clean axis style
 */
export const xAxisConfig = {
  tick: {
    fontFamily: getCSSVar('--font-family-base') || 'Roboto, sans-serif',
    fontSize: 12,
    fill: getCSSVar('--chart-axis-text') || '#666666',
  },
  axisLine: {
    stroke: getCSSVar('--chart-axis-line') || '#DDDDDD',
    strokeWidth: 1,
  },
  tickLine: false,
};

/**
 * YAxis configuration - Looker's minimal axis style
 */
export const yAxisConfig = {
  tick: {
    fontFamily: getCSSVar('--font-family-base') || 'Roboto, sans-serif',
    fontSize: 12,
    fill: getCSSVar('--chart-axis-text') || '#666666',
  },
  axisLine: false,
  tickLine: false,
};

/**
 * Tooltip configuration - Looker's clean tooltip style
 */
export const tooltipConfig = {
  contentStyle: {
    fontFamily: getCSSVar('--font-family-base') || 'Roboto, sans-serif',
    backgroundColor: getCSSVar('--chart-tooltip-bg') || '#FFFFFF',
    border: `1px solid ${getCSSVar('--chart-tooltip-border') || '#CCCCCC'}`,
    borderRadius: getCSSVar('--radius-md') || '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '12px',
  },
  cursor: {
    fill: 'rgba(0, 0, 0, 0.05)',
  },
};

/**
 * Legend configuration - Looker's legend style
 */
export const legendConfig = {
  wrapperStyle: {
    fontFamily: getCSSVar('--font-family-base') || 'Roboto, sans-serif',
    fontSize: 12,
    color: getCSSVar('--chart-axis-text') || '#666666',
  },
  iconType: "circle" as const,
  iconSize: 8,
  // Ensure legend items align icon and label vertically
  itemStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    lineHeight: 1,
    verticalAlign: 'middle',
  },
};

/**
 * Default chart margin
 */
export const defaultMargin = {
  top: 5,
  right: 20,
  left: 0,
  bottom: 5,
};

/**
 * Looker-style bar corner radius
 */
export const barRadius: [number, number, number, number] = [4, 4, 0, 0];

/**
 * Line chart configuration
 */
export const lineConfig = {
  strokeWidth: 2,
  dot: false,
  activeDot: { r: 5 },
  type: "monotone" as const,
};

/**
 * Active dot configuration for line charts
 */
export const activeDotConfig = {
  r: 6,
  strokeWidth: 2,
  stroke: "var(--chart-background)",
};

/**
 * Scatter chart configuration
 */
export const scatterConfig = {
  fillOpacity: 0.7,
};

/**
 * Get computed chart color values (for direct usage in components)
 */
export const getChartColorValues = () => ({
  grid: getCSSVar('--chart-grid') || '#EEEEEE',
  axisText: getCSSVar('--chart-axis-text') || '#666666',
  axisLine: getCSSVar('--chart-axis-line') || '#DDDDDD',
  background: getCSSVar('--chart-background') || '#FFFFFF',
  tooltipBg: getCSSVar('--chart-tooltip-bg') || '#FFFFFF',
  tooltipBorder: getCSSVar('--chart-tooltip-border') || '#CCCCCC',
  blueLight: getCSSVar('--chart-blue-light') || '#60A5FA',
  blueMedium: getCSSVar('--chart-blue-medium') || '#3B82F6',
  blueDark: getCSSVar('--chart-blue-dark') || '#2563EB',
  pinkLight: getCSSVar('--chart-pink-light') || '#F472B6',
  pinkMedium: getCSSVar('--chart-pink-medium') || '#EC4899',
  pinkDark: getCSSVar('--chart-pink-dark') || '#DB2777',
  gaugeBackground: getCSSVar('--chart-gauge-background') || '#E8E8E8',
  gaugePrimary: getCSSVar('--chart-gauge-primary') || '#5B9BD5',
  tableBar1: getCSSVar('--chart-table-bar-1') || '#9DC3E6',
  tableBar2: getCSSVar('--chart-table-bar-2') || '#CC5BC4',
  tableBar3: getCSSVar('--chart-table-bar-3') || '#ED7D31',
  tableBar4: getCSSVar('--chart-table-bar-4') || '#70AD47',
  chart1: getCSSVar('--chart-1') || '#3B8EDB',
  chart2: getCSSVar('--chart-2') || '#D946C6',
  chart3: getCSSVar('--chart-3') || '#F97316',
  chart4: getCSSVar('--chart-4') || '#22C55E',
  chart5: getCSSVar('--chart-5') || '#FACC15',
  chart6: getCSSVar('--chart-6') || '#A5A5A5',
  chart7: getCSSVar('--chart-7') || '#3B82F6',
  chart8: getCSSVar('--chart-8') || '#1E40AF',
});

/**
 * Get CSS variable directly (for component-level usage) - DEPRECATED, use getChartColorValues()
 */
export const chartVars = {
  grid: "var(--chart-grid)",
  axisText: "var(--chart-axis-text)",
  axisLine: "var(--chart-axis-line)",
  background: "var(--chart-background)",
  tooltipBg: "var(--chart-tooltip-bg)",
  tooltipBorder: "var(--chart-tooltip-border)",
  tooltipShadow: "var(--chart-tooltip-shadow)",
  blueLight: "var(--chart-blue-light)",
  blueMedium: "var(--chart-blue-medium)",
  blueDark: "var(--chart-blue-dark)",
  pinkLight: "var(--chart-pink-light)",
  pinkMedium: "var(--chart-pink-medium)",
  pinkDark: "var(--chart-pink-dark)",
  gaugeBackground: "var(--chart-gauge-background)",
  gaugePrimary: "var(--chart-gauge-primary)",
  tableBar1: "var(--chart-table-bar-1)",
  tableBar2: "var(--chart-table-bar-2)",
  tableBar3: "var(--chart-table-bar-3)",
  tableBar4: "var(--chart-table-bar-4)",
};
