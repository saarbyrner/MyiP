import { useState } from 'react';
import { Backdrop, Button, CircularProgress, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function BackdropPreview() {
  const [open, setOpen] = useState(false);

  return (
    <PreviewSection title="Backdrop" description="The Backdrop component is used to provide emphasis on a particular element or parts of it.">
      <ExampleBlock title="Basic">
        <Stack spacing={2}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>
            Show Backdrop
          </Button>
          <Backdrop open={open} onClick={() => setOpen(false)} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
