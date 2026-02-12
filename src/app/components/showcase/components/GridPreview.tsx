import {
  Grid,
  Typography,
  Box,
  Paper,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function GridPreview() {
  return (
    <PreviewSection
      title="Grid"
      description="Grid is a responsive layout component that uses CSS Grid under the hood. It allows you to create complex layouts that adapt to different screen sizes."
    >
      <ExampleBlock title="Basic Grid">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--primary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=12
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--secondary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=6
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--secondary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=6
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--success-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=4
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--success-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=4
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--success-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=4
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ExampleBlock>

      <ExampleBlock title="Responsive Grid">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--primary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Responsive
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--primary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Responsive
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--primary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Responsive
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--primary-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                Responsive
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ExampleBlock>

      <ExampleBlock title="Spacing Variants">
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
              mb: 1,
              display: 'block',
            }}
          >
            spacing={'{2}'}
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((num) => (
              <Grid key={num} size={{ xs: 4 }}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: 'var(--warning-light)',
                    textAlign: 'center',
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
              </Grid>
            ))}
          </Grid>
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
            spacing={'{4}'}
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((num) => (
              <Grid key={num} size={{ xs: 4 }}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: 'var(--info-blue)',
                    textAlign: 'center',
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="Nested Grid">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
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
                  mb: 2,
                }}
              >
                Main Content (xs=12 md=8)
              </Typography>
              <Grid container spacing={1}>
                <Grid size={{ xs: 6 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: 'var(--secondary-light)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-family-base)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      Nested
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Paper
                    sx={{
                      p: 1,
                      backgroundColor: 'var(--secondary-light)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-family-base)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      Nested
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
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
                Sidebar (xs=12 md=4)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ExampleBlock>

      <ExampleBlock title="Auto Layout">
        <Grid container spacing={2}>
          <Grid size="grow">
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--error-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-on-dark)',
                }}
              >
                Auto
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--warning-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-primary)',
                }}
              >
                xs=6
              </Typography>
            </Paper>
          </Grid>
          <Grid size="grow">
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'var(--error-light)',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--text-on-dark)',
                }}
              >
                Auto
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ExampleBlock>

      <ExampleBlock title="Column and Row Spacing">
        <Grid container rowSpacing={2} columnSpacing={1}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Grid key={num} size={{ xs: 4 }}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: 'var(--success-light)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-base)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Item {num}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </ExampleBlock>
    </PreviewSection>
  );
}
