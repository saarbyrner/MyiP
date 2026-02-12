import { useState } from 'react';
import {
  Stack,
  Button,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@/app/components/playbook';
import {
  MoreVert,
  Send,
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
  Delete,
} from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function MenuPreview() {
  const [basicAnchor, setBasicAnchor] = useState<null | HTMLElement>(null);
  const [iconAnchor, setIconAnchor] = useState<null | HTMLElement>(null);
  const [denseAnchor, setDenseAnchor] = useState<null | HTMLElement>(null);

  const basicOpen = Boolean(basicAnchor);
  const iconOpen = Boolean(iconAnchor);
  const denseOpen = Boolean(denseAnchor);

  return (
    <PreviewSection
      title="Menu"
      description="Menus display a list of choices on temporary surfaces. They appear when users interact with a button, action, or other control."
    >
      <ExampleBlock title="Basic Menu">
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={(e) => setBasicAnchor(e.currentTarget)}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Open Menu
          </Button>
          <Menu
            anchorEl={basicAnchor}
            open={basicOpen}
            onClose={() => setBasicAnchor(null)}
          >
            <MenuItem
              onClick={() => setBasicAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => setBasicAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={() => setBasicAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Icon Menu">
        <Stack spacing={2}>
          <IconButton
            onClick={(e) => setIconAnchor(e.currentTarget)}
            sx={{ alignSelf: 'flex-start' }}
          >
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={iconAnchor}
            open={iconOpen}
            onClose={() => setIconAnchor(null)}
          >
            <MenuItem
              onClick={() => setIconAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <Send fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Send
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => setIconAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Cut
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => setIconAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Copy
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => setIconAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Paste
              </ListItemText>
            </MenuItem>
          </Menu>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Menu with Dividers">
        <Stack spacing={2}>
          <Button
            variant="outlined"
            onClick={(e) => setDenseAnchor(e.currentTarget)}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Open Menu
          </Button>
          <Menu
            anchorEl={denseAnchor}
            open={denseOpen}
            onClose={() => setDenseAnchor(null)}
          >
            <MenuItem
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <Send fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Send
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Upload
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              <ListItemIcon>
                <Delete fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { fontFamily: 'var(--font-family-base)' },
                }}
              >
                Delete
              </ListItemText>
            </MenuItem>
          </Menu>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Dense Menu">
        <Stack spacing={2}>
          <Button
            variant="text"
            onClick={(e) => setDenseAnchor(e.currentTarget)}
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Dense Menu
          </Button>
          <Menu
            anchorEl={denseAnchor}
            open={denseOpen}
            onClose={() => setDenseAnchor(null)}
          >
            <MenuItem
              dense
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              Single Line Item
            </MenuItem>
            <MenuItem
              dense
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              Another Item
            </MenuItem>
            <MenuItem
              dense
              onClick={() => setDenseAnchor(null)}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              Third Item
            </MenuItem>
          </Menu>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
