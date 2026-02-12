import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function DialogPreview() {
  const [open, setOpen] = useState(false);

  return (
    <PreviewSection title="Dialog" description="Dialogs inform users about a task and can contain critical information or require decisions.">
      <ExampleBlock title="Basic">
        <Stack spacing={2}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{ fontFamily: 'var(--font-family-base)' }}>Dialog Title</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ fontFamily: 'var(--font-family-base)' }}>
                This is a sample dialog content. You can add any content here.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>Cancel</Button>
              <Button onClick={() => setOpen(false)} variant="contained" sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>Confirm</Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
