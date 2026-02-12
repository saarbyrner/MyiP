import { Avatar, AvatarGroup, Stack } from '@/app/components/playbook';
import { Person, Folder } from '@mui/icons-material';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function AvatarPreview() {
  return (
    <PreviewSection
      title="Avatar"
      description="Avatars are used to represent users and can contain photos, icons, or even text."
    >
      <ExampleBlock title="Variants">
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: 'var(--success-main)' }}>N</Avatar>
          <Avatar sx={{ bgcolor: 'var(--error-main)' }}>OP</Avatar>
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="With Icons">
        <Stack direction="row" spacing={2}>
          <Avatar><Person /></Avatar>
          <Avatar sx={{ bgcolor: 'var(--warning-main)' }}><Folder /></Avatar>
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
          <Avatar>M</Avatar>
          <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
        </Stack>
      </ExampleBlock>
      <ExampleBlock title="Group">
        <AvatarGroup max={4}>
          <Avatar>H</Avatar>
          <Avatar>N</Avatar>
          <Avatar>OP</Avatar>
          <Avatar>T</Avatar>
          <Avatar>M</Avatar>
        </AvatarGroup>
      </ExampleBlock>
    </PreviewSection>
  );
}
