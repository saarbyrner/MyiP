import { Paper, Stack, Typography } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function PaperPreview() {
  return (
    <PreviewSection title="Paper" description="Paper is a container component with elevation and can be used to create cards, dialogs, and more.">
      <ExampleBlock title="Elevation">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
            <Paper
              key={elevation}
              elevation={elevation}
              sx={{ p: 2, minWidth: 100, textAlign: 'center' }}
            >
              <Typography variant="caption" sx={{ fontFamily: 'var(--font-family-base)' }}>
                elevation={elevation}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Variants">
        <Stack spacing={2}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Default (elevation)</Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Outlined</Typography>
          </Paper>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
