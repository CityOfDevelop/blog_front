import "./BtnSetting.css";
import { Link } from "react-router-dom";

const BtnSetting = (props) => {
  return (
    <Link to="/setting">
      <button className="btn_setting">설정</button>
    </Link>
  );
};

export default BtnSetting;
