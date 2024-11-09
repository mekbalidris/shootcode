import { useState } from "react";


export default function Game(){

    const [ score, setScore ] = useState(0);
    const [ places, setPlaces ] = useState([0, 0]);

    const handleClick = () => {

        setScore(prevScore => prevScore + 1);

        const newPlace = {
            top: Math.random() * 80 + "%", 
            left: Math.random() * 80 + "%" 
        };

        setPlaces([newPlace]);
    };

    return(
        <>
        <div className="scoreboard">
        <p>Score: {score}</p>
    </div>

    {places.map((place, index) => (
        <div
            key={index}
            className="shootingblock bg-red-500"
            style={{
                position: "absolute", 
                top: place.top, 
                left: place.left, 
                cursor: "pointer"
            }}
            onClick={handleClick}
        >
            Print("Hello World!")
        </div>

    ))}
        </>
    )
}