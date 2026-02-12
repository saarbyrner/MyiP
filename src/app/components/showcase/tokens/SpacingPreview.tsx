import { Box, Typography, Stack } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

export function SpacingPreview() {
  const spacings = [
    { name: 'Spacing 0', variable: '--spacing-0', value: '0px' },
    { name: 'Spacing 1', variable: '--spacing-1', value: '4px' },
    { name: 'Spacing 2', variable: '--spacing-2', value: '8px' },
    { name: 'Spacing 3', variable: '--spacing-3', value: '12px' },
    { name: 'Spacing 4', variable: '--spacing-4', value: '16px' },
    { name: 'Spacing 5', variable: '--spacing-5', value: '20px' },
    { name: 'Spacing 6', variable: '--spacing-6', value: '24px' },
    { name: 'Spacing 7', variable: '--spacing-7', value: '28px' },
    { name: 'Spacing 8', variable: '--spacing-8', value: '32px' },
    { name: 'Spacing 10', variable: '--spacing-10', value: '40px' },
    { name: 'Spacing 12', variable: '--spacing-12', value: '48px' },
    { name: 'Spacing 16', variable: '--spacing-16', value: '64px' },
    { name: 'Spacing 20', variable: '--spacing-20', value: '80px' },
    { name: 'Spacing 24', variable: '--spacing-24', value: '96px' },
  ];

  return (
    <PreviewSection
      title="Spacing"
      description="Consistent spacing scale used throughout the design system for margins, padding, and gaps."
    >
      <Stack spacing={3}>
        {spacings.map((spacing) => (
          <Box
            key={spacing.variable}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: spacing.value,
                height: 40,
                backgroundColor: 'var(--blue-accent)',
                borderRadius: 'var(--radius-sm)',
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-primary)',
                }}
              >
                {spacing.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'monospace',
                  color: 'var(--text-secondary)',
                }}
              >
                {spacing.variable} = {spacing.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </PreviewSection>
  );
}
