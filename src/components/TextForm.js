import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('')
    const handleConvertToUppercase = event => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleConvertToLowercase = event => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = event => {
        setText('');
    }
    const removeExtraSpaces = event => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    }

    const handleToChange = event => {
        setText(event.target.value)
    }
    const handleToCopy = event => {
        const text = document.getElementById('myTextBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' id='myTextBox' rows='8' onChange={handleToChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} ></textarea>
                </div>
                <button onClick={handleConvertToUppercase} className="btn btn-primary mx-1">Transform to uppercase</button>
                <button onClick={handleConvertToLowercase} className="btn btn-primary mx-1">Transform to lowercase</button>
                <button onClick={handleToCopy} className="btn btn-primary mx-1">Copy the text</button>
                <button onClick={removeExtraSpaces} className="btn btn-primary mx-1">Remove Extra Space</button>
                <button onClick={handleClearText} className="btn btn-primary mx-1">Clear the text</button>
            </div>
            <div className="container my-3 pb-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words, {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes take to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the text box above to preview it here'}</p>
            </div>
        </>
    );
};

export default TextForm;