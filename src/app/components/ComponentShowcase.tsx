import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Stack,
  Collapse,
  ListItemIcon,
} from '@/app/components/playbook';
import {
  ExpandLess,
  ExpandMore,
  Palette,
  FormatSize,
  Category,
  Input as InputIcon,
  ViewList,
  Feedback,
  Layers,
  Navigation,
  GridOn,
} from '@mui/icons-material';
import { ComponentPreview } from './showcase/ComponentPreview';

const DRAWER_WIDTH = 280;

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    id: 'tokens',
    label: 'Design Tokens',
    icon: <Palette />,
    children: [
      { id: 'colors', label: 'Colors' },
      { id: 'typography', label: 'Typography' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'borders', label: 'Borders & Radius' },
      { id: 'shadows', label: 'Shadows' },
    ],
  },
  {
    id: 'inputs',
    label: 'Input Components',
    icon: <InputIcon />,
    children: [
      { id: 'button', label: 'Button' },
      { id: 'icon-button', label: 'IconButton' },
      { id: 'fab', label: 'Floating Action Button' },
      { id: 'text-field', label: 'TextField' },
      { id: 'autocomplete', label: 'Autocomplete' },
      { id: 'select', label: 'Select' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'radio', label: 'Radio' },
      { id: 'switch', label: 'Switch' },
      { id: 'slider', label: 'Slider' },
      { id: 'rating', label: 'Rating' },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    icon: <ViewList />,
    children: [
      { id: 'typography-component', label: 'Typography' },
      { id: 'avatar', label: 'Avatar' },
      { id: 'badge', label: 'Badge' },
      { id: 'chip', label: 'Chip' },
      { id: 'divider', label: 'Divider' },
      { id: 'list', label: 'List' },
      { id: 'table', label: 'Table' },
      { id: 'tooltip', label: 'Tooltip' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: <Feedback />,
    children: [
      { id: 'alert', label: 'Alert' },
      { id: 'snackbar', label: 'Snackbar' },
      { id: 'dialog', label: 'Dialog' },
      { id: 'progress', label: 'Progress' },
      { id: 'skeleton', label: 'Skeleton' },
      { id: 'backdrop', label: 'Backdrop' },
    ],
  },
  {
    id: 'surfaces',
    label: 'Surfaces',
    icon: <Layers />,
    children: [
      { id: 'paper', label: 'Paper' },
      { id: 'card', label: 'Card' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'app-bar', label: 'AppBar' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: <Navigation />,
    children: [
      { id: 'drawer', label: 'Drawer' },
      { id: 'tabs', label: 'Tabs' },
      { id: 'breadcrumbs', label: 'Breadcrumbs' },
      { id: 'menu', label: 'Menu' },
      { id: 'link', label: 'Link' },
      { id: 'pagination', label: 'Pagination' },
      { id: 'stepper', label: 'Stepper' },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    icon: <GridOn />,
    children: [
      { id: 'box', label: 'Box' },
      { id: 'container', label: 'Container' },
      { id: 'grid', label: 'Grid' },
      { id: 'stack', label: 'Stack' },
    ],
  },
];

export function ComponentShowcase() {
  const [selectedItem, setSelectedItem] = useState<string>('colors');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    tokens: true,
    inputs: false,
    'data-display': false,
    feedback: false,
    surfaces: false,
    navigation: false,
    layout: false,
  });

  const handleToggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleSelectItem = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = openSections[item.id];

      return (
        <Box key={item.id}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                if (hasChildren) {
                  handleToggleSection(item.id);
                } else {
                  handleSelectItem(item.id);
                }
              }}
              selected={!hasChildren && selectedItem === item.id}
              sx={{
                pl: level === 0 ? 2 : 4,
                fontFamily: 'var(--font-family-base)',
              }}
            >
              {item.icon && <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>}
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: 'var(--font-family-base)',
                    fontSize: level === 0 ? 'var(--font-size-body1)' : 'var(--font-size-body2)',
                    fontWeight: level === 0 ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                  },
                }}
              />
              {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderNavItems(item.children!, level + 1)}
              </List>
            </Collapse>
          )}
        </Box>
      );
    });
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-family-base)' }}>
      {/* Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: 'var(--background-paper)',
            borderRight: '1px solid var(--border-default)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
            }}
          >
            Component Library
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            @saarbyrne/playbook
          </Typography>
        </Box>
        <Divider />
        <List sx={{ pt: 1, overflow: 'auto' }}>{renderNavItems(navigationItems)}</List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'var(--background)',
          p: 4,
          overflow: 'auto',
        }}
      >
        <ComponentPreview selectedItem={selectedItem} />
      </Box>
    </Box>
  );
}
