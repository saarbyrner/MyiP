import { Box, Typography, Stack, Grid } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

export function BordersPreview() {
  const borderWidths = [
    { name: 'Thin', variable: '--border-width-thin', value: '1px' },
    { name: 'Medium', variable: '--border-width-medium', value: '2px' },
    { name: 'Thick', variable: '--border-width-thick', value: '4px' },
  ];

  const borderRadius = [
    { name: 'None', variable: '--radius-none', value: '0px' },
    { name: 'XS', variable: '--radius-xs', value: '1px' },
    { name: 'SM', variable: '--radius-sm', value: '2px' },
    { name: 'MD', variable: '--radius-md', value: '4px' },
    { name: 'LG', variable: '--radius-lg', value: '6px' },
    { name: 'XL', variable: '--radius-xl', value: '8px' },
    { name: '2XL', variable: '--radius-2xl', value: '12px' },
    { name: '3XL', variable: '--radius-3xl', value: '16px' },
    { name: 'Full', variable: '--radius-full', value: '9999px' },
  ];

  return (
    <PreviewSection
      title="Borders & Radius"
      description="Border width and border radius values for consistent styling across components."
    >
      <Stack spacing={4}>
        {/* Border Widths */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              mb: 3,
            }}
          >
            Border Widths
          </Typography>
          <Stack spacing={3}>
            {borderWidths.map((border) => (
              <Box key={border.variable}>
                <Box
                  sx={{
                    height: 60,
                    borderStyle: 'solid',
                    borderWidth: border.value,
                    borderColor: 'var(--border-color-dark)',
                    borderRadius: 'var(--radius-md)',
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {border.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {border.variable} = {border.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Border Radius */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              mb: 3,
            }}
          >
            Border Radius
          </Typography>
          <Grid container spacing={3}>
            {borderRadius.map((radius) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={radius.variable}>
                <Box
                  sx={{
                    height: 80,
                    backgroundColor: 'var(--blue-accent)',
                    borderRadius: radius.value,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {radius.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {radius.variable} = {radius.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </PreviewSection>
  );
}
