import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
} from "@/app/components/playbook";
import {
  LocalHospitalOutlined,
  BarChartOutlined,
  PeopleOutlined,
  FitnessCenterOutlined,
  DescriptionOutlined,
  CalendarTodayOutlined,
  HistoryOutlined,
  SettingsOutlined,
  HelpOutlineOutlined,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import logoImage from "figma:asset/98f4ac68bfc15039b02acb18b947b9fe9a5934ad.png";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
}

const menuItems: NavigationItem[] = [
  { label: "Medical", icon: <LocalHospitalOutlined /> },
  { label: "My iP", icon: <BarChartOutlined />, path: "/" },
  { label: "Athletes", icon: <PeopleOutlined /> },
  { label: "Workload", icon: <FitnessCenterOutlined /> },
  { label: "Forms", icon: <DescriptionOutlined /> },
  { label: "Calendar", icon: <CalendarTodayOutlined /> },
  { label: "Activity log", icon: <HistoryOutlined /> },
  { label: "Admin", icon: <SettingsOutlined /> },
];

export function MainNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavItemClick = (item: NavigationItem) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (item: NavigationItem) => {
    if (!item.path) return false;
    return location.pathname === item.path || location.pathname.startsWith("/dashboards");
  };

  return (
    <Box
      sx={{
        width: isExpanded ? "240px" : "72px",
        height: "100%",
        background:
          "linear-gradient(180deg, #000814 0%, #1a365d 100%)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          p: "var(--spacing-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: isExpanded ? "flex-start" : "center",
          minHeight: "72px",
          flexShrink: 0,
        }}
      >
        <img
          src={logoImage}
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
            minWidth: "40px",
            minHeight: "40px",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      </Box>

      {/* Navigation Items */}
      <List
        sx={{
          flex: 1,
          px: "var(--spacing-2)",
          py: 0,
        }}
      >
        {menuItems.map((item, index) => {
          const active = isActive(item);
          return (
            <Tooltip
              key={index}
              title={!isExpanded ? item.label : ""}
              placement="right"
              arrow
            >
              <ListItemButton
                onClick={() => handleNavItemClick(item)}
                sx={{
                  borderRadius: "var(--radius-md)",
                  mb: "var(--spacing-1)",
                  minHeight: "48px",
                  px: "var(--spacing-2)",
                  color: "#ffffff",
                  fontFamily: "var(--font-family-base)",
                  justifyContent: isExpanded
                    ? "flex-start"
                    : "center",
                  backgroundColor: active ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffff",
                    minWidth: isExpanded ? "40px" : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {isExpanded && (
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "var(--font-family-base)",
                        fontSize: "var(--font-size-body1)",
                        fontWeight: "var(--font-weight-regular)",
                      },
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      {/* Help - Bottom Section */}
      <Box
        sx={{
          px: "var(--spacing-2)",
          pb: "var(--spacing-2)",
        }}
      >
        <Tooltip
          title={!isExpanded ? "Help" : ""}
          placement="right"
          arrow
        >
          <ListItemButton
            sx={{
              borderRadius: "var(--radius-md)",
              mb: "var(--spacing-1)",
              minHeight: "48px",
              px: "var(--spacing-2)",
              color: "#ffffff",
              fontFamily: "var(--font-family-base)",
              justifyContent: isExpanded
                ? "flex-start"
                : "center",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#ffffff",
                minWidth: isExpanded ? "40px" : "auto",
                justifyContent: "center",
              }}
            >
              <HelpOutlineOutlined />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Help"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "var(--font-family-base)",
                    fontSize: "var(--font-size-body1)",
                    fontWeight: "var(--font-weight-regular)",
                  },
                }}
              />
            )}
          </ListItemButton>
        </Tooltip>

        {/* Toggle Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: isExpanded
              ? "flex-start"
              : "center",
            pt: "var(--spacing-2)",
          }}
        >
          <IconButton
            onClick={toggleNavigation}
            sx={{
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}