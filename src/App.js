import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SignUpCity from "./pages/SignUpCity/SignUpCity";
import About from "./pages/About/About";
import InfoBoard from "./pages/InfoBoard/InfoBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/devCity" element={<SignUpCity />} />
        <Route path="/infoBoard" element={<InfoBoard />} />
      </Routes>
    </div>
  );
}

export default App;
