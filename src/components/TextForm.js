import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to upper case","success");
  };
  const handleLowClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showAlert("converted to lower case","success");
  };
  const handleClearClick = () => {
    // console.log("upper case clicked" + text);
    let newtext="";
    settext(newtext);
    props.showAlert("text cleared","success");
  };
  const handleReverseClick = () => {
    // console.log("upper case clicked" + text);
    let newtext=text.split('').reverse().join('');
    settext(newtext);
    props.showAlert("reversing a string","success");
  };
  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard","success");
  }
  const handleExtra=()=>{
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("extra space removed","success");
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
      <h1 className="mb-4">{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white' ,color:props.mode==='dark'?'white':'#042743'}}
          id="mybox"
          rows="5"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1
       my-1
      " onClick={handleLowClick}>
        Convert to lower case
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1
      " onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1
      " onClick={handleReverseClick}>
        Reverse the word
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1
      " onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtra}>
        Remove extra space
      </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text  summary </h2>
        <p>
            {text.split (" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charcters
        </p>
        <p>
            {0.008*text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes Read
        </p>
        <h2>
            Preview
        </h2>
        <p>{text.length>0?text:"nothing to preview"}</p>
    </div>
    </>
  );
}
