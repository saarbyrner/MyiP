import { Tooltip, IconButton, Stack } from '@/app/components/playbook';
import { Delete, Add } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function TooltipPreview() {
  return (
    <PreviewSection title="Tooltip" description="Tooltips display informative text when users hover over, focus on, or tap an element.">
      <ExampleBlock title="Positions">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Delete"><IconButton><Delete /></IconButton></Tooltip>
          <Tooltip title="Add" placement="top"><IconButton><Add /></IconButton></Tooltip>
          <Tooltip title="Add" placement="right"><IconButton><Add /></IconButton></Tooltip>
          <Tooltip title="Add" placement="bottom"><IconButton><Add /></IconButton></Tooltip>
          <Tooltip title="Add" placement="left"><IconButton><Add /></IconButton></Tooltip>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
