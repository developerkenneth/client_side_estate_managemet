import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import MainLayout from "./layouts/MainLayout";
import Property from "./pages/Property";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { PropertiesProvider } from "./contexts/PropertiesContext";
import PropertiesPage from "./pages/PropertiesPage";
import ProtectedRoute from "./components/auth/ProtectRoute";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/auth/Dashboard";

function App() {
  return (
    <AppProvider>
      <PropertiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/properties/:id" element={<Property />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              element={
                <ProtectedRoute>
                  <UserLayout />
                </ProtectedRoute>
              }
            >
              <Route path="user/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PropertiesProvider>
    </AppProvider>
  );
}

export default App;
