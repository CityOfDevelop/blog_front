import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';


const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
      // 버튼만 누르면 리프레시 되는것을 막아줌
      event.preventDefault();

      console.log('Email', Email);
      console.log('Password', Password);
      
      let body = {
          email: Email,
          password: Password,
      }

      dispatch(loginUser(body));
  }

  return
  <div style={{ 
    display: 'flex', justifyContent: 'center', alignItems: 'center', 
    width: '100%', height: '100vh'
    }}>
    <form style={{ display: 'flex', flexDirection: 'column'}}
        onSubmit={onSubmitHandler}
    >
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler}/>
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler}/>
        <br />
        <button formAction=''>
            Login
        </button>
    </form>
</div>
};

export default Login;
