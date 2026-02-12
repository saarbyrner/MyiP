import { Stack, Fab } from '@/app/components/playbook';
import { Add, Edit, Favorite, Navigation } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function FabPreview() {
  return (
    <PreviewSection
      title="Floating Action Button (FAB)"
      description="A floating action button represents the primary action in an application."
    >
      <ExampleBlock title="Variants">
        <Stack direction="row" spacing={2}>
          <Fab color="primary">
            <Add />
          </Fab>
          <Fab color="secondary">
            <Edit />
          </Fab>
          <Fab color="error">
            <Favorite />
          </Fab>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab size="small" color="primary">
            <Add />
          </Fab>
          <Fab size="medium" color="primary">
            <Add />
          </Fab>
          <Fab size="large" color="primary">
            <Add />
          </Fab>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Extended">
        <Stack direction="row" spacing={2}>
          <Fab
            variant="extended"
            color="primary"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            <Navigation sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab
            variant="extended"
            color="secondary"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            <Favorite sx={{ mr: 1 }} />
            Like
          </Fab>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Disabled">
        <Fab disabled>
          <Add />
        </Fab>
      </ExampleBlock>
    </PreviewSection>
  );
}
