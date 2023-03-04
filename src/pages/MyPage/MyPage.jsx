import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./MyPage.css";
import { useSelector } from "react-redux";
import Calendar from "components/Calendar/Calendar";
import FeedList from "components/FeedList/FeedList";
import { useEffect } from "react";
import axios from "axios";

const MyPage = () => {
  const { sidebarStatus } = useSelector((state) => state.sidebarStatus);
  const [feeds, setfeeds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/feedlist")
      .then((Response) => {
        if (Response.status == "200" && Response.data != "") {
          setfeeds(Response.data);
          console.log(feeds);
        } else {
          alert("게시물이 존재하지 않습니다.");
        }
      })
      .catch((error) => console.log(error));
  }, []);
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
            test1
          </Tab>
          <Tab eventKey="profile" title="게시물">
            <FeedList feeds={feeds} />
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

export default MyPage;
