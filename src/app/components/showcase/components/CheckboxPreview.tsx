import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Stack } from '@/app/components/playbook';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function CheckboxPreview() {
  const [checked, setChecked] = useState(true);

  return (
    <PreviewSection
      title="Checkbox"
      description="Checkboxes allow the user to select one or more items from a set."
    >
      <ExampleBlock title="Basic">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Checked"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Unchecked"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <FormControlLabel
            control={<Checkbox disabled />}
            label="Disabled"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
          <FormControlLabel
            control={<Checkbox disabled checked />}
            label="Disabled Checked"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          />
        </FormGroup>
      </ExampleBlock>

      <ExampleBlock title="Colors">
        <Stack direction="row" spacing={2}>
          <Checkbox defaultChecked color="primary" />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" />
          <Checkbox defaultChecked color="error" />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Custom Icon">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          defaultChecked
          color="error"
        />
      </ExampleBlock>
    </PreviewSection>
  );
}
