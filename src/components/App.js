import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allSushi, setAllSushi] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [fourSushi, setFourSushi] = useState([])
  const [counter, setCounter] = useState(4)
  const [moneyRemaining, setMoneyRemaining] = useState(100);

  useEffect( () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        setAllSushi(data);
        setFourSushi([data[0], data[1], data[2], data[3]])
      })
  }, [] )

  function eatSushi(sushiToEat){
    if (moneyRemaining >= sushiToEat.price){
      setEatenSushi([...eatenSushi, sushiToEat])
      setMoneyRemaining(moneyRemaining - sushiToEat.price)
    }

  }

  function moreSushi(){
    setCounter( counter + 4)
    setFourSushi([allSushi[counter + 0], allSushi[counter + 1], allSushi[counter + 2], allSushi[counter + 3]])
    console.log(counter)
  }
 

  return (
    <div className="app">
      <SushiContainer sushi={fourSushi} onEat={eatSushi} eaten={eatenSushi} onMoreBtn={moreSushi} />
      <Table eaten = {eatenSushi} money={moneyRemaining}/>
    </div>
  );
}

export default App;

/*

App
  |
  |--SushiContainer
  |   |
  |   |--Sushi
  |   |--More Button
  |
  |--Table


*/