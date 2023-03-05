import "./SideBar.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import BtnLogout from "components/BtnLogout/BtnLogout";
import BtnLogin from "components/BtnLogin/BtnLogin";
import BtnSetting from "components/BtnSetting/BtnSetting";
import BtnWriteBoard from "components/BtnWriteBoard/BtnWriteBoard";
import { closeSidebar } from "redux/reducers/sidebarStatus";
import { useDispatch, useSelector } from "react-redux";

const SideBar = (props) => {
  const dispatch = useDispatch();

  const closeSide = () => {
    dispatch(closeSidebar());
  };

  const { sidebarStatus } = useSelector((state) => state.sidebarStatus);

  return (
    <div id="side_wrap" className={sidebarStatus ? "open" : null}>
      <div id="side_main">
        <div className="side_main_logo">로고</div>
        <div className="side_main_nick">
          <span>{localStorage.getItem("NICK_NAME")}</span>
        </div>
        <div className="side_main_work">
          {localStorage.getItem("ACCESS_TOKEN") == null ? (
            <BtnLogin />
          ) : (
            <BtnWriteBoard />
          )}
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
      {localStorage.getItem("ACCESS_TOKEN") == null ? (
        ""
      ) : (
        <div id="side_setting">
          <div id="side_setting_set">
            <BtnSetting />
          </div>
          <div id="side_setting_logout">
            <BtnLogout />
          </div>
        </div>
      )}

      <div id="side_close" className={sidebarStatus ? "open" : "close"}>
        <button id="btn_side_close" onClick={closeSide}>
          <IoChevronBackOutline className="icn_close" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
