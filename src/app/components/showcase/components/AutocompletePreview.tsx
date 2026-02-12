import { useState } from 'react';
import { Autocomplete, TextField } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Forrest Gump', year: 1994 },
];

export function AutocompletePreview() {
  return (
    <PreviewSection
      title="Autocomplete"
      description="The autocomplete is a normal text input enhanced by a panel of suggested options."
    >
      <ExampleBlock title="Basic">
        <Autocomplete
          options={top100Films}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Movie"
              sx={{ fontFamily: 'var(--font-family-base)' }}
            />
          )}
          sx={{ fontFamily: 'var(--font-family-base)' }}
        />
      </ExampleBlock>

      <ExampleBlock title="Multiple Selection">
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Movies"
              placeholder="Select movies"
              sx={{ fontFamily: 'var(--font-family-base)' }}
            />
          )}
          sx={{ fontFamily: 'var(--font-family-base)' }}
        />
      </ExampleBlock>

      <ExampleBlock title="Free Solo">
        <Autocomplete
          freeSolo
          options={top100Films.map((option) => option.label)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Free solo"
              sx={{ fontFamily: 'var(--font-family-base)' }}
            />
          )}
          sx={{ fontFamily: 'var(--font-family-base)' }}
        />
      </ExampleBlock>
    </PreviewSection>
  );
}
