import "./HeaderLogout.css";
import { useNavigate } from "react-router-dom";

const HeaderLogout = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("ACCESS_TOKEN", "");
    navigate("/login");
  };

  return (
    <div>
      <button className="btn_logout" onClick={logout}>
        로그아웃
      </button>
      <span className="header_nickname">
        {localStorage.getItem("NICK_NAME")}
      </span>
    </div>
  );
};

export default HeaderLogout;
