import { useState } from 'react';
import {
  Stack,
  Pagination,
  Typography,
} from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function PaginationPreview() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);

  return (
    <PreviewSection
      title="Pagination"
      description="Pagination allows users to navigate through pages of content. It's commonly used for tables, search results, and other large data sets."
    >
      <ExampleBlock title="Basic Pagination">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            page={page1}
            onChange={(_, value) => setPage1(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'var(--font-family-base)',
              color: 'var(--text-secondary)',
            }}
          >
            Current page: {page1}
          </Typography>
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Outlined Variant">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            variant="outlined"
            page={page2}
            onChange={(_, value) => setPage2(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Rounded Shape">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            shape="rounded"
            page={page3}
            onChange={(_, value) => setPage3(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Sizes">
        <Stack spacing={3} alignItems="flex-start">
          <Pagination
            count={5}
            size="small"
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Pagination
            count={5}
            size="medium"
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Pagination
            count={5}
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Colors">
        <Stack spacing={3} alignItems="flex-start">
          <Pagination
            count={5}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Pagination
            count={5}
            color="secondary"
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Show First and Last">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Hide Previous and Next">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            hidePrevButton
            hideNextButton
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Controlled with Sibling Count">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={20}
            siblingCount={0}
            boundaryCount={1}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Pagination
            count={20}
            siblingCount={1}
            boundaryCount={1}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
          <Pagination
            count={20}
            siblingCount={2}
            boundaryCount={2}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>

      <ExampleBlock title="Disabled">
        <Stack spacing={2} alignItems="flex-start">
          <Pagination
            count={10}
            disabled
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'var(--font-family-base)',
              },
            }}
          />
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
