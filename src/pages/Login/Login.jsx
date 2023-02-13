import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import Header from "../../containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState(false);

  const sideOpen = () => {
    setActive(true); // sidebar의 활성화 false
  };

  const sideClose = () => {
    setActive(false); // sidebar의 활성화 false
  };

  const [values, setValues] = useState({
    userId: "",
    passWord: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/login", {
        params: values,
      })
      .then((Response) => {
        console.log(Response);
        if (Response.status == "200" && Response.data != "") {
          navigate("/");
        } else {
          setValues({ userId: "", passWord: "" });
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
        <Header sideOpen={sideOpen} />
        <SideBar sideClose={sideClose} active={active} />

        <div id="loginWrap">
          <Form id="loginForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="id"
                name="userId"
                value={values.userId}
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="passWord"
                type="password"
                placeholder="Password"
                value={values.passWord}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="login_btn"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
