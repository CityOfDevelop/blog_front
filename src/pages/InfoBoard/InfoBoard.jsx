import Header from "containers/Header/Header";
import FeedList from "components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from 'react';
import axios from "axios";

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
    axios.get("http://localhost:8080/feedlist")
      .then((Response) => {
        if (Response.status == "200" && Response.data != "") {
          setfeeds(Response.data);
          console.log(feeds);
        } else {
          alert("게시물이 존재하지 않습니다.");
        }
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} name="정보게시판" />
      <SideBar sideClose={sideClose} active={active} />
      <FeedList feeds={feeds} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <Beacon />
    </div>
  );
};

export default InfoBoard;
