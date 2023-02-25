import Header from "containers/Header/Header";
import Beacon from "containers/Beacon/Beacon";
import "./Home.css";
import SideBar from "containers/SideBar/SideBar";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive(true); // sidebar의 활성화 false
  };

  const sideClose = () => {
    setActive(false); // sidebar의 활성화 false
  };
  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} />
      <SideBar sideClose={sideClose} active={active} />
      <div className="dc_main">
        <h3 className="dc_title">개발도시 Home</h3>
      </div>
      <Beacon />
    </div>
  );
};

export default Home;
