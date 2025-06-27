// import About from './About';
import './App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Textform from './Textform';
import Alert from './Alert'
function App() {
  const[mode,setmode]=useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  });}
  setTimeout(()=>{
    setAlert(null);
  },6000)

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#999999'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Lists" mode={mode} togglemode={togglemode}/>
     <Alert alert={alert}/>
    <div className="container my-4">
    <Textform heading ="Enter the text here"/>
     {/* <About/> */}
    
    </div>
       </>
  );
}

export default App;
