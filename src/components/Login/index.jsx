import React, { useRef } from "react";
import {GlobalStyleLogin, Wrapper} from "./styled-index"
import { useDispatch } from "react-redux";
import { adminAuth } from "../../redux/login/authSlice";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
const LoginComponent = () => {
  const EmailUserf = useRef();
  const dispatch = useDispatch();
  const passwordUsref = useRef();
  const admin = useSelector(state => state)
  console.log(admin);
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = EmailUserf.current.value 
    const password = passwordUsref.current.value
    dispatch(adminAuth({email,password}))
  }
  if (admin.admin?.Success == true) {
    navigate('/dashboard')
    window.location.reload()
  }
  return (
    <>
    <GlobalStyleLogin/>
       <Wrapper>
    <div className="login-box">
  <h2>Авторизоваться</h2>
  <form onSubmit={HandleSubmit}>
    <div className="user-box">
      <input ref={EmailUserf} type="email" name="" required/>
      <label>Имя пользователя</label>
    </div>
    <div className="user-box">
      <input ref={passwordUsref} type="password" name="" required/>
      <label>Пароль</label>
    </div>
    {admin.admin?.Error == true ? <p style={{color : "red"}}>Электронная почта или пароль неверны</p> : null}
    <button type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Вход
    </button>
  </form>
</div>
    </Wrapper> 
    </>
  );
};

export default LoginComponent;
