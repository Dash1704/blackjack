import { Card } from "./components/Card"
import './App.css';

function App() {
  return (
<>
    <div className="Dealer">
      <div className="namebox"
        >DEALER
      <div className="App">

      <Card />
      <br></br>
      <Card />
      </div>
      </div>
    </div>

<div className="Dealer">
<div className="namebox"
  >YOU
<div className="App">

<Card />
<br></br>
<Card />
</div>
</div>
</div>
</>
    
  );
}

export default App;
