import { Card, CardHeader, CardContent, CardActions, Button, Typography, Avatar } from '@/app/components/playbook';
import { MoreVert, Favorite, Share } from '@mui/icons-material';
import { IconButton } from '@/app/components/playbook';
import { PreviewSection, ExampleBlock } from '../PreviewSection';

export function CardPreview() {
  return (
    <PreviewSection title="Card" description="Cards contain content and actions about a single subject.">
      <ExampleBlock title="Basic Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: 'var(--error-main)' }}>R</Avatar>}
            action={<IconButton><MoreVert /></IconButton>}
            title={<span style={{ fontFamily: 'var(--font-family-base)' }}>Card Title</span>}
            subheader={<span style={{ fontFamily: 'var(--font-family-base)' }}>September 14, 2024</span>}
          />
          <CardContent>
            <Typography variant="body2" sx={{ fontFamily: 'var(--font-family-base)', color: 'var(--text-secondary)' }}>
              This is the card content. You can add any content here including text, images, and more.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton><Favorite /></IconButton>
            <IconButton><Share /></IconButton>
          </CardActions>
        </Card>
      </ExampleBlock>
    </PreviewSection>
  );
}
