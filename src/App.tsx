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
import Dashboard from "./pages/users/Dashboard";
import { AuthProvider } from "./contexts/auth/authContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <PropertiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/properties/:id" element={<Property />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
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
                <Route path="/user/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PropertiesProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
