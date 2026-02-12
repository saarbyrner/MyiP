import { Switch, FormControlLabel, FormGroup } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function SwitchPreview() {
  return (
    <PreviewSection
      title="Switch"
      description="Switches toggle the state of a single setting on or off."
    >
      <ExampleBlock title="Basic">
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Checked" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <FormControlLabel control={<Switch />} label="Unchecked" sx={{ fontFamily: 'var(--font-family-base)' }} />
          <FormControlLabel control={<Switch disabled />} label="Disabled" sx={{ fontFamily: 'var(--font-family-base)' }} />
        </FormGroup>
      </ExampleBlock>
    </PreviewSection>
  );
}
