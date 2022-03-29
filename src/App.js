// import "Your code here";
// import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const handleStopButton = () => {
    console.log("handle when stop is clicked")
  };
  const handleStartButton = () => {
    console.log("handle when start is clicked")
  };
  const handleResetButton = () => {
    console.log("handle when reset is clicked")
  };

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{19}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={handleStopButton}>
            Stop
          </button>
          <button
            className="button"
            // ref={"Your code here"}
            onClick={"handleStartButton"}
          >
            Start
          </button>
          <button className="button" onClick={"handleResetButton"}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
