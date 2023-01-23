import { useState, useCallback } from 'react'
import './App.scss'
import DrawCanvasPoint from "./components/draw-canvas-point/DrawCanvasPoint";
import MouseTracker from "./components/mouse-tracker/MouseTracker";
import RandomNumberGenerator from './components/random-number-generator/RandomNumberGenerator'

function App() {
    const [randomNumber, setRandomNumber] = useState(0);

    const handleMouseClick = useCallback(() => {
        setRandomNumber(Math.floor(Math.random() * 100));
    }, []);

    return (
        <div className="container" onClick={handleMouseClick}>
            <h1>Track Mouse Position</h1>
            <MouseTracker/>
            <RandomNumberGenerator randomNumber={randomNumber}/>
            <DrawCanvasPoint/>
        </div>
    );
}

export default App

