import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState } from "react";
import axios from "axios";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./MyPage.css";

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
      <div id="tabs_wrap">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="정보">
            test1
          </Tab>
          <Tab eventKey="profile" title="게시물">
            test2
          </Tab>
          <Tab eventKey="contact" title="스케줄">
            test3
          </Tab>
        </Tabs>
      </div>
      <Beacon />
    </div>
  );
};

export default InfoBoard;
