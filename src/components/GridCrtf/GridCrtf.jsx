import { useEffect } from "react";
import "./GridCrtf.css";

const GridCrtf = () => {
  const sampleCrftData = [
    { crftName: "정보처리기사" },
    { crftName: "빅데이터 분석기사" },
    { crftName: "SQLD" },
    { crftName: "컴활 1급" },
    { crftName: "SQLP" },
    { crftName: "정보처리기사" },
    { crftName: "빅데이터 분석기사" },
    { crftName: "SQLD" },
    { crftName: "컴활 1급" },
    { crftName: "SQLP" },
    { crftName: "정보처리기사" },
    { crftName: "빅데이터 분석기사" },
    { crftName: "SQLD" },
    { crftName: "컴활 1급" },
    { crftName: "SQLP" },
  ];

  const makeGridCrtfSlide = () => {
    let htmlDummy2 = "";

    for (let i = 0; i < sampleCrftData.length; i++) {
      htmlDummy2 += `<div class="grid_crtf_item">${sampleCrftData[i].crftName}</div>`;
    }

    document.getElementById("grid_crtf_list").innerHTML = htmlDummy2;
  };

  useEffect(() => {
    makeGridCrtfSlide();
    return () => {};
  });

  return (
    <div className="grid_wrap">
      <div id="grid_crtf_list" className="grid_crtf"></div>
    </div>
  );
};

export default GridCrtf;
