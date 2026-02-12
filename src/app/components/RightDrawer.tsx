import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@/app/components/playbook";
import { Close as CloseIcon } from "@mui/icons-material";
import { ReactNode } from "react";

interface RightDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showActionBar?: boolean;
  actionBarContent?: ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
}

/**
 * RightDrawer Component
 * 
 * A right-sided drawer component following the design system specifications.
 * 
 * Specifications:
 * - Width: 460px
 * - Height: 100% of viewport
 * - Background: #FFFFFF (--white)
 * - Border: 1px solid rgba(59, 73, 96, 0.12) (--grey-200-12)
 * 
 * Features:
 * - Optional header with title and close button
 * - Scrollable content area
 * - Optional fixed action bar at bottom
 */
export function RightDrawer({
  open,
  onClose,
  title,
  children,
  showActionBar = false,
  actionBarContent,
  primaryAction,
  secondaryAction,
}: RightDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "460px",
          backgroundColor: "var(--white)",
          border: "var(--border-width-thin) solid var(--grey-200-12)",
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Header */}
        {title && (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "var(--spacing-6)",
                py: "var(--spacing-2)",
                minHeight: "56px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--font-family-base)",
                  fontWeight: "var(--font-weight-semibold)",
                  fontSize: "var(--font-size-h6)",
                  color: "var(--text-primary)",
                  lineHeight: 1.6,
                }}
              >
                {title}
              </Typography>
              <IconButton
                onClick={onClose}
                sx={{
                  p: "5px",
                  color: "var(--text-primary)",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider
              sx={{
                borderColor: "var(--grey-200-12)",
              }}
            />
          </>
        )}

        {/* Content Area - Scrollable */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden",
            py: "var(--spacing-2)",
          }}
        >
          {children}
        </Box>

        {/* Action Bar - Fixed at bottom */}
        {showActionBar && (
          <>
            <Divider
              sx={{
                borderColor: "var(--grey-200-12)",
              }}
            />
            <Box
              sx={{
                px: "var(--spacing-6)",
                py: "var(--spacing-4)",
                display: "flex",
                gap: "var(--spacing-2)",
                justifyContent: "flex-end",
                borderTop: "var(--border-width-thin) solid var(--grey-200-12)",
              }}
            >
              {actionBarContent ? (
                actionBarContent
              ) : (
                <>
                  {secondaryAction && (
                    <Button
                      variant="outlined"
                      onClick={secondaryAction.onClick}
                      disabled={secondaryAction.disabled}
                      sx={{
                        fontFamily: "var(--font-family-base)",
                        textTransform: "none",
                        borderColor: "var(--grey-200-12)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {secondaryAction.label}
                    </Button>
                  )}
                  {primaryAction && (
                    <Button
                      variant="contained"
                      onClick={primaryAction.onClick}
                      disabled={primaryAction.disabled}
                      sx={{
                        fontFamily: "var(--font-family-base)",
                        textTransform: "none",
                        backgroundColor: "var(--primary-main)",
                        color: "var(--white)",
                        "&:hover": {
                          backgroundColor: "var(--primary-dark)",
                        },
                      }}
                    >
                      {primaryAction.label}
                    </Button>
                  )}
                </>
              )}
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}