import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";


import Topbar from "./pages/Nav/Topbar";
import Leftsidebar from "./pages/Nav/Leftsidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Dashboard/Team";
import Contacts from "./pages/Dashboard/Contacts";
import Invoices from "./pages/Dashboard/Invoices";
import Profile from "./pages/Dashboard/Profile";
import Calendar from "./pages/Dashboard/Calendar";
import CalendarModal from "./components/CalendarModal";
import Accord from "./pages/Dashboard/Accord";
import Bar from "./pages/Dashboard/Charts/Bar";
import Line from './pages/Dashboard/Charts/Line';
import Geo from './pages/Dashboard/Charts/Geo';
import Pie from './pages/Dashboard/Charts/Pie';

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
                <Route path="/profile" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendarmodal" element={<CalendarModal />} />
                <Route path="/faq" element={<Accord />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geo />} />
                <Route path="/pie" element={<Pie />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
