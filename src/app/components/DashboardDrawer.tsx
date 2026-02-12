import { Box } from "@/app/components/playbook";
import { FoldersSidebar, defaultFoldersData } from "@/app/components/FoldersSidebar";

interface DashboardDrawerProps {
  open: boolean;
}

export function DashboardDrawer({ open }: DashboardDrawerProps) {
  if (!open) return null;

  const handleDashboardSelect = (dashboardId: string, folderId: string) => {
    console.log("Dashboard selected:", dashboardId, "from folder:", folderId);
    // Add your navigation logic here
  };

  const handleFolderSelect = (folderId: string) => {
    console.log("Folder selected:", folderId);
  };

  return (
    <FoldersSidebar
      folders={defaultFoldersData}
      width={240}
      onDashboardSelect={handleDashboardSelect}
      onFolderSelect={handleFolderSelect}
      foldersTitle="Folders"
      showSearch={true}
      showDashboardMenu={true}
      showBottomToolbar={true}
    />
  );
}
