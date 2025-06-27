
import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    
    const handleonchange =(event)=>{
        setText(event.target.value)
console.log("uppercase was clicked")
}
const handleonclick =()=>{
        // setText("your uppercase has been clicked")
        // console.log("on")
        let newtext=text.toUpperCase()
        setText(newtext)
      // props.showAlert("converted to uppercase")
    }
        
const handleloclick =()=>{
        // setText("your uppercase has been clicked")
        // console.log("on")
        let newstext=text.toLowerCase()
        setText(newstext)
    }
    const handle=()=>{
      let netext=''
      setText(netext)
    }
    const handleoncopy=()=>{
        console.log("copy");
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
  return (
    <div className="container"style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    
<div className="my-3">
<h1>{props.heading}</h1>
  
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#333' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'}}onChange={handleonchange}id="mybox" rows="8" >
  </textarea>
<button className="btn btn-primary mx-3 my-3" onClick={handleonclick}>convert to uppercase</button>
<button className="btn btn-secondary mx-3" onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-success mx-3" onClick={handle}>clear text</button>
<button className="btn btn-warning mx-3" onClick={handleoncopy}>copy text</button>
</div>
<div className="container my-12" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <h1>Your text area</h1>
    <p>{text.split(" ").length } words and {text.length} characters </p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Preview here"}</p>
</div>
    </div>
    
  )
}