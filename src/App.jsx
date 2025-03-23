import React, { useState } from 'react'
import {
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Container } from 'react-bootstrap';
import Tools from './router/Tools';
import Main from './router/Main';
import ComponentsRouter from './router/ComponentsRouter';
function App() {
  const allRoute = useRoutes([
    ...Main,
    ...Tools,
    ...ComponentsRouter
  ]);

  return (
    <>
      <Header />
      <Container>
        {allRoute}
      </Container>
      <Footer />
    </>
  )
}

export default App
