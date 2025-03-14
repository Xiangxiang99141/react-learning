import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,} from 'react-router-dom';
// import { createBrowserHistory } from "history";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container} from 'react-bootstrap';
import { Button,Stack,Form } from 'react-bootstrap';

import userlist from './assets/account.js';


function App() {
  const [isLogin,setLogin] = useState(false);
  console.log(isLogin);
  let content;
  if(isLogin){
    content = 'yes'
  }else{
    content = 'no'
  }
  // console.log(userlist);
  return (
    <Container>
      <Form>
        <input type="text" placeholder="username" id="name"></input>
        <input type="text" placeholder="passwoed" id="password"></input>
        <Button variant="primary" onClick={() => {
          for(let i=0;i<userlist.length;i++){
            if(document.getElementById('name').value == userlist[i].name && document.getElementById('password').value == userlist[i].password){
              setLogin(true);
              return;
            }
            alert("帳密錯誤");
          }
        }}>
          Submit
        </Button>
        <Button variant="primary" onClick={() => setLogin(false)}>
          Logout
        </Button>
      </Form>
      <div className="div">
          <p>login : {content}</p>
      </div>
    </Container>
  )
}

export default App
