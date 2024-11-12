import { useState } from "react";


export default function Game(){

    const [ score, setScore ] = useState(0);
    const [ places, setPlaces ] = useState(null);
    const [ languages, setLanguage ] = useState(["C", "Python", "JS"]);

    const handleClick = (language) => {

        

        const newPlace = {
            top: Math.random() * 80 + "%", 
            left: Math.random() * 80 + "%",
            top1: Math.random() * 80 + "%", 
            left1: Math.random() * 80 + "%",
            top2: Math.random() * 80 + "%", 
            left2: Math.random() * 80 + "%"  
        };

        if(places != null) {
            if(language == selectedLanguage)
            setScore(prevScore => prevScore + 1);
        }
        
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

    {!places ? (
        <div
            onClick={() => handleClick(null)} // Wrap in an arrow function
            style={{ cursor: "pointer", color: "blue" }}
        >
            Click to play
        </div>
    ) : (
        places.map((place, index) => (
            <div key={index} className="shooting-container">
                <div
                    className="shootingblock bg-red-500"
                    style={{
                        position: "absolute",
                        top: place.top,
                        left: place.left,
                        cursor: "pointer"
                    }}
                    onClick={() => handleClick("Python")} // Wrap in an arrow function
                >
                    print("Hello World!");
                </div>

                <div
                    className="shootingblock bg-blue-500"
                    style={{
                        position: "absolute",
                        top: place.top1,
                        left: place.left1,
                        cursor: "pointer"
                    }}
                    onClick={() => handleClick("JS")} // Wrap in an arrow function
                >
                    console.log("Hello World!");
                </div>

                <div
                    className="shootingblock bg-green-500"
                    style={{
                        position: "absolute",
                        top: place.top2,
                        left: place.left2,
                        cursor: "pointer"
                    }}
                    onClick={() => handleClick("C")} // Wrap in an arrow function
                >
                    printf("Hello World!");
                </div>
            </div>
        ))
    )}

        </>

)}