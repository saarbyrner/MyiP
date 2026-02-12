import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { rootTheme } from '@saarbyrne/playbook/themes';

interface PlaybookThemeProviderProps {
  children: React.ReactNode;
  [key: string]: any;
}

/**
 * PlaybookThemeProvider wraps the application with the @saarbyrne/playbook theme
 * This ensures all MUI components use the design system's theme configuration
 * 
 * Note: This component explicitly captures and ignores all props except children
 * to prevent Figma's data-fg-* attributes from being passed to MUI's ThemeProvider
 */
export function PlaybookThemeProvider(props: PlaybookThemeProviderProps) {
  const { children } = props;
  // Use React.createElement to explicitly control props passed to ThemeProvider
  return React.createElement(ThemeProvider, { theme: rootTheme }, children);
}
