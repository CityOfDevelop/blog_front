import Header from "../../containers/Header/Header";
import FeedList from "../../components/FeedList/FeedList";
import SideBar from "containers/SideBar/SideBar";
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
      title: "제목1",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
    },
    {
      id: 2,
      title: "제목2",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
    },
    {
      id: 3,
      title: "제목3",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
    },
    {
      id: 4,
      title: "제목4",
      cntn: "내용테스트내용테스트내용테스트내용테스트내용테스트",
    },
  ];

  return (
    <div className="dc_wrap">
      <Header sideOpen={sideOpen} />
      <SideBar sideClose={sideClose} active={active} />
      <FeedList testData={testData1} />
      {/* 나중에 리스트 데이터 생기면 조회한 리스트 데이터로 리스트 생성  */}
    </div>
  );
};

export default InfoBoard;
