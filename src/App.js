import Game from "./components/Game"
import './App.css';
import { useState } from "react";

const App = () => {
    const [gameId, setGameId] = useState(1)
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
}

export default App;