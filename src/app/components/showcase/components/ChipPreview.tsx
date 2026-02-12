import { Chip, Stack } from '@/app/components/playbook';
import { Face, Done } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function ChipPreview() {
  return (
    <PreviewSection title="Chip" description="Chips are compact elements that represent an input, attribute, or action.">
      <ExampleBlock title="Basic">
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip label="Default" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <Chip label="Primary" color="primary" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <Chip label="Success" color="success" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <Chip label="Error" color="error" sx={{ fontFamily: 'var(--font-family-base)' }} />
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Variants">
        <Stack direction="row" spacing={1}>
          <Chip label="Filled" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <Chip label="Outlined" variant="outlined" sx={{ fontFamily: 'var(--font-family-base)' }} />
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="With Icons">
        <Stack direction="row" spacing={1}>
          <Chip icon={<Face />} label="With Icon" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <Chip icon={<Face />} label="Deletable" onDelete={() => {}} sx={{ fontFamily: 'var(--font-family-base)' }} />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
