import Header from "containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import {useParams,useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./BoardDetail.css";
import axios from "axios";
const tempImg = "/images/board/temp_img01.png";

const BoardDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [results, setResults] = useState({});

    const retrieveBoardDetail = () => {
        axios
        .get(`http://localhost:8080/detail/${id}`)
          .then((Response) => {
              setResults(Response.data);
              console.log(Response.data);
            if (Response.status == "200" && Response.data != "") {
            } else {
                setResults("");
              alert("상세정보가 조회 되지 않습니다.");
            }
          })
          .catch((error) => console.log(error));
          return()=>{
          };
        };

    useEffect(() =>  retrieveBoardDetail,[]);// 변경된 id로만 실행 후, 종료!!

return (
    <div className="dc_wrap">
      <Header name="상세" />
      <SideBar />
      <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
            <img src={tempImg} alt="게시판 이미지" />
            </div>
            <div className='col-md-6 mt-4'>
                <h4 className='pt-5'>{ results.title }</h4>
                <p>{ results.cntn }</p>
                <button className='btn btn-danger'>수정하기</button>
                <br />
                <br />
                <button className='btn btn-danger' onClick={() => navigate(-1)}>Go back</button>
            </div>
            </div>
        </div>
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <Beacon />
    </div>
  );
};

export default BoardDetail;