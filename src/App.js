import React, { useState, useEffect, useRef } from "react";
export default function App() {
  const [textValue, setTextValue] = useState("");
  const [totalWords, settotalWords] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(7);
  const [gameStarted, setgameStarted] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (timeRemaining > 0 && gameStarted) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0 && gameStarted) {
      endGame();
    } else if (gameStarted) {
    }
  }, [timeRemaining, gameStarted]);

  const calculateWordsCount = () => {
    const words = textValue.trim().split(" ");
    const filteredArray = words.filter((word) => word !== "");
    return filteredArray.length;
  };

  const endGame = () => {
    setgameStarted(false);
    settotalWords(calculateWordsCount());
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTextValue(value);
  };

  const startClock = (e) => {
    setgameStarted(true);
    setTimeRemaining(7);
    setTextValue("");
    settotalWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  return (
    <>
      <h1>How Fast do you type?</h1>
      <textarea
        disabled={!gameStarted}
        value={textValue}
        onChange={handleChange}
        ref={textRef}
      />
      <h4>Time Remaining : {timeRemaining} seconds</h4>
      <button disabled={gameStarted} onClick={startClock}>
        Start
      </button>
      <h1>Total Words {totalWords}</h1>
    </>
  );
}
