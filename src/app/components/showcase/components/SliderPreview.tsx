import { Slider, Stack, Typography } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function SliderPreview() {
  return (
    <PreviewSection
      title="Slider"
      description="Sliders allow users to make selections from a range of values."
    >
      <ExampleBlock title="Continuous">
        <Slider defaultValue={30} sx={{ fontFamily: 'var(--font-family-base)' }} />
      </ExampleBlock>
      <ExampleBlock title="Discrete">
        <Slider defaultValue={30} step={10} marks min={0} max={100} sx={{ fontFamily: 'var(--font-family-base)' }} />
      </ExampleBlock>
      <ExampleBlock title="Range">
        <Slider defaultValue={[20, 37]} sx={{ fontFamily: 'var(--font-family-base)' }} />
      </ExampleBlock>
    </PreviewSection>
  );
}
