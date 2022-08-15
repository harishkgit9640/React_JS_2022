import React, { useState } from 'react';

export default function TextForm(props) {


    // const handleCopyText = () => {
    //     select.text
    //     settext(newText);
    // }

    const handleClear = () => {
        let newText = " ";
        settext(newText);
    }
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase();
        settext(newText);
    }

    const handleOnChange = (event) => {
        settext(event.target.value);
    }

    // const [text, settext] = useState("Enter text here...");

    const [text, settext] = useState(" ");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" onChange={handleOnChange} rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpCase}>ToUpperCase</button>
                    <button className="btn btn-success ms-2" onClick={handleLoCase}>ToLowerCase</button>
                    <button className="btn btn-danger ms-2" onClick={handleClear}>ClearText</button>
                    {/* <button className="btn btn-secondary ms-2" onClick={handleCopyText}>CopyText</button> */}
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p> {text.split(" ").length} Words, {text.length} Character </p>
                <p> {0.008 * text.split(" ").length} Minutes to Read </p>
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Enter something into the preview it here.."} </p>
            </div>

        </>
    );

}


// TextForm.prototype = { heading: PropTypes.string };