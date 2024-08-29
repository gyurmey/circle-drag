import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable';

function LeftBox({ X, Y, setX, setY, colorIs }) {
    const [xAxis, setxAxis] = useState(0);
    const [yAxis, setyAxis] = useState(0);

    useEffect(() => {
        if (X > 0 && X < 1050) {
            setxAxis(X);
        }
        if (Y > 0 && Y < 400) {
            setyAxis(Y);
        }
    }, [X, Y])

    const handleStart = () => {
        console.log("handleStart")
    }

    const handleDrag = (e) => {
        console.log("handleDrag", e, e.x, X)
        if (e.x > 0 && e.x < 950) {
            setxAxis(e.x);
            setX(e.x);
        }
        if (e.y > 0 && e.y < 350) {
            setY(e.y);
            setyAxis(e.y);
        }
    }

    const handleStop = () => {
        console.log("handleStop")
    }

    return (
        <Draggable
            // axis="y"
            handle=".handle"
            defaultPosition={{ x: X, y: Y }}
            position={{ x: xAxis, y: yAxis }}
            grid={[25, 25]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div>
                <div className="handle">
                    <span class="dot" style={{ backgroundColor: colorIs, borderColor: colorIs }}></span>
                </div>
            </div>
        </Draggable>
    )
}

export default LeftBox