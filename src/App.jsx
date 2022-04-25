import { Card } from "./components/Card"
import { HitButton } from "./components/HitButton";
import { StickButton } from "./components/StickButton";
import './App.css';

function App() {
  return (
<>
    <div className="Dealer">
      <div className="namebox"
        >DEALER
      <div className="card">

      <Card />
      <br></br>
      <Card />
      </div>
      </div>
    </div>

<div className="Player">
<div className="namebox"
  >YOU
<div className="card">

<Card />
<br></br>
<Card />
</div>
<div> 
  <HitButton/><StickButton/>
  </div>
</div>

</div>
</>
    
  );
}

export default App;
