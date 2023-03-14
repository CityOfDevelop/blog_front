import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SignUpCity from "./pages/SignUpCity/SignUpCity";
import About from "./pages/About/About";
import InfoBoard from "./pages/InfoBoard/InfoBoard";
import BoardDetail from "./pages/BoardDetail/BoardDetail";
import MyBoard from "./pages/MyBoard/MyBoard";
import MyPage from "./pages/MyPage/MyPage";
import MySetting from "./pages/MySetting/MySetting";
import WriteBoard from "./pages/WriteBoard/WriteBoard";

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
        <Route path="/myBoard" element={<MyBoard />} />
        <Route path="/setting" element={<MySetting />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/boardDetail/:id" element={<BoardDetail/>}/>
        <Route path="/writeBoard" element={<WriteBoard />} />
      </Routes>
    </div>
  );
}

export default App;
