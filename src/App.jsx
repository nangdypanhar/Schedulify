import "./App.css";
import LoginPage from "./views/LoginPage/login_page";
import Navbar from "./Components/Navbar.jsx";
import Homepage from "./views/Homepage/Homepage.jsx";
import MySchedulePage from "./views/MySchedulePage/MySchedulePage.jsx";
import AboutPage from "./views/AboutPage/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/myschedule" element={<MySchedulePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
