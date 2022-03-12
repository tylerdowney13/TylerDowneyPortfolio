import './overlay.scss';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';

const Overlay = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
        showCursor: false,
        strings: ["Software Developer"],
        backDelay: 5000,
        backSpeed: 60
        });
    }, []);

    return (
        <div className="overlay">
            <div className="nameContainer">
                <h1>Tyler Downey</h1>
                <div className="subtextContainer">
                    <h3><span ref={textRef} className="subtext"></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Overlay