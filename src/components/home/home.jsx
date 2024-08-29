import React, { useState } from 'react'
import LeftBox from '../leftBox';
import RightBox from '../rightBox/rightBox';
import './home.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

function Home() {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [color, setColor] = useState("red");
    const { width, height } = useWindowSize()
    const [
        show,
        setShow
    ] = useState(false);

    return (
        <div className='main'>
            <Confetti
                recycle={show} numberOfPieces={500}
                width={width}
                height={height}
            />
            <span className='left'>
                <span className='leftImage' />
                <LeftBox X={X} Y={Y} setX={setX} setY={setY} colorIs={color} />
            </span>

            <span className='right'>
                <RightBox X={X} Y={Y} setX={setX} setY={setY} setColor={setColor} setShow={setShow} color={color} />
            </span>

        </div>
    )
}

export default Home
