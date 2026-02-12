import { Box, Typography, Grid, Stack } from '@/app/components/playbook';
import { PreviewSection } from '../PreviewSection';

interface ColorSwatchProps {
  name: string;
  value: string;
  variable: string;
}

function ColorSwatch({ name, value, variable }: ColorSwatchProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 80,
          backgroundColor: value,
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)',
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'var(--font-family-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--text-primary)',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontFamily: 'monospace',
          color: 'var(--text-secondary)',
        }}
      >
        {variable}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontFamily: 'monospace',
          color: 'var(--text-secondary)',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export function ColorsPreview() {
  const colorGroups = [
    {
      title: 'Grey Scale',
      colors: [
        { name: 'Grey 50', variable: '--grey-50', value: '#FAFAFA' },
        { name: 'Grey 100', variable: '--grey-100', value: '#5f7089' },
        { name: 'Grey 100-50', variable: '--grey-100-50', value: '#afb7c4' },
        { name: 'Grey 200', variable: '--grey-200', value: '#3b4960' },
        { name: 'Grey 300', variable: '--grey-300', value: '#1f2d44' },
        { name: 'Grey 400', variable: '--grey-400', value: '#0d1b30' },
        { name: 'Grey Disabled', variable: '--grey-disabled', value: '#dedede' },
      ],
    },
    {
      title: 'Neutral',
      colors: [
        { name: 'Neutral 100', variable: '--neutral-100', value: '#f6f6f6' },
        { name: 'Neutral 200', variable: '--neutral-200', value: '#f1f2f3' },
        { name: 'Neutral 400', variable: '--neutral-400', value: '#cfd4db' },
      ],
    },
    {
      title: 'Red (Error)',
      colors: [
        { name: 'Red 100', variable: '--red-100', value: '#c31d2b' },
        { name: 'Red 200', variable: '--red-200', value: '#b11b27' },
        { name: 'Red 300', variable: '--red-300', value: '#931621' },
        { name: 'Red Light', variable: '--red-light', value: '#feedee' },
      ],
    },
    {
      title: 'Orange (Warning)',
      colors: [
        { name: 'Orange 100', variable: '--orange-100', value: '#ea7b5d' },
        { name: 'Orange 200', variable: '--orange-200', value: '#e55e38' },
        { name: 'Orange 300', variable: '--orange-300', value: '#c73f1a' },
        { name: 'Orange 400', variable: '--orange-400', value: '#EF6C00' },
      ],
    },
    {
      title: 'Yellow',
      colors: [
        { name: 'Yellow 100', variable: '--yellow-100', value: '#ffab00' },
        { name: 'Yellow 200', variable: '--yellow-200', value: '#fff7e5' },
      ],
    },
    {
      title: 'Green (Success)',
      colors: [
        { name: 'Green 100', variable: '--green-100', value: '#43b374' },
        { name: 'Green 200', variable: '--green-200', value: '#0a875a' },
        { name: 'Green 300', variable: '--green-300', value: '#0a6644' },
      ],
    },
    {
      title: 'Blue (Info)',
      colors: [
        { name: 'Blue Info', variable: '--blue-info', value: '#E5F6FD' },
        { name: 'Blue Accent', variable: '--blue-accent', value: '#2E96FF' },
        { name: 'Blue 100', variable: '--blue-100', value: '#2a6ebb' },
      ],
    },
    {
      title: 'Semantic Colors',
      colors: [
        { name: 'Primary Main', variable: '--primary-main', value: 'var(--grey-200)' },
        { name: 'Secondary Main', variable: '--secondary-main', value: 'var(--neutral-200)' },
        { name: 'Error Main', variable: '--error-main', value: 'var(--red-200)' },
        { name: 'Warning Main', variable: '--warning-main', value: 'var(--orange-200)' },
        { name: 'Success Main', variable: '--success-main', value: 'var(--green-200)' },
        { name: 'Info Main', variable: '--info-main', value: 'var(--grey-200)' },
      ],
    },
  ];

  return (
    <PreviewSection
      title="Colors"
      description="Color palette from the design system. All colors are defined as CSS variables in /src/styles/global.css"
    >
      <Stack spacing={4}>
        {colorGroups.map((group) => (
          <Box key={group.title}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-family-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
                mb: 2,
              }}
            >
              {group.title}
            </Typography>
            <Grid container spacing={2}>
              {group.colors.map((color) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={color.variable}>
                  <ColorSwatch name={color.name} value={color.value} variable={color.variable} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </PreviewSection>
  );
}
