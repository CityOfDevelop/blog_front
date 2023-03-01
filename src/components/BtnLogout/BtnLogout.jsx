import "./BtnLogout.css";
import { useNavigate } from "react-router-dom";

const HeaderLogout = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("ACCESS_TOKEN", "");
    navigate("/login");
  };

  return (
    <>
      <button className="btn_logout" onClick={logout}>
        로그아웃
      </button>
    </>
  );
};

export default HeaderLogout;
