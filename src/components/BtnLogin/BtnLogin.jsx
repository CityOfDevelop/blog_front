import "./BtnLogin.css";
import { Link } from "react-router-dom";

const HeaderLogin = (props) => {
  return (
    <div>
      <Link to="/login">
        <button className="btn_login">로그인</button>
      </Link>
    </div>
  );
};

export default HeaderLogin;
