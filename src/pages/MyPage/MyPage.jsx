import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./MyPage.css";

const InfoBoard = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive((active) => true);
  };

  const sideClose = () => {
    setActive((active) => false);
  };

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
      <Header sideOpen={sideOpen} name="마이페이지" />
      <SideBar sideClose={sideClose} active={active} />
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
