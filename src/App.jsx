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
// import School from './router/school';
function App() {
  const allRoute = useRoutes([
    ...Main,
    ...Tools,
    ...ComponentsRouter,
    // ...School
  ]);

  return (
    <>
      <Header />
      <Container fluid="md">
        {allRoute}
      </Container>
      <Footer />
    </>
  )
}

export default App
