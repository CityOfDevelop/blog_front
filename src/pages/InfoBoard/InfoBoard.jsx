import Header from "containers/Header/Header";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import FeedList from "components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import React, { useState, useEffect } from "react";
import axios from "axios";
const tempImg = "/images/board/temp_img01.png";

const InfoBoard = () => {
  const [feeds, setfeeds] = useState([]);

  const retrieveFeeds = () => {
    axios
      .get("http://localhost:8080/feedlist")
      .then((Response) => {
        if (Response.status == "200" && Response.data != "") {
          setfeeds(Response.data);
          console.log(Response.data);
        } else {
          alert("게시물이 존재하지 않습니다.");
        }
      })
      .catch((error) => console.log(error));
      return()=>{
    };   
  }; 
  
 useEffect(() => retrieveFeeds,[]);

  const listItems = feeds.map((item) => (
    <li id={item.boardNo} className="board_list_item" key={item.boardNo}>
      {/* 여기에 쿼리스트링 하셔서 상세 */}
        {/* 카테고리 추가할 공간? */}
       <div>
          <Badge pill bg="secondary">
        #{item.category}
      </Badge>{' '}       
       </div>
        <div className="boart_list_item_post">
      <Link className="board_link" to={`/BoardDetail/${item.boardNo}`}>
          <div className="post_title">{item.title}</div>
          <div className="post_cntn">
            <span className="article_cntn">{item.cntn}</span>
          </div>
           </Link> 
          <div className="post_append">
            <span>댓글 {item.replyCnt} / </span>
            <span>{item.regDttm} /</span>
            <span> 글쓴이: {item.writer}</span>
          </div>
        </div>
        <div className="board_list_item_img">
          {/* 임시 이미지 파일 setting */}
          <img src={tempImg} alt="게시판 이미지" />
        </div>      
    </li>
  ));
 

  return (
    <div className="dc_wrap">
      <Header name="정보게시판" />
      <SideBar />
      <ul className="board_list">{listItems}</ul>
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성        <FeedList feeds={feeds} />
*/}
      <Beacon />
    </div>
  );
};

export default InfoBoard;
