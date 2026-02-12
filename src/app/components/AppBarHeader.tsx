import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  FormControl,
} from "@/app/components/playbook";
import { KeyboardArrowDown as ArrowDownIcon } from "@mui/icons-material";

interface AppBarHeaderProps {
  pageTitle: string;
  selectedSquad: string;
  squads: string[];
  userName: string;
  onSquadChange: (squad: string) => void;
  onAvatarClick: () => void;
}

export function AppBarHeader({
  pageTitle,
  selectedSquad,
  squads,
  userName,
  onSquadChange,
  onAvatarClick,
}: AppBarHeaderProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "var(--white)",
        borderBottom:
          "var(--border-width-thin) solid var(--border-default)",
        flexShrink: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "72px",
          px: "var(--spacing-6)",
        }}
      >
        {/* Left: Page Title */}
        <Typography
          variant="body"
          sx={{
            fontFamily: "var(--font-family-base)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--text-primary)",
          }}
        >
          {pageTitle}
        </Typography>

        {/* Right: Squad Selector, Avatar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-4)",
          }}
        >
          {/* Squad Selector */}
          <FormControl size="small">
            <Select
              value={selectedSquad}
              onChange={(e) => onSquadChange(e.target.value)}
              sx={{
                fontFamily: "var(--font-family-base)",
                fontSize: "var(--font-size-body2)",
                minWidth: "160px",
                "& .MuiSelect-select": {
                  py: "var(--spacing-2)",
                },
              }}
              IconComponent={ArrowDownIcon}
            >
              {squads.map((squad) => (
                <MenuItem
                  key={squad}
                  value={squad}
                  sx={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  {squad}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* User Avatar */}
          <IconButton
            onClick={onAvatarClick}
            sx={{
              p: 0,
            }}
          >
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "var(--primary-main)",
                fontFamily: "var(--font-family-base)",
                fontSize: "var(--font-size-body2)",
                fontWeight: "var(--font-weight-semibold)",
              }}
            >
              {userName}
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}