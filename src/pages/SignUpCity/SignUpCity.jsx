import axios from "axios";
import { useState } from "react";
import "./SignUpCity.css";
import { Link, useNavigate } from "react-router-dom";

const SignUpCity = () => {
  const [values, setValues] = useState({
    userId: "",
    passWord: "",
    nickName: "",
    status: "off",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur();
    // 이 부분이랑 백부분 수정 필요 코드화
    axios
      .post(
        "http://localhost:8080/saveUserInfo",
        JSON.stringify(values, null),
        {
          headers: { "Content-Type": `application/json` },
        }
      )
      .then((Response) => {
        console.log(Response);
        if (
          Response.status == "200" &&
          Response.data == "정상 처리되었습니다."
        ) {
          alert(Response.data);
          // home화면으로 이동
          navigate("/login");
        } else {
          alert(Response.data);
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
        <div id="signup_wrap">
          <div id="signup_header">
            <Link id="home_logo" to="/">
              devcity
            </Link>
            <p>
              이미 회원이신가요?
              <Link id="signup_to_signup" to="/login">
                로그인 하기
              </Link>
            </p>
          </div>
          <div id="signup_form_wrap">
            <form id="signup_form">
              <div id="signup_input_id">
                {/* <label>id</label> */}
                <input
                  className="signup_input"
                  type="text"
                  name="userId"
                  value={values.userId}
                  placeholder="아이디"
                  onChange={handleChange}
                ></input>
              </div>

              <div id="signup_input_pw">
                {/* <label>pw</label> */}
                <input
                  className="signup_input"
                  name="nickName"
                  type="text"
                  value={values.nickName}
                  placeholder="닉네임"
                  onChange={handleChange}
                ></input>
              </div>

              <div id="signup_input_pw">
                {/* <label>pw</label> */}
                <input
                  className="signup_input"
                  name="passWord"
                  type="password"
                  value={values.passWord}
                  placeholder="비밀번호"
                  onChange={handleChange}
                ></input>
              </div>

              <div id="signup_input_pw_check">
                {/* <label>pw</label> */}
                <input
                  className="signup_input"
                  name="checkPassWord"
                  type="password"
                  placeholder="비밀번호 확인"
                ></input>
              </div>

              <div id="signup_button_wrap">
                <button
                  className="signup_button"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  가입하기
                </button>
                <div className="signup_button_back"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCity;
