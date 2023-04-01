import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fcf5f5;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 10px 12px 1px gray;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 16px;
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  border: 1px solid gray;
  border-radius: 10px;
  transition: all 0.3s;
  &:focus{
    border: 1px solid teal;
    box-shadow: 0 0 10px teal;
  }
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  &:hover{
    
  }

  &:disabled{
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  let navigate = useNavigate();
  const [loginPage, setLoginPage] = useState(true)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setCPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error, message } = useSelector((state) => state.user)

  
  const handleLoginClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  const handleRegisterClick = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      alert("Passwords do not match!")
    }else{
      register(dispatch, { username, password })
    }
  }

  return (
    <Container>
      <ArrowBackIcon style={{ position: "absolute", top: "15px", left: "15px", fontSize: "30px", cursor: "pointer" }} onClick={() => navigate(-1)}/>
      {
        loginPage ?
          <Wrapper>
            <Title>Login</Title>
            <Form>
              <Input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <Button onClick={handleLoginClick} disabled={isFetching}>Login</Button>
              {error  && <Error>{message.message}</Error>}
              <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <Link onClick={() => setLoginPage(false)}>CREATE A NEW ACCOUNT</Link>
            </Form>
          </Wrapper>
        : 
        <Wrapper>

          <Title>Register</Title>
          <Form>
          <Input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <Input placeholder="Confirm password" type="password" value={confirmPassword} onChange={e => setCPassword(e.target.value)}/>
              <Button onClick={handleRegisterClick}>Register</Button>
              
              <Link onClick={() => setLoginPage(true)}>Already have an account?</Link>
          </Form>
        </Wrapper>
      }
    </Container>
  );
};

export default Login;
