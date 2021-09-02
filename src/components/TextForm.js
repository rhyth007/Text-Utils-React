import React ,{ useState } from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{

  
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","Success");
  }
  const handleLoClick = ()=>{

    console.log("LowerCase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to LowerCase!","Success");
  }
  const handleOnChange =(event)=>{
    
    setText(event.target.value);
  }
   const handleClear = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("All Text Cleared!","Success");

   }
   const handleCopy =()=>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("All Text Copied!","Success");
   }
  
  const [text, setText] = useState('');
 
    return (
      <> 
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
      <div className="mb-3">
    
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" style={{backgroundColor: props.mode=='dark'?'#5E5B5B ':'white',color: props.mode=='dark'?'white':'black'}}></textarea>
      </div>
      <div className="text-center">
      <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className="my-3">Your Text Summary</h2> 
      {(() => {
        if (text=="") {
          return (
            <>
            <p>Your Text Has {text.split(" ").length-1}  words and {text.length} characters.</p>
            <p>{0} Seconds Required to Read.</p>
           <h2>Preview</h2>
           <p>{text}</p>
           </>
          )
        } else {
          return (
            <>
            <p>Your Text Has {text.split(" ").length}  words and {text.length} characters.</p>
            <p>{0.004 *60* text.split(" ").length} Seconds Required to Read.</p>
           <h2>Preview</h2>
           <p>{text}</p>
          </>
          )
        }
      })()}
      
    </div>
  </>
    )
}

