import * as React from "react";

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ x: "Hemanshi Garnara", y: 1 });
        }, 5000);
    });
}

// eslint-disable-next-line react/prop-types
function ApiStimulation1({ stringsArray = [2,56,78,90,34] }) { // Default to an empty array
    const [name, setName] = React.useState("loading.........");
    const [id, setId] = React.useState("loading........");
    const [timeLeft, setTimeLeft] = React.useState(300); // Initial time in seconds (5 minutes)

    React.useEffect(() => {
        fetchUserData().then((abc) => {
            setName(abc.x);
            setId(abc.y);
        });
    }, []);

    // Countdown timer logic
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Convert seconds to MM:SS format
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div>
            <div>
                User: {name} <br />
                ID: {id} <br />
            </div>
            <div>
                Countdown Timer: {formatTime(timeLeft)}
            </div>
            <div>
                <h3>Strings as Unordered List:</h3>
                <ul>
                    {Array.isArray(stringsArray) && stringsArray.length > 0 ? (
                        stringsArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No items to display</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ApiStimulation1;