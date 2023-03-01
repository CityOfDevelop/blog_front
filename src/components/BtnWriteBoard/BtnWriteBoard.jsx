import "./BtnWriteBoard.css";
import { Link } from "react-router-dom";

const BtnWriteBoard = (props) => {
  return (
    <div>
      <Link to="/writeBoard">
        <button className="btn_writeBoard">글쓰기</button>
      </Link>
    </div>
  );
};

export default BtnWriteBoard;
