import {
  Stack,
  Breadcrumbs,
  Link,
  Typography,
} from '@/app/components/playbook';
import { NavigateNext, Home } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function BreadcrumbsPreview() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log('Breadcrumb clicked');
  };

  return (
    <PreviewSection
      title="Breadcrumbs"
      description="Breadcrumbs allow users to understand their current location within a hierarchical structure and navigate back up the hierarchy."
    >
      <ExampleBlock title="Basic Breadcrumbs">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            '& .MuiLink-root': {
              fontFamily: 'var(--font-family-base)',
            },
            '& .MuiTypography-root': {
              fontFamily: 'var(--font-family-base)',
            },
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
            onClick={handleClick}
          >
            Products
          </Link>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Current Page
          </Typography>
        </Breadcrumbs>
      </ExampleBlock>

      <ExampleBlock title="Custom Separator">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            '& .MuiLink-root': {
              fontFamily: 'var(--font-family-base)',
            },
            '& .MuiTypography-root': {
              fontFamily: 'var(--font-family-base)',
            },
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/catalog"
            onClick={handleClick}
          >
            Catalog
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/accessories"
            onClick={handleClick}
          >
            Accessories
          </Link>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            New Collection
          </Typography>
        </Breadcrumbs>
      </ExampleBlock>

      <ExampleBlock title="Icon Separator">
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            '& .MuiLink-root': {
              fontFamily: 'var(--font-family-base)',
            },
            '& .MuiTypography-root': {
              fontFamily: 'var(--font-family-base)',
            },
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/core"
            onClick={handleClick}
          >
            Core
          </Link>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </ExampleBlock>

      <ExampleBlock title="With Icon">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            '& .MuiLink-root': {
              fontFamily: 'var(--font-family-base)',
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiTypography-root': {
              fontFamily: 'var(--font-family-base)',
            },
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={handleClick}
          >
            <Home sx={{ mr: 0.5, fontSize: 20 }} />
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started"
            onClick={handleClick}
          >
            Getting Started
          </Link>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Installation
          </Typography>
        </Breadcrumbs>
      </ExampleBlock>

      <ExampleBlock title="Collapsed Breadcrumbs">
        <Breadcrumbs
          maxItems={3}
          aria-label="breadcrumb"
          sx={{
            '& .MuiLink-root': {
              fontFamily: 'var(--font-family-base)',
            },
            '& .MuiTypography-root': {
              fontFamily: 'var(--font-family-base)',
            },
          }}
        >
          <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/catalog" onClick={handleClick}>
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href="/accessories" onClick={handleClick}>
            Accessories
          </Link>
          <Link underline="hover" color="inherit" href="/new-collection" onClick={handleClick}>
            New Collection
          </Link>
          <Link underline="hover" color="inherit" href="/category" onClick={handleClick}>
            Category
          </Link>
          <Typography
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-primary)',
            }}
          >
            Current Item
          </Typography>
        </Breadcrumbs>
      </ExampleBlock>
    </PreviewSection>
  );
}
