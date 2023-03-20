import PieChart from "components/PieChart/PieChart";
import GridCrtf from "components/GridCrtf/GridCrtf";
import PieChartDetail from "components/PieChartDetail/PieChartDetail";
import "./DashBoard.css";
import { useEffect } from "react";
import axios from "axios";
import React, { useState } from "react";

const DashBoard = () => {

  const [info, setInfo] = useState({});
  console.log("ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/userBasInfo/mykim01`)
      .then((Response) => {
        if (Response.status == "200" && Response.data != "") {
          console.log(Response.data);
          setInfo(Response.data);
        } else {
          alert("게시물이 존재하지 않습니다.");
        }
      })
      .catch((error) => console.log(error));
      return () => {
        console.log("오와리다!")
      }
  });

  return (
    <div className="dash_wrap">
      <div className="dash_intro dash_bg">소개{info.intrd}{/* 자격증 */}</div>
      <div className="dash_chart_wrap">
        <div className="dash_chart">
          <PieChart />
        </div>
        <div className="dash_chart_detail dash_bg">
          <PieChartDetail />
        </div>
      </div>

      <div className="dash_crtf close dash_bg">
        <GridCrtf info={info}/>
      </div>
    </div>
  );
};

export default DashBoard;
