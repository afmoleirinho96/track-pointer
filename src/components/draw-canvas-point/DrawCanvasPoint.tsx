import { TextField, Tooltip, IconButton } from '@mui/material';
import { useRef, useCallback, useState } from 'react'
import './DrawCanvasPoint.scss'
import InfoIcon from "@mui/icons-material/Info";

function DrawCanvasPoint() {
    const canvasReference = useRef<HTMLCanvasElement>(null);
    const [inputX, setInputX] = useState('');
    const [inputY, setInputY] = useState('');

    const drawPoint = useCallback((x: number, y: number) => {
        const canvasContext = canvasReference?.current?.getContext('2d');

        if (!canvasContext) {
            return;
        }

        canvasContext.beginPath();
        canvasContext.arc(x / 100 * window.innerWidth, y / 100 * window.innerHeight, 5, 0, 2 * Math.PI);
        canvasContext.fill();
    }, []);

    const refreshPoints = useCallback(() => {
        const canvasContext = canvasReference?.current?.getContext('2d');

        if (!canvasReference?.current || !canvasContext) {
            return;
        }

        canvasContext.clearRect(0, 0, canvasReference.current?.width, canvasReference.current.height);
    },[]);

    return (
        <div className="coordinates-container">
            <label className="title">
                Generate Point in Screen:
                <Tooltip title="Provide coordinates to generate a point in any place of the screen.">
                    <IconButton>
                        <InfoIcon color="primary"/>
                    </IconButton>
                </Tooltip>
            </label>
            <div className="coordinates">
                <TextField label="Coordinate X (%)" variant="outlined"
                           value={inputX}
                           placeholder={'0-100'}
                           onChange={(e) => setInputX(e.target.value)}/>

                <TextField label="Coordinate Y (%)" variant="outlined"
                           value={inputY}
                           placeholder={'0-100'}
                           onChange={(e) => setInputY(e.target.value)}/>

                <button disabled={!inputX || !inputY} onClick={() => drawPoint(Number(inputX), Number(inputY))}>
                    Draw Point
                </button>
                <button onClick={refreshPoints}>
                    Refresh Points
                </button>

                <canvas
                    className="coordinates__canvas"
                    ref={canvasReference}
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            </div>
        </div>
    );
}

export default DrawCanvasPoint;
