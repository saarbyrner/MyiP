import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@/app/components/playbook';
import { ExpandMore } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function AccordionPreview() {
  return (
    <PreviewSection title="Accordion" description="Accordions contain creation flows and allow lightweight editing of an element.">
      <ExampleBlock title="Basic">
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </ExampleBlock>
    </PreviewSection>
  );
}
