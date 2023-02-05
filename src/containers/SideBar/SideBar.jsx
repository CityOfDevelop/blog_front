import "./SideBar.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Nav from "react-bootstrap/Nav";

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
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">개발도시</Nav.Link>
          <Nav.Link href="/infoboard">정보 공유 게시판</Nav.Link>
        </Nav>
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
