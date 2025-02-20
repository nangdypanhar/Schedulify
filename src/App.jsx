import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./views/AboutPage/AboutPage.jsx";
import AdminLoginPage from "./views/AdminLoginPage/adminlogin_page.jsx";
import Homepage from "./views/Homepage/Homepage.jsx";
import LoginPage from "./views/LoginPage/login_page";
import MySchedulePage from "./views/MySchedulePage/MySchedulePage.jsx";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage.jsx";
import SignupPage from "./views/SignupPage/signup_page.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/myschedule" element={<MySchedulePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </>
  );
}

export default App;
