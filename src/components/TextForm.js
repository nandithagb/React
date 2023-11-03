import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to upper case","sucess");
  };
  const handleLowClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showAlert("converted to lower case","sucess");
  };
  const handleClearClick = () => {
    // console.log("upper case clicked" + text);
    let newtext="";
    settext(newtext);
    props.showAlert("text cleared","sucess");
  };
  const handleReverseClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.split('').reverse().join('');
    settext(newtext);
    props.showAlert("reversing a string","sucess");
  };
  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","sucess");
  }
  const handleExtra=()=>{
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("extra space removed","sucess");
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    settext(event.target.value);
  };

  const [text, settext] = useState("Enter text here");
  // text="new text"//wrong way to change the state
  // settext=("new text") //correct way to change the state
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}}
          id="mybox"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to lower case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
        Reverse the word
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtra}>
        Remove extra space
      </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text  summary </h2>
        <p>
            {text.split (" ").length} words and {text.length} charcters
        </p>
        <p>
            {0.008*text.split (" ").length} Minutes Read
        </p>
        <h2>
            Preview
        </h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>
  );
}
