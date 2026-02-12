import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

function createData(name: string, calories: number, fat: number, carbs: number) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
];

export function TablePreview() {
  return (
    <PreviewSection title="Table" description="Tables display sets of data across rows and columns.">
      <ExampleBlock title="Basic Table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>Dessert</TableCell>
                <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>Calories</TableCell>
                <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>Fat&nbsp;(g)</TableCell>
                <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>Carbs&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ fontFamily: 'var(--font-family-base)' }}>{row.name}</TableCell>
                  <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)' }}>{row.calories}</TableCell>
                  <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)' }}>{row.fat}</TableCell>
                  <TableCell align="right" sx={{ fontFamily: 'var(--font-family-base)' }}>{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ExampleBlock>
    </PreviewSection>
  );
}
