import "./SideBar.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div id="sideMenu" className={props.active ? "open" : null}>
      <div id="side_main">
        <div className="side_main_logo">로고</div>
        <div className="side_main_bottom">
          <p>개발을 위한 자유로운 공간</p>
        </div>
      </div>
      <div id="side_cate">
        <li className="side_list">
          <Link className="side_link" to="/">
            개발도시
          </Link>
        </li>
        <li className="side_list">
          <Link className="side_link" to="/infoboard">
            정보 공유 게시판
          </Link>
        </li>
      </div>
      <div id="side_close" className={props.active ? "open" : "close"}>
        <button id="btn_side_close" onClick={props.sideClose}>
          <IoChevronBackOutline className="icn_close" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
