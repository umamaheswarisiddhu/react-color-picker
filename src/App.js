
import './App.css';
import { SketchPicker } from 'react-color';
import { useState } from 'react';

function App() {
  const [currentColor,setCurrentColor] = useState("#ff6")
  const handleOnChange = (color) => {
    setCurrentColor(color.hex)
  }
  const appStyle ={
    //color:"red",
    background:currentColor,
    height:"100vh",
    textAlign:"center",
  }
  return (
    
    <div className="App" style={appStyle}>
      
      
     <h1>React Colour Picker</h1>
     <SketchPicker
     color={currentColor}
     onChangeComplete={handleOnChange}
     />
     <h1>Here's its your color code:{currentColor}</h1>
     
    </div>
    
  );
}

export default App;
