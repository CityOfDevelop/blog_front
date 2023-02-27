import axios from "axios";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    userId: "",
    passWord: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur();
    axios
      .get("http://localhost:8080/login", {
        params: values,
      })
      .then((Response) => {
        console.log(Response);
        if (Response.status == "200" && Response.data != "") {
          localStorage.setItem("ACCESS_TOKEN", Response.data.token);

          // home화면으로 이동
          navigate("/");
        } else {
          setValues({ passWord: "" });
          alert("아이디or비번 확인해주세요");
        }
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
      <div id="wrap">
        <div id="login_wrap">
          <div id="login_header">
            <Link id="home_logo" to="/">
              devcity
            </Link>
            <p>
              회원이 아니신가요?
              <Link id="login_to_signup" to="/SignUp">
                회원가입 하기
              </Link>
            </p>
          </div>
          <div id="login_form_wrap">
            <form id="login_form">
              <div id="login_input_id">
                {/* <label>id</label> */}
                <input
                  className="login_input"
                  type="text"
                  name="userId"
                  value={values.userId}
                  placeholder="아이디"
                  onChange={handleChange}
                ></input>
              </div>

              <div id="login_input_pw">
                {/* <label>pw</label> */}
                <input
                  className="login_input"
                  name="passWord"
                  type="password"
                  value={values.passWord}
                  placeholder="비밀번호"
                  onChange={handleChange}
                ></input>
              </div>
              <div id="login_button_wrap">
                <button
                  className="login_button"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  로그인 하기
                </button>
                <div className="login_button_back"></div>
              </div>
            </form>
            <div id="login_sns_wrap">
              <p>SNS 간편 로그인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
