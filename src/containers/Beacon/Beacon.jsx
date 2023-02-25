import "./Beacon.css";
import { useState } from "react";
import {
  RiArrowUpSLine,
  RiPencilFill,
  RiCalendar2Fill,
  RiBuilding2Fill,
  RiBuilding2Line,
} from "react-icons/ri";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="beacon_wrap">
      <div id="baecon_main_frame">
        <button id="baecon_main_button" onClick={toggleHandler}>
          {isOpen ? <RiBuilding2Fill /> : <RiBuilding2Line />}
        </button>
      </div>
      <div
        id="baecon_schd_frame"
        className={isOpen ? "beacon_schd_open" : "beacon_schd_close"}
      >
        <button id="baecon_schd_button">
          <RiCalendar2Fill />
        </button>
      </div>
      <div
        id="baecon_write_frame"
        className={isOpen ? "beacon_write_open" : "beacon_write_close"}
      >
        <button id="baecon_write_button">
          <RiPencilFill />
        </button>
      </div>
      <div
        id="baecon_top_frame"
        className={isOpen ? "beacon_top_open" : "beacon_top_close"}
      >
        <button id="baecon_top_button" onClick={scrollToTop}>
          <RiArrowUpSLine />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
