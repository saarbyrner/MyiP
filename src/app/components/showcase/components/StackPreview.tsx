import {
  Stack,
  Typography,
  Box,
  Paper,
  Divider,
  Button,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function StackPreview() {
  return (
    <PreviewSection
      title="Stack"
      description="Stack is a layout component that arranges immediate children along the vertical or horizontal axis with optional spacing between each child. It's simpler than flexbox for common use cases."
    >
      <ExampleBlock title="Vertical Stack (Default)">
        <Stack spacing={2}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--primary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              First Item
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--secondary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Second Item
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--success-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Third Item
            </Typography>
          </Paper>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Horizontal Stack">
        <Stack direction="row" spacing={2}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--primary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              First
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--secondary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Second
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--success-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Third
            </Typography>
          </Paper>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Spacing Variants">
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
                mb: 1,
                display: 'block',
              }}
            >
              spacing={'{1}'}
            </Typography>
            <Stack direction="row" spacing={1}>
              {[1, 2, 3].map((num) => (
                <Paper
                  key={num}
                  sx={{
                    p: 1,
                    backgroundColor: 'var(--warning-light)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-base)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {num}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
                mb: 1,
                display: 'block',
              }}
            >
              spacing={'{3}'}
            </Typography>
            <Stack direction="row" spacing={3}>
              {[1, 2, 3].map((num) => (
                <Paper
                  key={num}
                  sx={{
                    p: 1,
                    backgroundColor: 'var(--info-blue)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-base)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {num}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
                mb: 1,
                display: 'block',
              }}
            >
              spacing={'{5}'}
            </Typography>
            <Stack direction="row" spacing={5}>
              {[1, 2, 3].map((num) => (
                <Paper
                  key={num}
                  sx={{
                    p: 1,
                    backgroundColor: 'var(--error-light)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-base)',
                      color: 'var(--text-on-dark)',
                    }}
                  >
                    {num}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="With Dividers">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Section 1
          </Typography>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Section 2
          </Typography>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Section 3
          </Typography>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Responsive Direction">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          <Paper
            sx={{
              p: 2,
              flex: 1,
              backgroundColor: 'var(--primary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Vertical on mobile, horizontal on desktop
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              flex: 1,
              backgroundColor: 'var(--secondary-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Responsive layout
            </Typography>
          </Paper>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Button Group">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            sx={{
              fontFamily: 'var(--font-family-base)',
              textTransform: 'none',
            }}
          >
            Reset
          </Button>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Form Layout">
        <Stack spacing={2}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              border: '1px solid var(--border-default)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Input Field 1
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              border: '1px solid var(--border-default)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Input Field 2
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'var(--background-paper)',
              border: '1px solid var(--border-default)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-primary)',
              }}
            >
              Input Field 3
            </Typography>
          </Paper>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'var(--font-family-base)',
                textTransform: 'none',
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Alignment">
        <Stack spacing={2}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
                mb: 1,
                display: 'block',
              }}
            >
              alignItems="flex-start"
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                p: 2,
                backgroundColor: 'var(--background-paper)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Box sx={{ p: 1, backgroundColor: 'var(--primary-light)', height: 40 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Small</Typography>
              </Box>
              <Box sx={{ p: 1, backgroundColor: 'var(--primary-light)', height: 80 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Large</Typography>
              </Box>
              <Box sx={{ p: 1, backgroundColor: 'var(--primary-light)', height: 60 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Medium</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
                mb: 1,
                display: 'block',
              }}
            >
              alignItems="center"
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                p: 2,
                backgroundColor: 'var(--background-paper)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Box sx={{ p: 1, backgroundColor: 'var(--secondary-light)', height: 40 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Small</Typography>
              </Box>
              <Box sx={{ p: 1, backgroundColor: 'var(--secondary-light)', height: 80 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Large</Typography>
              </Box>
              <Box sx={{ p: 1, backgroundColor: 'var(--secondary-light)', height: 60 }}>
                <Typography sx={{ fontFamily: 'var(--font-family-base)' }}>Medium</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
