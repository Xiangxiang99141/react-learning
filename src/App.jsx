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

const Home = () => {
  return (
      <div>
          <ul>
              <li>HOME</li>
              <li>
                  <Link to='/about'>About</Link>
              </li>
              <li>
                  <Link to='/list'>List</Link>
              </li>
          </ul>
      </div>
  )
}
const About = () => {
  const navigate = useNavigate()
  const onClick = () => {
      navigate('/')
  }
  return (
      <div>
          <button onClick={onClick}>BACK</button>
      </div>
  )
}

const Child1 = () => {
  return <div>Child1</div>
}
const Child2 = () => {
  return <div>Child2</div>
}

const List = () => {
  return (
      <div>
          list 頁面
          <Menus1 />
          <Container />
      </div>
  )
}
const Container = () => {
  return (
      <div>
          <Outlet />
      </div>
  )
}
const Menus1 = () => {
  return (
      <div>
          <Link to={'/list/child1'}> one </Link>
          <Link to={'/list/child2'}> two </Link>
      </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
          <Routes>
              <Route element={<Home />} path={'/'}></Route>
              <Route element={<About />} path='/about'></Route>
              <Route element={<List />} path='/list'>
                  <Route element={<Child1 />} path='/list/child1'></Route>
                  <Route element={<Child2 />} path='/list/child2'></Route>
              </Route>
          </Routes>
      </Router>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
