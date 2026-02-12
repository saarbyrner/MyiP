import { useState } from 'react';
import {
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@/app/components/playbook';
import { Inbox, Mail, Home, Settings, Close } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function DrawerPreview() {
  const [temporaryOpen, setTemporaryOpen] = useState(false);
  const [persistentOpen, setPersistentOpen] = useState(false);

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        {['Home', 'Inbox', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <Home /> : index === 1 ? <Inbox /> : <Settings />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <PreviewSection
      title="Drawer"
      description="Drawers provide access to destinations and app functionality, such as switching accounts. They can be either temporarily above other content or persistent."
    >
      <ExampleBlock title="Temporary Drawer">
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={() => setTemporaryOpen(true)}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Open Temporary Drawer
          </Button>
          <Drawer
            anchor="left"
            open={temporaryOpen}
            onClose={() => setTemporaryOpen(false)}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                Menu
              </Typography>
              <Button
                onClick={() => setTemporaryOpen(false)}
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  textTransform: 'none',
                  minWidth: 'auto',
                }}
              >
                <Close />
              </Button>
            </Box>
            <Divider />
            {drawerContent}
          </Drawer>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            Temporary drawers appear above content and can be dismissed by clicking outside
          </Typography>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Persistent Drawer">
        <Stack spacing={2}>
          <Button
            variant="outlined"
            onClick={() => setPersistentOpen(!persistentOpen)}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
              alignSelf: 'flex-start',
            }}
          >
            {persistentOpen ? 'Close' : 'Open'} Persistent Drawer
          </Button>
          <Box sx={{ display: 'flex', position: 'relative', height: 400, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
            <Drawer
              variant="persistent"
              anchor="left"
              open={persistentOpen}
              sx={{
                position: 'absolute',
                '& .MuiDrawer-paper': {
                  position: 'absolute',
                  borderRight: '1px solid var(--border-default)',
                },
              }}
            >
              {drawerContent}
            </Drawer>
            <Box
              sx={{
                flexGrow: 1,
                p: 3,
                ml: persistentOpen ? '250px' : 0,
                transition: 'margin var(--transition-base)',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Main content area. Persistent drawers push the content to the side.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Anchor Positions">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
            <Button
              key={anchor}
              variant="outlined"
              onClick={() => {
                const drawer = document.createElement('div');
                // This is just for demonstration
                setTemporaryOpen(true);
              }}
              sx={{
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              }}
            >
              {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
            </Button>
          ))}
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
