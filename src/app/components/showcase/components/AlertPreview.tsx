import { Alert, AlertTitle, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function AlertPreview() {
  return (
    <PreviewSection title="Alert" description="Alerts display important messages in a way that attracts user's attention without interrupting their task.">
      <ExampleBlock title="Severities">
        <Stack spacing={2}>
          <Alert severity="error" sx={{ fontFamily: 'var(--font-family-base)' }}>This is an error alert</Alert>
          <Alert severity="warning" sx={{ fontFamily: 'var(--font-family-base)' }}>This is a warning alert</Alert>
          <Alert severity="info" sx={{ fontFamily: 'var(--font-family-base)' }}>This is an info alert</Alert>
          <Alert severity="success" sx={{ fontFamily: 'var(--font-family-base)' }}>This is a success alert</Alert>
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="With Title">
        <Stack spacing={2}>
          <Alert severity="error">
            <AlertTitle sx={{ fontFamily: 'var(--font-family-base)' }}>Error</AlertTitle>
            <span style={{ fontFamily: 'var(--font-family-base)' }}>This is an error alert with a title</span>
          </Alert>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
