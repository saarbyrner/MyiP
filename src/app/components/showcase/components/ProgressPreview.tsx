import { CircularProgress, LinearProgress, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function ProgressPreview() {
  return (
    <PreviewSection title="Progress" description="Progress indicators inform users about the status of ongoing processes.">
      <ExampleBlock title="Circular">
        <Stack direction="row" spacing={2}>
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress variant="determinate" value={75} />
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Linear">
        <Stack spacing={2}>
          <LinearProgress />
          <LinearProgress color="secondary" />
          <LinearProgress variant="determinate" value={50} />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
