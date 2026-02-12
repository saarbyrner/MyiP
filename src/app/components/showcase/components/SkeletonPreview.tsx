import { Skeleton, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function SkeletonPreview() {
  return (
    <PreviewSection title="Skeleton" description="Display a placeholder preview of your content before the data gets loaded.">
      <ExampleBlock title="Variants">
        <Stack spacing={2}>
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
