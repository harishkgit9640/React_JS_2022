import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase();
        settext(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        settext(event.target.value);
    }

    const [text, settext] = useState("Enter text here...");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} rows="8" value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCase}>ToUpperCase</button>
            <button className="btn btn-success ms-2" onClick={handleLoCase}>ToLowerCase</button>
        </div>
    );

}


// TextForm.prototype = { heading: PropTypes.string };