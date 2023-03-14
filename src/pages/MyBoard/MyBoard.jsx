import Header from "containers/Header/Header";
import FeedList from "components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBoard = () => {
  const [feeds, setfeeds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/myFeedlist")
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
      <Header name="나의 게시물" />
      <SideBar />
      <FeedList feeds={feeds} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <Beacon />
    </div>
  );
};

export default MyBoard;
