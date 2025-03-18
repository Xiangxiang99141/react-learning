import React, { useState } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,} from 'react-router-dom';
// import { createBrowserHistory } from "history";
import Header from './pages/header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import { Container } from 'react-bootstrap';
// import './App.css';

function App() {

  return (
    <>
      <Header />
      <Container>
        <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<About />} path='/about'></Route>
            {/* <Route element={<List />} path='/list'>
                <Route element={<Child1 />} path='/list/child1'></Route>
                <Route element={<Child2 />} path='/list/child2'></Route>
            </Route> */}
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
