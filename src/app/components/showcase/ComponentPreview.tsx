import { Box, Typography } from '@/app/components/playbook';
import { ColorsPreview } from './tokens/ColorsPreview';
import { TypographyPreview } from './tokens/TypographyPreview';
import { SpacingPreview } from './tokens/SpacingPreview';
import { BordersPreview } from './tokens/BordersPreview';
import { ShadowsPreview } from './tokens/ShadowsPreview';

// Component Previews
import { ButtonPreview } from './components/ButtonPreview';
import { IconButtonPreview } from './components/IconButtonPreview';
import { FabPreview } from './components/FabPreview';
import { TextFieldPreview } from './components/TextFieldPreview';
import { AutocompletePreview } from './components/AutocompletePreview';
import { SelectPreview } from './components/SelectPreview';
import { CheckboxPreview } from './components/CheckboxPreview';
import { RadioPreview } from './components/RadioPreview';
import { SwitchPreview } from './components/SwitchPreview';
import { SliderPreview } from './components/SliderPreview';
import { RatingPreview } from './components/RatingPreview';
import { TypographyComponentPreview } from './components/TypographyComponentPreview';
import { AvatarPreview } from './components/AvatarPreview';
import { BadgePreview } from './components/BadgePreview';
import { ChipPreview } from './components/ChipPreview';
import { DividerPreview } from './components/DividerPreview';
import { ListPreview } from './components/ListPreview';
import { TablePreview } from './components/TablePreview';
import { TooltipPreview } from './components/TooltipPreview';
import { AlertPreview } from './components/AlertPreview';
import { SnackbarPreview } from './components/SnackbarPreview';
import { DialogPreview } from './components/DialogPreview';
import { ProgressPreview } from './components/ProgressPreview';
import { SkeletonPreview } from './components/SkeletonPreview';
import { BackdropPreview } from './components/BackdropPreview';
import { PaperPreview } from './components/PaperPreview';
import { CardPreview } from './components/CardPreview';
import { AccordionPreview } from './components/AccordionPreview';
import { AppBarPreview } from './components/AppBarPreview';
import { DrawerPreview } from './components/DrawerPreview';
import { TabsPreview } from './components/TabsPreview';
import { BreadcrumbsPreview } from './components/BreadcrumbsPreview';
import { MenuPreview } from './components/MenuPreview';
import { LinkPreview } from './components/LinkPreview';
import { PaginationPreview } from './components/PaginationPreview';
import { StepperPreview } from './components/StepperPreview';
import { BoxPreview } from './components/BoxPreview';
import { ContainerPreview } from './components/ContainerPreview';
import { GridPreview } from './components/GridPreview';
import { StackPreview } from './components/StackPreview';

interface ComponentPreviewProps {
  selectedItem: string;
}

export function ComponentPreview({ selectedItem }: ComponentPreviewProps) {
  const renderPreview = () => {
    switch (selectedItem) {
      // Design Tokens
      case 'colors':
        return <ColorsPreview />;
      case 'typography':
        return <TypographyPreview />;
      case 'spacing':
        return <SpacingPreview />;
      case 'borders':
        return <BordersPreview />;
      case 'shadows':
        return <ShadowsPreview />;

      // Input Components
      case 'button':
        return <ButtonPreview />;
      case 'icon-button':
        return <IconButtonPreview />;
      case 'fab':
        return <FabPreview />;
      case 'text-field':
        return <TextFieldPreview />;
      case 'autocomplete':
        return <AutocompletePreview />;
      case 'select':
        return <SelectPreview />;
      case 'checkbox':
        return <CheckboxPreview />;
      case 'radio':
        return <RadioPreview />;
      case 'switch':
        return <SwitchPreview />;
      case 'slider':
        return <SliderPreview />;
      case 'rating':
        return <RatingPreview />;

      // Data Display
      case 'typography-component':
        return <TypographyComponentPreview />;
      case 'avatar':
        return <AvatarPreview />;
      case 'badge':
        return <BadgePreview />;
      case 'chip':
        return <ChipPreview />;
      case 'divider':
        return <DividerPreview />;
      case 'list':
        return <ListPreview />;
      case 'table':
        return <TablePreview />;
      case 'tooltip':
        return <TooltipPreview />;

      // Feedback
      case 'alert':
        return <AlertPreview />;
      case 'snackbar':
        return <SnackbarPreview />;
      case 'dialog':
        return <DialogPreview />;
      case 'progress':
        return <ProgressPreview />;
      case 'skeleton':
        return <SkeletonPreview />;
      case 'backdrop':
        return <BackdropPreview />;

      // Surfaces
      case 'paper':
        return <PaperPreview />;
      case 'card':
        return <CardPreview />;
      case 'accordion':
        return <AccordionPreview />;
      case 'app-bar':
        return <AppBarPreview />;

      // Navigation
      case 'drawer':
        return <DrawerPreview />;
      case 'tabs':
        return <TabsPreview />;
      case 'breadcrumbs':
        return <BreadcrumbsPreview />;
      case 'menu':
        return <MenuPreview />;
      case 'link':
        return <LinkPreview />;
      case 'pagination':
        return <PaginationPreview />;
      case 'stepper':
        return <StepperPreview />;

      // Layout
      case 'box':
        return <BoxPreview />;
      case 'container':
        return <ContainerPreview />;
      case 'grid':
        return <GridPreview />;
      case 'stack':
        return <StackPreview />;

      default:
        return (
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-family-base)',
                color: 'var(--text-secondary)',
              }}
            >
              Select a component or token to preview
            </Typography>
          </Box>
        );
    }
  };

  return <Box>{renderPreview()}</Box>;
}
