import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState } from "react";

const InfoBoard = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive((active) => true);
  };

  const sideClose = () => {
    setActive((active) => false);
  };

  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} name="마이페이지" />
      <SideBar sideClose={sideClose} active={active} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <Beacon />
    </div>
  );
};

export default InfoBoard;
