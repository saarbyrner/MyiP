import { useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@/app/components/playbook";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

interface DashboardCardProps {
  folderName: string;
  date: string;
  title: string;
  thumbnailColor?: string;
  onClick?: () => void;
  onMove?: () => void;
  onCopy?: () => void;
  onRename?: () => void;
  onDelete?: () => void;
}

export function DashboardCard({
  folderName,
  date,
  title,
  thumbnailColor = "#E8EAED",
  onClick,
  onMove,
  onCopy,
  onRename,
  onDelete,
}: DashboardCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAction = (action: () => void | undefined) => {
    if (action) {
      action();
    }
    handleMenuClose();
  };

  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        border: "var(--border-width-thin) solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          borderColor: "var(--border-hover)",
        },
      }}
    >
      {/* Chart Thumbnail Preview */}
      <Box
        sx={{
          height: "180px",
          backgroundColor: thumbnailColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "70%",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "var(--radius-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-family-base)",
              color: "var(--text-secondary)",
            }}
          >
            Chart Preview
          </Typography>
        </Box>
      </Box>

      {/* Card Footer */}
      <Box
        sx={{
          p: "var(--spacing-3)",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontFamily: "var(--font-family-base)",
            color: "var(--text-secondary)",
            display: "block",
            mb: "var(--spacing-1)",
          }}
        >
          {date}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--spacing-2)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "var(--font-family-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
          <IconButton
            size="small"
            onClick={handleMenuClick}
            sx={{
              padding: "var(--spacing-1)",
            }}
          >
            <MoreVertIcon
              sx={{
                fontSize: "18px",
                color: "var(--text-secondary)",
              }}
            />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "var(--radius-md)",
              border: "var(--border-width-thin) solid var(--border-default)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
            "& .MuiMenuItem-root": {
              fontFamily: "var(--font-family-base)",
              fontSize: "14px",
              color: "var(--text-primary)",
              padding: "var(--spacing-2) var(--spacing-3)",
            },
          }}
        >
          <MenuItem onClick={() => handleMenuAction(onMove)}>Move</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onCopy)}>Copy</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onRename)}>Rename</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onDelete)}>Delete</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
}