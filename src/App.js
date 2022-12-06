
import React, {useState} from "react";

console.log("Outside App components")

const App = () => {
  let [coins, setCoins] = useState(0)

  console.log("Inside App components")

   function inc(){
      //  coins  = coins+1
      setCoins(coins+1)
   }

  return (
    <div>
      <h1>{coins}</h1>
      <button onClick={inc}>Increase</button>
    </div>
  );
}





export default App;