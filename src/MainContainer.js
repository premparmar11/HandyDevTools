import {React, useEffect, useState} from "react";
import '../src/css/main-container.css'
import { removeDuplicates } from "./constants/buttons";

export const MainContainer = (props) => {

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const {action} = props;

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const outputTextHandler = (event) => {
        setOutputText(event.target.value);
    }

    const onProcessButton = () => {
        console.log("Process button")
        if (action === 'Remove Duplicates') {
            setOutputText(removeDuplicates(inputText, '\n'));
        } else if (action === 'Remove LineNumbers') {
            setOutputText()
        }
    }

    // Remove Old Data if button is clicked
    useEffect(() => {
        setInputText('');
        setOutputText('');
    }, [action]);

    console.log('Rendering Maincontainer');

    return (
        <div className="container">
        <textarea className="textarea" onChange={inputTextHandler} value={inputText} placeholder="Input here..."></textarea>
            <div className="middleArea">
                <button onClick={() => setInputText('')} >Reset Input</button>
                <button onClick={onProcessButton}>Process</button>
                <button onClick={() => setOutputText('')}>Reset Output</button>
            </div>
        <textarea className="textarea" onChange={outputTextHandler} value={outputText} placeholder="output"></textarea>
        </div>
    );
}