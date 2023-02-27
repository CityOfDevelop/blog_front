import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import HeaderLogin from "components/HeaderLogin/HeaderLogin";
import HeaderLogout from "components/HeaderLogout/HeaderLogout";

const Header = (props) => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (ScrollY > 80) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <header id="dc_head" className={ScrollActive ? "scroll_header" : ""}>
      <div id="header_left">
        <button id="btn_sidebar_open" onClick={props.sideOpen}>
          <HiMenu id="icon_sidebar" />
        </button>
        <Link id="logo_home" to="/">
          devcity
        </Link>
      </div>
      <div id="header_center">{props.name}</div>
      <div id="header_right">
        {localStorage.getItem("ACCESS_TOKEN") == "" ? (
          <HeaderLogin />
        ) : (
          <HeaderLogout />
        )}
      </div>
    </header>
  );
};

export default Header;
