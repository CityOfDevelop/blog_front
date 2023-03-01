import "./SideBar.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import BtnLogout from "components/BtnLogout/BtnLogout";
import BtnLogin from "components/BtnLogin/BtnLogin";
import BtnSetting from "components/BtnSetting/BtnSetting";
import BtnWriteBoard from "components/BtnWriteBoard/BtnWriteBoard";

const SideBar = (props) => {
  return (
    <div id="side_wrap" className={props.active ? "open" : null}>
      <div id="side_main">
        <div className="side_main_logo">로고</div>
        <div className="side_main_nick">
          <span>{localStorage.getItem("NICK_NAME")}</span>
        </div>
        <div className="side_main_work">
          {/* {localStorage.getItem("ACCESS_TOKEN") != "" ? (
            <BtnWriteBoard />
          ) : (
            <BtnLogin />
          )} */}
        </div>
      </div>
      <div id="side_cate">
        <ul id="side_list">
          <li className="side_list_item">
            <NavLink
              className={({ isActive }) =>
                "side_link" + (isActive ? "_active" : "")
              }
              to="/myPage"
            >
              마이페이지
            </NavLink>
          </li>
          <li className="side_list_item">
            <NavLink
              className={({ isActive }) =>
                "side_link" + (isActive ? "_active" : "")
              }
              to="/MyBoard"
            >
              나의 게시물
            </NavLink>
          </li>
          <li className="side_list_item">----------------------</li>
          <li className="side_list_item">
            <NavLink
              className={({ isActive }) =>
                "side_link" + (isActive ? "_active" : "")
              }
              to="/"
            >
              홈
            </NavLink>
          </li>
          <li className="side_list_item">
            <NavLink
              className={({ isActive }) =>
                "side_link" + (isActive ? "_active" : "")
              }
              to="/infoboard"
            >
              정보 공유 게시판
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="side_setting">
        <div>
          <BtnSetting />
        </div>
        <div>
          <BtnLogout />
        </div>
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
