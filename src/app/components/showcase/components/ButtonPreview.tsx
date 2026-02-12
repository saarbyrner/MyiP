import { Stack, Button } from '@/app/components/playbook';
import { Delete, Send, Favorite } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function ButtonPreview() {
  return (
    <PreviewSection
      title="Button"
      description="Buttons allow users to take actions with a single tap. Use contained for primary actions, outlined for secondary, and text for tertiary."
    >
      <ExampleBlock title="Variants">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Contained
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Outlined
          </Button>
          <Button
            variant="text"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Text
          </Button>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Colors">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Primary
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Secondary
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Error
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Success
          </Button>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="small"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Small
          </Button>
          <Button
            variant="contained"
            size="medium"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Large
          </Button>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="With Icons">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<Send />}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            endIcon={<Favorite />}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Like
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Delete
          </Button>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="States">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            disabled
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Disabled
          </Button>
          <Button
            variant="outlined"
            disabled
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Disabled
          </Button>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
