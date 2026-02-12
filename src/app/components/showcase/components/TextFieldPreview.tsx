import { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@/app/components/playbook';
import { Email, Lock, Visibility, Search } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function TextFieldPreview() {
  const [value, setValue] = useState('');

  return (
    <PreviewSection
      title="TextField"
      description="Text fields allow users to enter and edit text."
    >
      <ExampleBlock title="Variants">
        <Stack spacing={3}>
          <TextField
            label="Outlined"
            variant="outlined"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Filled"
            variant="filled"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Standard"
            variant="standard"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Types">
        <Stack spacing={3}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Number"
            type="number"
            variant="outlined"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Multiline"
            multiline
            rows={4}
            variant="outlined"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="With Icons">
        <Stack spacing={3}>
          <TextField
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Password"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="States">
        <Stack spacing={3}>
          <TextField
            label="Required"
            required
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Disabled"
            disabled
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="Error"
            error
            helperText="This field is required"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <TextField
            label="With Helper Text"
            helperText="Some important text"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
