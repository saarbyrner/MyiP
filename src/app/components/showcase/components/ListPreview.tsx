import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@/app/components/playbook';
import { Inbox, Drafts, Send } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function ListPreview() {
  return (
    <PreviewSection title="List" description="Lists are continuous, vertical indexes of text or images.">
      <ExampleBlock title="Basic List">
        <List>
          <ListItem>
            <ListItemText primary="Item 1" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItem>
        </List>
      </ExampleBlock>
      <ExampleBlock title="With Icons">
        <List>
          <ListItemButton>
            <ListItemIcon><Inbox /></ListItemIcon>
            <ListItemText primary="Inbox" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Drafts /></ListItemIcon>
            <ListItemText primary="Drafts" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Send /></ListItemIcon>
            <ListItemText primary="Sent" primaryTypographyProps={{ sx: { fontFamily: 'var(--font-family-base)' } }} />
          </ListItemButton>
        </List>
      </ExampleBlock>
    </PreviewSection>
  );
}
