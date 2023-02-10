import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    userId: "",
    passWord: "",
    status: "off",
    nickName: "",
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

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="id"
          value={values.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nickName"
          placeholder="nickName"
          value={values.nickName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passWord"
          placeholder="password"
          value={values.passWord}
          onChange={handleChange}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
