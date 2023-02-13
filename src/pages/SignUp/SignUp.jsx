import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [values, setValues] = useState({
    userId: "",
    passWord: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/saveUserInfo",
        JSON.stringify(values, null),
        {
          headers: { "Content-Type": `application/json` },
        }
      )
      .then((Response) => {
        console.log(Response.data);
      });
  };
  return <div>회원가입 페이지</div>;
};

export default SignUp;
