import React, { useState } from "react";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/styles/Home.css';
import { Button } from "react-bootstrap";

function Home() {
    const [count,setCount] = useState(0);
    return (
        <main >
            <div className="d-flex flex-column align-items-center">
                <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="d-flex gap-2">
                <Button variant="secondary" onClick={() => setCount((count) => count + 2)}>
                    count is {count}
                </Button>
                <Button variant="secondary" onClick={() => setCount(0)}>Reset</Button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            </div>
        </main>
    );
}

export default Home;