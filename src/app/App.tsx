import { RouterProvider } from "react-router";
import { PlaybookThemeProvider } from "./theme/PlaybookThemeProvider";
import { router } from "./routes";

export default function App() {
  return (
    <PlaybookThemeProvider>
      <RouterProvider router={router} />
    </PlaybookThemeProvider>
  );
}
