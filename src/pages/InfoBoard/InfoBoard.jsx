import Header from "../../containers/Header/Header";
import FeedList from "../../components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
import { useState } from "react";

const InfoBoard = () => {
    const [data, setData] = useState("");
    console.log(data)
    return (
        <div>
            <Header setData={setData}/>
            <SideBar active = {data}/>
            <FeedList testData = {[1,2,3]} /> {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
        </div>
    );
  };
  
  export default InfoBoard;
  