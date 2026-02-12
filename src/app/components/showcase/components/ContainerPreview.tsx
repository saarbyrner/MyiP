import {
  Container,
  Typography,
  Box,
  Stack,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function ContainerPreview() {
  return (
    <PreviewSection
      title="Container"
      description="The Container component centers your content horizontally and applies a maximum width. It's the most basic layout element."
    >
      <ExampleBlock title="Fluid Container">
        <Container
          maxWidth={false}
          sx={{
            backgroundColor: 'var(--background-paper)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            py: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Fluid container - Takes full width with no max-width constraint
          </Typography>
        </Container>
      </ExampleBlock>

      <ExampleBlock title="Fixed Max Widths">
        <Stack spacing={2}>
          <Container
            maxWidth="xs"
            sx={{
              backgroundColor: 'var(--primary-light)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              maxWidth="xs" (444px)
            </Typography>
          </Container>
          
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: 'var(--secondary-light)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              maxWidth="sm" (600px)
            </Typography>
          </Container>

          <Container
            maxWidth="md"
            sx={{
              backgroundColor: 'var(--success-light)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              maxWidth="md" (900px)
            </Typography>
          </Container>

          <Container
            maxWidth="lg"
            sx={{
              backgroundColor: 'var(--warning-light)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              maxWidth="lg" (1200px)
            </Typography>
          </Container>

          <Container
            maxWidth="xl"
            sx={{
              backgroundColor: 'var(--info-blue)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              py: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              maxWidth="xl" (1536px)
            </Typography>
          </Container>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Fixed Container">
        <Container
          fixed
          sx={{
            backgroundColor: 'var(--error-light)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            py: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-on-dark)',
            }}
          >
            Fixed container - Adapts to different screen breakpoints with consistent behavior
          </Typography>
        </Container>
      </ExampleBlock>

      <ExampleBlock title="Container with Custom Styling">
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: 'var(--background-paper)',
            border: '2px solid var(--primary-main)',
            borderRadius: 'var(--radius-xl)',
            py: 4,
            px: 3,
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              mb: 2,
            }}
          >
            Custom Styled Container
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            Container can be customized with padding, borders, shadows, and other CSS properties using the sx prop.
          </Typography>
        </Container>
      </ExampleBlock>

      <ExampleBlock title="Nested Content">
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: 'var(--background-paper)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            py: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              mb: 2,
            }}
          >
            Container with Complex Content
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box
              sx={{
                flex: '1 1 200px',
                p: 2,
                backgroundColor: 'var(--primary-light)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Content Block 1
              </Typography>
            </Box>
            <Box
              sx={{
                flex: '1 1 200px',
                p: 2,
                backgroundColor: 'var(--secondary-light)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Content Block 2
              </Typography>
            </Box>
            <Box
              sx={{
                flex: '1 1 200px',
                p: 2,
                backgroundColor: 'var(--success-light)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Content Block 3
              </Typography>
            </Box>
          </Box>
        </Container>
      </ExampleBlock>
    </PreviewSection>
  );
}
