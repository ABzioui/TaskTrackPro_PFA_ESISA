import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { themeSettings } from "theme";
import Layout from "scenes/layout";
import SignIn from "scenes/signin";
import Dashboard from "scenes/dashboard";
import MainLayout from "scenes/mainlayout";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/*Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route
                path="/dashboard"
                element={<Navigate to="/page" replace />}
              />
              <Route path="/page" element={<Dashboard />} />
            </Route>*/}
            <Route path="/" element={<SignIn />} />
            <Route element={<MainLayout />}>
              <Route
                path="/dashboard"
                element={<Navigate to="/page" replace />}
              />
              <Route path="/page" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
