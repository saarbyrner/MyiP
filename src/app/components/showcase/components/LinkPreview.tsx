import {
  Stack,
  Link,
  Typography,
  Box,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function LinkPreview() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log('Link clicked');
  };

  return (
    <PreviewSection
      title="Link"
      description="Links allow users to navigate to different pages or sections. They can be styled in different ways and support various underline behaviors."
    >
      <ExampleBlock title="Basic Links">
        <Stack spacing={2}>
          <Link
            href="#"
            onClick={handleClick}
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Default Link
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            color="secondary"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Secondary Link
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            color="error"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Error Link
          </Link>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Underline Behavior">
        <Stack spacing={2}>
          <Link
            href="#"
            onClick={handleClick}
            underline="none"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            No Underline
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            underline="hover"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Underline on Hover
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            underline="always"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Always Underlined
          </Link>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Inline Links">
        <Box>
          <Typography
            variant="body1"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            This is a paragraph with an{' '}
            <Link
              href="#"
              onClick={handleClick}
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              inline link
            </Link>{' '}
            embedded within the text. You can also have{' '}
            <Link
              href="#"
              onClick={handleClick}
              color="secondary"
              sx={{ fontFamily: 'var(--font-family-base)' }}
            >
              multiple links
            </Link>{' '}
            in the same paragraph.
          </Typography>
        </Box>
      </ExampleBlock>

      <ExampleBlock title="External Links">
        <Stack spacing={2}>
          <Link
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            External Link (opens in new tab)
          </Link>
          <Link
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            External Link with Hover Underline
          </Link>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Link Variants">
        <Stack spacing={2}>
          <Link
            href="#"
            onClick={handleClick}
            variant="body1"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Body1 Link
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            variant="body2"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Body2 Link
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            variant="h6"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            H6 Link
          </Link>
          <Link
            href="#"
            onClick={handleClick}
            variant="caption"
            sx={{ fontFamily: 'var(--font-family-base)' }}
          >
            Caption Link
          </Link>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Link as Button">
        <Stack spacing={2}>
          <Link
            component="button"
            variant="body2"
            onClick={(e) => {
              e.preventDefault();
              console.log('Button link clicked');
            }}
            sx={{
              fontFamily: 'var(--font-family-base)',
              cursor: 'pointer',
            }}
          >
            Link styled as button
          </Link>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
