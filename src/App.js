
import React, {useState} from "react";

console.log("Outside App components")

const App = () => {
  let [coins, setCoins] = useState(0)

  console.log("Inside App components")

   function inc(){
  
      if (coins<10)
      {
        setCoins(coins+1)
      }
      else{
        alert("You can't have more than 10 coins")
        
      }
   }

//    function dec(){
//    if (coins>0)
//    {
//      setCoins(coins-1)
//    }
//    else
//    {
//       alert("You can't have less than 0 coins")
//    }
//  }
 function reset(){
  setCoins(coins=0)
}
  return (
    <div>
      <h1>{coins}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={()=>coins>1? setCoins(coins-1): alert("You can't have less than 1 coins")}>Decrease</button>  {/* This is the same as the function dec() above */}
      <button onClick={reset}>Reset</button>
    </div>
  );
}





export default App;