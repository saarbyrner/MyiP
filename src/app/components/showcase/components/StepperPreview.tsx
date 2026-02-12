import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepContent,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function StepperPreview() {
  const [activeStep, setActiveStep] = useState(0);
  const [verticalStep, setVerticalStep] = useState(0);

  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const verticalSteps = [
    {
      label: 'Select campaign settings',
      description: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions.',
    },
    {
      label: 'Create an ad group',
      description: 'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: 'Try out different ad text to see what brings in the most customers.',
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleVerticalNext = () => {
    setVerticalStep((prev) => prev + 1);
  };

  const handleVerticalBack = () => {
    setVerticalStep((prev) => prev - 1);
  };

  const handleVerticalReset = () => {
    setVerticalStep(0);
  };

  return (
    <PreviewSection
      title="Stepper"
      description="Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation."
    >
      <ExampleBlock title="Horizontal Stepper">
        <Box sx={{ width: '100%' }}>
          <Stepper
            activeStep={activeStep}
            sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  mb: 2,
                }}
              >
                All steps completed - you're finished
              </Typography>
              <Button
                onClick={handleReset}
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  textTransform: 'none',
                }}
              >
                Reset
              </Button>
            </Box>
          ) : (
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  mb: 2,
                }}
              >
                Step {activeStep + 1}: {steps[activeStep]}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    textTransform: 'none',
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    textTransform: 'none',
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Vertical Stepper">
        <Box sx={{ width: '100%' }}>
          <Stepper
            activeStep={verticalStep}
            orientation="vertical"
            sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          >
            {verticalSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-base)',
                      color: 'var(--text-secondary)',
                      mb: 2,
                    }}
                  >
                    {step.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      onClick={handleVerticalNext}
                      sx={{
                        fontFamily: 'var(--font-family-base)',
                        textTransform: 'none',
                      }}
                    >
                      {index === verticalSteps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleVerticalBack}
                      sx={{
                        fontFamily: 'var(--font-family-base)',
                        textTransform: 'none',
                      }}
                    >
                      Back
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {verticalStep === verticalSteps.length && (
            <Box sx={{ mt: 2, p: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  mb: 2,
                }}
              >
                All steps completed - you're finished
              </Typography>
              <Button
                onClick={handleVerticalReset}
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  textTransform: 'none',
                }}
              >
                Reset
              </Button>
            </Box>
          )}
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Alternative Label">
        <Box sx={{ width: '100%' }}>
          <Stepper
            activeStep={1}
            alternativeLabel
            sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Optional Steps">
        <Box sx={{ width: '100%' }}>
          <Stepper
            activeStep={1}
            sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          >
            <Step>
              <StepLabel>Required step</StepLabel>
            </Step>
            <Step>
              <StepLabel optional={
                <Typography
                  variant="caption"
                  sx={{ fontFamily: 'var(--font-family-base)' }}
                >
                  Optional
                </Typography>
              }>
                Optional step
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>Required step</StepLabel>
            </Step>
          </Stepper>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Non-linear Stepper">
        <Box sx={{ width: '100%' }}>
          <Stepper
            nonLinear
            activeStep={1}
            sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={index < 1}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </ExampleBlock>
    </PreviewSection>
  );
}
