import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState(true)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setCPassword] = useState("")

  const registerUser = async (event) => {
    event.preventDefault()

    if(password === confirmPassword){
      const response = await fetch('http://127.0.0.1:4444/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          username,
          password,
        })
      })
  
      const data = response.json()
      console.log(data)
    } else{
      console.log("Passwords do not match")
    }

  }

  const loginUser = async (event) => {
    event.preventDefault()
    const response = await fetch('http://127.0.0.1:4444/api/auth/login', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = response.json()
    console.log(data)
  }

  return (
    <Container>
      <ArrowBackIcon style={{ position: "absolute", top: "15px", left: "15px", fontSize: "30px", cursor: "pointer" }} onClick={() => navigate(-1)}/>
      {
        login ?
      

          <Wrapper>
            <Title>Login</Title>
            <Form onSubmit={loginUser}>
              <Input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <Button>Login</Button>
              <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <Link onClick={() => setLogin(false)}>CREATE A NEW ACCOUNT</Link>
            </Form>
          </Wrapper>
        :
        <Wrapper>

          <Title>Register</Title>
          <Form onSubmit={registerUser}>
          <Input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <Input placeholder="Confirm password" type="password" value={confirmPassword} onChange={e => setCPassword(e.target.value)}/>
              <Button>Register</Button>
              <Link onClick={() => setLogin(true)}>Already have an account?</Link>
          </Form>
        </Wrapper>




      }


    </Container>
  );
};

export default Login;
