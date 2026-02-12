import { AppBar, Toolbar, Typography, IconButton, Button } from '@/app/components/playbook';
import { Menu } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function AppBarPreview() {
  return (
    <PreviewSection title="AppBar" description="The App Bar displays information and actions relating to the current screen.">
      <ExampleBlock title="Basic">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'var(--font-family-base)' }}>
              App Title
            </Typography>
            <Button color="inherit" sx={{ fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>Login</Button>
          </Toolbar>
        </AppBar>
      </ExampleBlock>
    </PreviewSection>
  );
}
