import { useState } from "react";
import { Board } from "./components";
import { Button, MsgComp } from "./components/Board/Board.styled";


function App() {
  const [boardSize, setBoardSize] = useState(3);
  const [value, setValue] = useState(boardSize);
  const setupBoardSize = () => {
    if (value < 3) {
      window.alert("set min 3 as value");
      return;
    }
    setBoardSize(value)
  }
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',gap:10 }}>
        <MsgComp>
          <input type="number" min={3} value={value} onChange={(e) => setValue(e.target.value)} />
          <Button onClick={() => setupBoardSize()}>save</Button>
        </MsgComp>
        <Board size={boardSize} />
      </div>
    </div>
  );
}

export default App;
