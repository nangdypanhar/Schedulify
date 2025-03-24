import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Navbar from "./layouts/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import SignupPage from "./pages/SignupPage/signup_page.jsx";
import MySchedulePage from "./pages/MySchedulePage/MySchedulePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import RequestPage from "./pages/RequestPage/RequestPage.jsx";
import SchedulePage from "./pages/SchedulePage/SchedulePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/myschedule" element={<MySchedulePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
