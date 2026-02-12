import { Box, Typography, Stack } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

export function TypographyPreview() {
  const typographyVariants = [
    { variant: 'h1', label: 'H1 Heading', size: '--font-size-h1 (96px)' },
    { variant: 'h2', label: 'H2 Heading', size: '--font-size-h2 (60px)' },
    { variant: 'h3', label: 'H3 Heading', size: '--font-size-h3 (48px)' },
    { variant: 'h4', label: 'H4 Heading', size: '--font-size-h4 (34px)' },
    { variant: 'h5', label: 'H5 Heading', size: '--font-size-h5 (24px)' },
    { variant: 'h6', label: 'H6 Heading', size: '--font-size-h6 (20px)' },
    { variant: 'subtitle1', label: 'Subtitle 1', size: '--font-size-subtitle1 (16px)' },
    { variant: 'subtitle2', label: 'Subtitle 2', size: '--font-size-subtitle2 (14px)' },
    { variant: 'body1', label: 'Body 1', size: '--font-size-body1 (16px)' },
    { variant: 'body2', label: 'Body 2', size: '--font-size-body2 (14px)' },
    { variant: 'caption', label: 'Caption', size: '--font-size-caption (12px)' },
    { variant: 'overline', label: 'Overline', size: '--font-size-overline (12px)' },
  ];

  const fontWeights = [
    { name: 'Light', variable: '--font-weight-light', value: '300' },
    { name: 'Regular', variable: '--font-weight-regular', value: '400' },
    { name: 'Medium', variable: '--font-weight-medium', value: '500' },
    { name: 'Semibold', variable: '--font-weight-semibold', value: '600' },
    { name: 'Bold', variable: '--font-weight-bold', value: '700' },
  ];

  return (
    <PreviewSection
      title="Typography"
      description="Typography scale using Open Sans font family. All sizes and weights are defined as CSS variables."
    >
      <Stack spacing={4}>
        {/* Typography Scale */}
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
            Typography Scale
          </Typography>
          <Stack spacing={2}>
            {typographyVariants.map((item) => (
              <Box key={item.variant}>
                <Typography
                  variant={item.variant as any}
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {item.size}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Font Weights */}
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
            Font Weights
          </Typography>
          <Stack spacing={2}>
            {fontWeights.map((weight) => (
              <Box key={weight.variable}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    fontWeight: weight.value,
                    color: 'var(--text-primary)',
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {weight.name} - {weight.variable} ({weight.value})
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Font Family */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              mb: 2,
            }}
          >
            Font Family
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            All typography uses{' '}
            <Typography
              component="span"
              sx={{
                fontFamily: 'monospace',
                backgroundColor: 'var(--grey-50)',
                px: 1,
                py: 0.5,
                borderRadius: 'var(--radius-sm)',
              }}
            >
              --font-family-base: 'Open Sans', sans-serif
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </PreviewSection>
  );
}
