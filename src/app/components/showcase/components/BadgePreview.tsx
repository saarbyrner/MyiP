import { Badge, Stack, IconButton } from '@/app/components/playbook';
import { Mail, Notifications } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function BadgePreview() {
  return (
    <PreviewSection title="Badge" description="Badge generates a small badge to the top-right of its child(ren).">
      <ExampleBlock title="Basic">
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4} color="primary"><Mail /></Badge>
          <Badge badgeContent={10} color="secondary"><Mail /></Badge>
          <Badge badgeContent={100} color="error"><Notifications /></Badge>
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Dot Variant">
        <Stack direction="row" spacing={4}>
          <Badge variant="dot" color="primary"><Mail /></Badge>
          <Badge variant="dot" color="error"><Notifications /></Badge>
        </Stack>
      </ExampleBlock>
    </PreviewSection>
  );
}
