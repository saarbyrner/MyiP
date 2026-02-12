import { Rating, Stack, Typography } from '@/app/components/playbook';
import { Favorite } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function RatingPreview() {
  return (
    <PreviewSection
      title="Rating"
      description="Ratings provide insight regarding others' opinions and experiences with a product."
    >
      <ExampleBlock title="Basic">
        <Rating defaultValue={2.5} precision={0.5} />
      </ExampleBlock>
      <ExampleBlock title="Custom Icon">
        <Rating icon={<Favorite fontSize="inherit" />} emptyIcon={<Favorite fontSize="inherit" />} defaultValue={3} />
      </ExampleBlock>
      <ExampleBlock title="Sizes">
        <Stack spacing={2}>
          <Rating defaultValue={2} size="small" />
          <Rating defaultValue={2} size="medium" />
          <Rating defaultValue={2} size="large" />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
