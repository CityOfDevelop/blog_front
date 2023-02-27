import "./LoginBtn.css";
import { Link } from "react-router-dom";

const LoginBtn = (props) => {
  return (
    <div>
      <Link to="/login">
        <button className="btn_login">로그인</button>
      </Link>
    </div>
  );
};

export default LoginBtn;
