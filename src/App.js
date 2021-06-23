import './App.css';
import Row from "./Row"
import Giphy from "./Giphy.png"
function App() {
  return (
    <div className="App">
      <img src={Giphy}/>
      <Row/>
    </div>
  );
}

export default App;
