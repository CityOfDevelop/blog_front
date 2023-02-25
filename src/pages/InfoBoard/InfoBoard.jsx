import Header from "containers/Header/Header";
import FeedList from "components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
import Beacon from "containers/Beacon/Beacon";
import { useState } from "react";

const InfoBoard = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive((active) => true);
  };

  const sideClose = () => {
    setActive((active) => false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get("http://localhost:8080/login", {
  //       params: values,
  //     })
  //     .then((Response) => {
  //       console.log(Response);
  //       if (Response.status == "200" && Response.data != "") {
  //         navigate("/");
  //       } else {
  //         setValues({ userId: "", passWord: "" });
  //         alert("아이디or비번 확인해주세요");
  //       }
  //     });
  // };

  const testData1 = [
    {
      id: 1,
      title: "네일아트는 홍대로",
      cntn: "홍대에서 네일아트를 받았는데 토끼를..홍대에서 네일아트를 받았는데 토끼를홍대에서 네일아트를 받았는데 토끼를..홍대에서 네일아트를 받았는데 토끼를..홍대에서 네일아트를 받았는데 토끼를..홍대에서 네일아트를 받았는데 토끼를..홍대에서 네일아트를 받았는데 토끼를..",
      img: "images/board/test123.png",
      commentCnt: 5,
      date: "2023.02.25",
    },
    {
      id: 2,
      title: "제목2",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/game123.png",
      commentCnt: 32,
      date: "2023.02.24",
    },
    {
      id: 3,
      title: "제목3",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/dog.png",
      commentCnt: 25,
      date: "2023.02.23",
    },
    {
      id: 4,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/adv.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
    {
      id: 5,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/cr.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
    {
      id: 6,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/game123.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
    {
      id: 7,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/adv.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
    {
      id: 8,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/dog.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
    {
      id: 9,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
      img: "images/board/cr.png",
      commentCnt: 105,
      date: "2023.02.22",
    },
  ];

  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} name="정보게시판" />
      <SideBar sideClose={sideClose} active={active} />
      <FeedList testData={testData1} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
      <Beacon />
    </div>
  );
};

export default InfoBoard;
