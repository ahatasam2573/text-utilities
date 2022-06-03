import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('Enter your text here');

    const handleConvertToUppercase = event => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleToChange = event => {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id='myTextBox' rows='8' onChange={handleToChange} value={text} ></textarea>
            </div>
            <button onClick={handleConvertToUppercase} className="btn btn-primary">Transform to uppercase</button>
        </div>
    );
};

export default TextForm;