import { Box, Typography, Grid } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

export function ShadowsPreview() {
  const shadows = [
    { name: 'XS', variable: '--shadow-xs' },
    { name: 'SM', variable: '--shadow-sm' },
    { name: 'MD', variable: '--shadow-md' },
    { name: 'LG', variable: '--shadow-lg' },
    { name: 'XL', variable: '--shadow-xl' },
    { name: 'Nav', variable: '--shadow-nav' },
  ];

  return (
    <PreviewSection
      title="Shadows"
      description="Elevation shadows for creating depth and hierarchy in the interface."
    >
      <Grid container spacing={4}>
        {shadows.map((shadow) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={shadow.variable}>
            <Box
              sx={{
                height: 120,
                backgroundColor: 'var(--background-paper)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: `var(${shadow.variable})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                }}
              >
                {shadow.name}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'monospace',
                color: 'var(--text-secondary)',
              }}
            >
              {shadow.variable}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </PreviewSection>
  );
}
