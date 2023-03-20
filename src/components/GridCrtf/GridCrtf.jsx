import { useEffect } from "react";
import "./GridCrtf.css";

const GridCrtf = (props) => {
  
  console.log(props);

  const sampleCrftData = props.info.ctfeId.split(',');

  const makeGridCrtfSlide = () => {
    let htmlDummy2 = "";

    for (let i = 0; i < sampleCrftData.length; i++) {
      htmlDummy2 += `<div class="grid_crtf_item">${sampleCrftData[i]}</div>`;
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
