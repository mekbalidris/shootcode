import { useState } from "react";


export default function Game(){

    const [ score, setScore ] = useState(0);
    const [ places, setPlaces ] = useState([0,0]);
    const [ languages, setLanguage ] = useState(["C", "Python", "java script"]);

    const handleClick = () => {

        setScore(prevScore => prevScore + 1);

        const newPlace = {
            top: Math.random() * 80 + "%", 
            left: Math.random() * 80 + "%",
            top1: Math.random() * 80 + "%", 
            left1: Math.random() * 80 + "%",
            top2: Math.random() * 80 + "%", 
            left2: Math.random() * 80 + "%"  
        };

        setPlaces([newPlace]);
    };

    const subjectIndex = Math.floor(Math.random() * languages.length);
    const selectedLanguage = languages[subjectIndex];

    return(
        <>
        <div className="scoreboard">
        <p>Score: {score}</p>
    </div>

    <div>
        Shoot the {selectedLanguage} block!!
    </div>

    {places.map((place, index) => {

        if( places == [0,0]){
            return(
            <div key={index} onClick={handleClick}>Click to play</div>    
        )}
        else{
        return (
            <div key={index} className="shooting-container">
                <div
                    className="shootingblock bg-blue-500"
                    style={{
                        position: "absolute",
                        top: place.top,
                        left: place.left,
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                >
                    print("Hello World!");
                </div>

                <div
                    className="shootingblock bg-blue-500"
                    style={{
                        position: "absolute",
                        top: place.top1,
                        left: place.left1,
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                >
                    console.log("Hello World!");
                </div>

                <div
                    className="shootingblock bg-blue-500"
                    style={{
                        position: "absolute",
                        top: place.top2,
                        left: place.left2,
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                >
                    printf("Hello World!");
                </div>
            </div>
        )};
    })}

        </>

)}