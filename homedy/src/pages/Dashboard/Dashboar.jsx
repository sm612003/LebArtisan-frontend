import React from 'react'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
// import { tokens } from "../../theme";
import Team from "../../scenes/team/index.jsx";

// import Form from "../../scenes/form/index.jsx";

import '../Dashboard/dashbord.css'


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme.js";

const Dashboard = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    // const colors = tokens(theme.palette.mode);
  
    return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  {/* <Route path="/" element={<Dashboardone/>} /> */}
                  <Route path="/" element={<Team />} />
                  {/* <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} /> */}
                  {/* <Route path="/form" element={<Form />} /> */}
                  {/* <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} /> */}
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      );
    }

export default Dashboard
