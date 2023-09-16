import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";


import Topbar from "./pages/Nav/Topbar";
import Leftsidebar from "./pages/Nav/Leftsidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Dashboard/Team";
import Contacts from "./pages/Dashboard/Contacts";
import Invoices from "./pages/Dashboard/Invoices";

function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
          <div className="app">
            <Leftsidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
