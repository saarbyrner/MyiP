import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function RadioPreview() {
  return (
    <PreviewSection
      title="Radio"
      description="Radio buttons allow the user to select one option from a set."
    >
      <ExampleBlock title="Basic">
        <FormControl>
          <FormLabel sx={{ fontFamily: 'var(--font-family-base)' }}>Gender</FormLabel>
          <RadioGroup defaultValue="female">
            <FormControlLabel value="female" control={<Radio />} label="Female" sx={{ fontFamily: 'var(--font-family-base)' }} />
            <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ fontFamily: 'var(--font-family-base)' }} />
            <FormControlLabel value="other" control={<Radio />} label="Other" sx={{ fontFamily: 'var(--font-family-base)' }} />
          </RadioGroup>
        </FormControl>
      </ExampleBlock>
    </PreviewSection>
  );
}
