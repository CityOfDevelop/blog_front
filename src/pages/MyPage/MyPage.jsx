import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./MyPage.css";
import { useSelector } from "react-redux";
import Calendar from "components/Calendar/Calendar";

const InfoBoard = () => {
  const { sidebarStatus } = useSelector((state) => state.sidebarStatus);

  return (
    <div className="dc_wrap">
      <Header name="마이페이지" />
      <SideBar active={sidebarStatus} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <div id="tabs_wrap">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-0"
        >
          <Tab eventKey="home" title="정보">
            test1 {sidebarStatus}
          </Tab>
          <Tab eventKey="profile" title="게시물">
            test2
          </Tab>
          <Tab eventKey="contact" title="스케줄">
            <Calendar />
          </Tab>
        </Tabs>
      </div>
      <Beacon />
    </div>
  );
};

export default InfoBoard;
