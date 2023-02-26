import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import { RiKakaoTalkFill, RiBuilding2Fill } from "react-icons/ri";

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

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div id="wrap">
        <div id="signup_wrap">
          <div id="signup_header">
            <Link id="home_logo" to="/">
              devcity
            </Link>
            <p>
              이미 회원이신가요?
              <Link id="signup_to_login" to="/Login">
                로그인 하기
              </Link>
            </p>
          </div>
          <div id="signup_divs_wrap">
            <div id="signup_kakao">
              <button id="btn_kakao" className="signup_button">
                <RiKakaoTalkFill className="bs_icon" />
                <span>카카오로 시작하기</span>
              </button>
            </div>

            <div id="signup_devcity">
              <button id="btn_devcity" className="signup_button">
                <RiBuilding2Fill className="bs_icon" />
                <span>ID & PW 가입하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
