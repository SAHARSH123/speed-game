import React from "react";
import { useWord } from "./hooks/useWord";
export default function App() {
  const {
    textValue,
    gameStarted,
    textRef,
    handleChange,
    timeRemaining,
    startClock,
    totalWords,
  } = useWord();
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
