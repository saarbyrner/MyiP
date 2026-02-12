import { useState } from 'react';
import {
  Stack,
  Tabs,
  Tab,
  Box,
  Typography,
} from '@/app/components/playbook';
import { Phone, Favorite, PersonPin } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export function TabsPreview() {
  const [basicValue, setBasicValue] = useState(0);
  const [iconValue, setIconValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <PreviewSection
      title="Tabs"
      description="Tabs organize content across different screens, data sets, and other interactions. They allow users to navigate between related groups of content."
    >
      <ExampleBlock title="Basic Tabs">
        <Box>
          <Tabs
            value={basicValue}
            onChange={(_, newValue) => setBasicValue(newValue)}
            sx={{
              borderBottom: '1px solid var(--border-default)',
              '& .MuiTab-root': {
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Details" />
            <Tab label="Settings" />
          </Tabs>
          <TabPanel value={basicValue} index={0}>
            Overview content. This tab shows general information.
          </TabPanel>
          <TabPanel value={basicValue} index={1}>
            Details content. This tab shows detailed information.
          </TabPanel>
          <TabPanel value={basicValue} index={2}>
            Settings content. This tab shows configuration options.
          </TabPanel>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Tabs with Icons">
        <Box>
          <Tabs
            value={iconValue}
            onChange={(_, newValue) => setIconValue(newValue)}
            sx={{
              borderBottom: '1px solid var(--border-default)',
              '& .MuiTab-root': {
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              },
            }}
          >
            <Tab icon={<Phone />} label="Recents" />
            <Tab icon={<Favorite />} label="Favorites" />
            <Tab icon={<PersonPin />} label="Nearby" />
          </Tabs>
          <TabPanel value={iconValue} index={0}>
            Recent calls and messages appear here.
          </TabPanel>
          <TabPanel value={iconValue} index={1}>
            Your favorite contacts appear here.
          </TabPanel>
          <TabPanel value={iconValue} index={2}>
            Nearby contacts and places appear here.
          </TabPanel>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Icon-Only Tabs">
        <Box>
          <Tabs
            value={iconValue}
            onChange={(_, newValue) => setIconValue(newValue)}
            sx={{
              borderBottom: '1px solid var(--border-default)',
            }}
          >
            <Tab icon={<Phone />} aria-label="phone" />
            <Tab icon={<Favorite />} aria-label="favorite" />
            <Tab icon={<PersonPin />} aria-label="person" />
          </Tabs>
          <TabPanel value={iconValue} index={0}>
            Phone tab content
          </TabPanel>
          <TabPanel value={iconValue} index={1}>
            Favorite tab content
          </TabPanel>
          <TabPanel value={iconValue} index={2}>
            Person tab content
          </TabPanel>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Scrollable Tabs">
        <Box>
          <Tabs
            value={scrollValue}
            onChange={(_, newValue) => setScrollValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: '1px solid var(--border-default)',
              '& .MuiTab-root': {
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              },
            }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
          <TabPanel value={scrollValue} index={scrollValue}>
            Content for tab {scrollValue + 1}
          </TabPanel>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Centered Tabs">
        <Box>
          <Tabs
            value={basicValue}
            onChange={(_, newValue) => setBasicValue(newValue)}
            centered
            sx={{
              borderBottom: '1px solid var(--border-default)',
              '& .MuiTab-root': {
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Details" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Full Width Tabs">
        <Box>
          <Tabs
            value={basicValue}
            onChange={(_, newValue) => setBasicValue(newValue)}
            variant="fullWidth"
            sx={{
              borderBottom: '1px solid var(--border-default)',
              '& .MuiTab-root': {
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Details" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
      </ExampleBlock>
    </PreviewSection>
  );
}
