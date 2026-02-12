import { useState } from 'react';
import { Snackbar, Button, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function SnackbarPreview() {
  const [open, setOpen] = useState(false);

  return (
    <PreviewSection title="Snackbar" description="Snackbars provide brief messages about app processes at the bottom of the screen.">
      <ExampleBlock title="Basic">
        <Stack spacing={2}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>
            Show Snackbar
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            message="This is a snackbar message"
          />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
