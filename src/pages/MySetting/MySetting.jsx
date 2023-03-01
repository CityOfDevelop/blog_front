import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MySetting = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive((active) => true);
  };

  const sideClose = () => {
    setActive((active) => false);
  };

  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} name="설정" />
      <SideBar sideClose={sideClose} active={active} />
      <Beacon />
    </div>
  );
};

export default MySetting;
