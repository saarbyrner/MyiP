import {
  Box,
  Typography,
  Stack,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function BoxPreview() {
  return (
    <PreviewSection
      title="Box"
      description="Box is a wrapper component for most CSS utility needs. It serves as a flexible container with built-in support for spacing, flexbox, grid, and other layout utilities."
    >
      <ExampleBlock title="Basic Box with Padding">
        <Box
          sx={{
            p: 3,
            backgroundColor: 'var(--primary-light)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            This is a Box with padding and background color
          </Typography>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Flexbox Layout">
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            p: 2,
            backgroundColor: 'var(--background-paper)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 2,
              backgroundColor: 'var(--primary-main)',
              color: 'var(--text-on-dark)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
              }}
            >
              Flex Item 1
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 2,
              backgroundColor: 'var(--secondary-main)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Flex Item 2
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
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
              Flex Item 3
            </Typography>
          </Box>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Grid Layout">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            p: 2,
            backgroundColor: 'var(--background-paper)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box
              key={num}
              sx={{
                p: 2,
                backgroundColor: 'var(--info-light)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Grid {num}
              </Typography>
            </Box>
          ))}
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Spacing Utilities">
        <Stack spacing={2}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'var(--warning-light)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Padding: p={'{2}'} (8px all sides)
            </Typography>
          </Box>
          <Box
            sx={{
              px: 4,
              py: 1,
              backgroundColor: 'var(--error-light)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-on-dark)',
              }}
            >
              Padding: px={'{4}'} py={'{1}'} (horizontal 16px, vertical 4px)
            </Typography>
          </Box>
          <Box
            sx={{
              m: 2,
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
              Margin: m={'{2}'} (8px all sides)
            </Typography>
          </Box>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Border and Border Radius">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Box
            sx={{
              p: 2,
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-none)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              No Radius
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Medium
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Extra Large
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Full (Pill)
            </Typography>
          </Box>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Shadow Utilities">
        <Stack spacing={3}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              boxShadow: 'var(--shadow-sm)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Small Shadow
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Medium Shadow
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Large Shadow
            </Typography>
          </Box>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Responsive Display">
        <Box
          sx={{
            p: 2,
            backgroundColor: 'var(--info-blue)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Box component supports all responsive display properties using the sx prop
          </Typography>
        </Box>
      </ExampleBlock>
    </PreviewSection>
  );
}
