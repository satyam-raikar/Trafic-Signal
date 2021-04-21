import React, { useState, useEffect } from 'react'

import './App.css';


const lightCountdown = [1000, 2000, 3000];

function App() {

  const [colorIndex, setcolorIndex] = useState(0);

  useEffect(() => {
    console.log("use Effect")
    setTimeout(() => {
      let colorIndex2 = (colorIndex + 1) % 3;
      setcolorIndex(colorIndex2)
    }, lightCountdown[colorIndex]);




  }, [colorIndex])

  //console.log(lightCountdown[colorIndex])

  // const incr = ()=> {
  //   let colorIndex2 = (colorIndex + 1) % 3;
  //   setcolorIndex( colorIndex2)
  //   //console.log(colorIndex  , colorIndex2);
  // }

  return (
    <div className="App">

      <div className="signal">
        {/* <button type="button" onClick={incr}></button> */}
        <Light className="red light" color="red" active={colorIndex === 2 } />
        <Light className="orange light" color="orange" active={colorIndex === 1 } />
        <Light className="green light" color="green" active={colorIndex === 0 } />
      </div>

    </div>

  );

}


const Light = ({ color, active }) => (
  <div
    className={color}
    style={{ backgroundColor: color, opacity: active ? 1 : 0.2 }}
  />
)

export default App;




// const [colorIndex, setColorIndex] = useState(0);


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setColorIndex((colorIndex + 1) % 3);
//     }, lightDuration[colorIndex]);
//     console.log(timer)
//     console.log(colorIndex)
//     return () => {
//       clearTimeout(timer);
//     }

//   },[colorIndex])






// const Light = ({ color, active }) => (
//   <div 
//       className="light"
//       style={{ backgroundColor:color , opacity: active ? 1 : 0.2}}
//   />
// )