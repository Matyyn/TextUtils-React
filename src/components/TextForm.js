import React, { useState } from "react";

export default function TextForm(props) {
  // using hooks and States here (text is the current useState value and the setText is a function used to change the text)
  const [text, setText] = useState("");
//   text = "new text"; //wrong way to change the state
//   setText ("Enter the text below") //correct way to change the state

 // function for the button clicks
 //to convert to upper case
    const handleupClick = ()=>
    {
        // console.log('button was clicked '+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("The text is changed to upper case","success")
    }
// to convert lower case    
    const handledownClick = ()=>
    {
        // console.log('button was clicked '+text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("The text is changed to lower case","success")
    }
  // to copy text
    const copyText = ()=>
    {
      var copyText = document.getElementById("mybox");
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
       /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    
      props.showAlert("The text is copied to clipboard","success")
    }
  // to combine the words
    const wordCombiner = ()=>
    {
        // console.log('button was clicked '+text);
        let newtext =text.replace(/ /g, '');
        setText(newtext)
        props.showAlert("Words are combined together","success")
    }
    // to clear the text
    const clearText = ()=>
    {
        // console.log('button was clicked '+text);
        let newtext = "";
        setText(newtext)
        props.showAlert("The text is cleared","success")
    }
    // on change of the data
    const handleOnChange = (event)=>
    {
        // alert('on change');
        setText(event.target.value)
    }


  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
  
      <h1>{props.heading}</h1>
      {/* using states here */}
      {/* here double braces in style means js objects */}
      <textarea
        className="form-control"
        id="mybox"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'light':'black'}}
        ></textarea>
      <button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handledownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" onClick={copyText} >Copy Text</button>
      <button className="btn btn-success mx-2 my-2" onClick={wordCombiner}>Word Combiner</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 *text.split(" ").length } Minutes read</p>
      <h2>Preview: </h2>
      <p>{text.length>0?text:"Enter something to be Previewed here..."}</p>
    </div>
    </>
  );
}
