import { Stack, IconButton } from '@/app/components/playbook';
import { Delete, Edit, Share, Favorite, MoreVert } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function IconButtonPreview() {
  return (
    <PreviewSection
      title="IconButton"
      description="Icon buttons are commonly used in toolbars and for actions that can be represented by an icon."
    >
      <ExampleBlock title="Basic">
        <Stack direction="row" spacing={2}>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Colors">
        <Stack direction="row" spacing={2}>
          <IconButton color="primary">
            <Favorite />
          </IconButton>
          <IconButton color="secondary">
            <Share />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
          <IconButton color="success">
            <Favorite />
          </IconButton>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton size="small">
            <Favorite fontSize="small" />
          </IconButton>
          <IconButton size="medium">
            <Favorite fontSize="medium" />
          </IconButton>
          <IconButton size="large">
            <Favorite fontSize="large" />
          </IconButton>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Disabled">
        <Stack direction="row" spacing={2}>
          <IconButton disabled>
            <Delete />
          </IconButton>
          <IconButton disabled color="primary">
            <Favorite />
          </IconButton>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
