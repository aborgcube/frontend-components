import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/client/LoginPage";
import OTPVerificationPage from "./pages/client/OTPVerificationPage";
import RegisterPage from "./pages/client/RegisterPage";
import "./styles/client/auth.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/client/login" element={<LoginPage />} />
          <Route path="/client/register" element={<RegisterPage />} />
          <Route
            path="/client/otp-verification"
            element={<OTPVerificationPage />}
          />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
