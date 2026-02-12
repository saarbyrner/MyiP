import { Typography, Stack } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

export function TypographyComponentPreview() {
  const variants: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline'> = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'subtitle1', 'subtitle2',
    'body1', 'body2',
    'caption', 'overline'
  ];

  return (
    <PreviewSection
      title="Typography Component"
      description="The Typography component makes it easy to apply a default set of font weights and sizes in your application."
    >
      <Stack spacing={2}>
        {variants.map((variant) => (
          <Typography
            key={variant}
            variant={variant}
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            {variant.toUpperCase()} - The quick brown fox jumps over the lazy dog
          </Typography>
        ))}
      </Stack>
    </PreviewSection>
  );
}
