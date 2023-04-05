import React,{ useState } from "react"

export default function TextForm() {
    const [text,setText] =useState("Enter your text here")
    const handleOnChange=(event)=>{
        let newText= event.target.value;
        setText(newText)
    }
    
    const handleOnClick= () =>{
        let newText=text.toUpperCase()
        setText(newText);
        
    }

    return (
        
       
        <div>

        <div className='mb-3'>
        <textarea class="form-control"  onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
      
        </div> 
           <button onClick={handleOnClick} className="btn-btn-primary">change</button>
        </div>
        
    )

}
