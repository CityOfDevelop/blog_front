import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MySetting = () => {
  return (
    <div className="dc_wrap">
      <Header name="설정" />
      <SideBar />
      <Beacon />
    </div>
  );
};

export default MySetting;
