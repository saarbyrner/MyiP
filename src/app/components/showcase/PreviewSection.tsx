import { Box, Typography, Paper } from '@/app/components/playbook';

interface PreviewSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PreviewSection({ title, description, children }: PreviewSectionProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'var(--font-family-base)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--text-primary)',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
      {children}
    </Box>
  );
}

interface ExampleBlockProps {
  title?: string;
  children: React.ReactNode;
  code?: string;
}

export function ExampleBlock({ title, children, code }: ExampleBlockProps) {
  return (
    <Box sx={{ mb: 4 }}>
      {title && (
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'var(--font-family-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--text-primary)',
            mb: 2,
          }}
        >
          {title}
        </Typography>
      )}
      <Paper
        sx={{
          p: 3,
          backgroundColor: 'var(--background-paper)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        {children}
      </Paper>
      {code && (
        <Box
          component="pre"
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: 'var(--grey-50)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: 'var(--font-size-caption)',
          }}
        >
          <code>{code}</code>
        </Box>
      )}
    </Box>
  );
}
