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
import { Button,Stack } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      {/* <Router>
          <Routes>
              <Route element={<Home />} path={'/'}></Route>
              <Route element={<About />} path='/about'></Route>
              <Route element={<List />} path='/list'>
                  <Route element={<Child1 />} path='/list/child1'></Route>
                  <Route element={<Child2 />} path='/list/child2'></Route>
              </Route>
          </Routes>
      </Router> */}
      <Container fluid>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 2)}>
            count is {count}
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Container>
      <Stack direction="horizontal" gap={3}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </div>
  )
}

export default App
