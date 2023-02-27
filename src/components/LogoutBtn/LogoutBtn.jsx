import "./LogoutBtn.css";
import { Link, useNavigate } from "react-router-dom";

const LogoutBtn = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("ACCESS_TOKEN", "");
  };

  return (
    <div>
      <Link to="/login">
        <button className="btn_logout" onClick={logout}>
          로그아웃
        </button>
      </Link>
    </div>
  );
};

export default LogoutBtn;
