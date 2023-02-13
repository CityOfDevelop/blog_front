import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import Header from "../../containers/Header/Header";
import SideBar from "containers/SideBar/SideBar";

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
                value={values.id}
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
