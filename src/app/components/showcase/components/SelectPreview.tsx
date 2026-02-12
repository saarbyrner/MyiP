import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Stack } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function SelectPreview() {
  const [age, setAge] = useState('');

  return (
    <PreviewSection
      title="Select"
      description="Select components are used for collecting user provided information from a list of options."
    >
      <ExampleBlock title="Basic">
        <FormControl fullWidth>
          <InputLabel sx={{ fontFamily: 'var(--font-family-base)' }}>Age</InputLabel>
          <Select
            value={age}
            label="Age"
            onChange={(e) => setAge(e.target.value)}
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            <MenuItem value={10} sx={{ fontFamily: 'var(--font-family-base)' }}>
              Ten
            </MenuItem>
            <MenuItem value={20} sx={{ fontFamily: 'var(--font-family-base)' }}>
              Twenty
            </MenuItem>
            <MenuItem value={30} sx={{ fontFamily: 'var(--font-family-base)' }}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </ExampleBlock>

      <ExampleBlock title="Multiple Selection">
        <FormControl fullWidth>
          <InputLabel sx={{ fontFamily: 'var(--font-family-base)' }}>Names</InputLabel>
          <Select
            multiple
            value={[]}
            label="Names"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            <MenuItem value="oliver" sx={{ fontFamily: 'var(--font-family-base)' }}>
              Oliver
            </MenuItem>
            <MenuItem value="emily" sx={{ fontFamily: 'var(--font-family-base)' }}>
              Emily
            </MenuItem>
            <MenuItem value="james" sx={{ fontFamily: 'var(--font-family-base)' }}>
              James
            </MenuItem>
          </Select>
        </FormControl>
      </ExampleBlock>
    </PreviewSection>
  );
}
