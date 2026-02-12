import { Divider, Stack, Typography, Box } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function DividerPreview() {
  return (
    <PreviewSection title="Divider" description="A divider is a thin line that groups content in lists and layouts.">
      <ExampleBlock title="Horizontal">
        <Box>
          <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Above</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Below</Typography>
        </Box>
      </ExampleBlock>
      <ExampleBlock title="With Text">
        <Divider sx={{ fontFamily: 'var(--font-family-base)' }}>CENTER</Divider>
      </ExampleBlock>
      <ExampleBlock title="Vertical">
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Item 1</Typography>
          <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Item 2</Typography>
          <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Item 3</Typography>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
