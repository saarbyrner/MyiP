import { Box, Grid, IconButton } from "@/app/components/playbook";
import { MainNavigation } from "@/app/components/MainNavigation";
import { AppBarHeader } from "@/app/components/AppBarHeader";
import { Header } from "@/app/components/Header";
import { FilterBar2 } from "@/app/components/FilterBar2";
import { MetricCard } from "@/app/components/looker/MetricCard";
import { GaugeCard } from "@/app/components/looker/GaugeCard";
import { BarChartCard } from "@/app/components/looker/BarChartCard";
import { DonutChartCard } from "@/app/components/looker/DonutChartCard";
import { DashboardDrawer } from "@/app/components/DashboardDrawer";
import RefreshIcon from "@mui/icons-material/Refresh";
import FilterListIcon from "@mui/icons-material/FilterList";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export function DashboardPageTemplate() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "var(--background)",
      }}
    >
      {/* Main Navigation */}
      <MainNavigation />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {/* AppBar Header */}
        <AppBarHeader
          pageTitle="Performance Dashboard"
          selectedSquad="First Team"
          squads={[
            "First Team",
            "Second Team",
            "Under 18s",
            "Under 16s",
          ]}
          userName="JSM"
          onSquadChange={(squad) =>
            console.log("Squad changed:", squad)
          }
          onAvatarClick={() => console.log("Avatar clicked")}
        />

        {/* Page Content */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: 1,
              px: "var(--spacing-6)",
              py: "var(--spacing-4)",
              backgroundColor: "#fafafa",
              overflow: "auto",
            }}
          >
            <Header
              title="Performance Dashboard"
              actions={
                <>
                  <IconButton
                    sx={{
                      backgroundColor: "#F1F2F3",
                      color: "var(--color-text-primary)",
                      borderRadius: "var(--radius-sm)",
                      p: "var(--spacing-2)",
                      "&:hover": {
                        backgroundColor: "#E0E1E2",
                      },
                    }}
                  >
                    <RefreshIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    sx={{
                      backgroundColor: filtersOpen ? "#E0E1E2" : "#F1F2F3",
                      color: "var(--color-text-primary)",
                      borderRadius: "var(--radius-sm)",
                      p: "var(--spacing-2)",
                      "&:hover": {
                        backgroundColor: "#E0E1E2",
                      },
                    }}
                  >
                    <FilterListIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    sx={{
                      backgroundColor: "#F1F2F3",
                      color: "var(--color-text-primary)",
                      borderRadius: "var(--radius-sm)",
                      p: "var(--spacing-2)",
                      "&:hover": {
                        backgroundColor: "#E0E1E2",
                      },
                    }}
                  >
                    <FolderOutlinedIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "#F1F2F3",
                      color: "var(--color-text-primary)",
                      borderRadius: "var(--radius-sm)",
                      p: "var(--spacing-2)",
                      "&:hover": {
                        backgroundColor: "#E0E1E2",
                      },
                    }}
                  >
                    <MoreVertIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                </>
              }
              sx={{ mb: "var(--spacing-4)" }}
            />
            {filtersOpen && <FilterBar2 />}
            <Grid container spacing="var(--spacing-4)">
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <MetricCard value="250" label="Total Athletes" color="#4285F4" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <MetricCard
                  value="500"
                  label="Training Sessions"
                  trend={{ value: "12%", isPositive: true }}
                  color="#34A853"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <MetricCard value="3" label="Injuries" color="#EA4335" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <GaugeCard value={85} label="Avg Fitness" color="#7B61FF" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <BarChartCard
                  title="Weekly Training Load"
                  data={[
                    { week: "Week 1", load: 45 },
                    { week: "Week 2", load: 52 },
                    { week: "Week 3", load: 48 },
                    { week: "Week 4", load: 61 },
                  ]}
                  dataKey="load"
                  xAxisKey="week"
                  color="#4285F4"
                  height={250}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <DonutChartCard
                  title="Training Distribution"
                  data={[
                    { name: "Strength", value: 30 },
                    { name: "Cardio", value: 25 },
                    { name: "Flexibility", value: 20 },
                    { name: "Sports", value: 25 },
                  ]}
                  colors={["#4285F4", "#34A853", "#FBBC04", "#7B61FF"]}
                  height={250}
                />
              </Grid>
            </Grid>
          </Box>
          <DashboardDrawer open={drawerOpen} />
        </Box>
      </Box>
    </Box>
  );
}