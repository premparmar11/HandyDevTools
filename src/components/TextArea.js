import React, {useState} from "react";

export const TextArea = () => {

    let [input, setInput] = useState('');
    let [output, setOutput] = useState('');

    const onChangeHandler = (event) => {
        setInput(event.target.value);
        const rows = event.target.value.split("\n");
        const uniqueRows = [...new Set(rows)];
        const uniqueText = uniqueRows.join("\n");
        setOutput(uniqueText);
    }

    return (
        <div style={{display : 'flex', height: '100%'}}>
            <textarea style={{width: '90%', height: '90%',margin: '10px', resize: 'none'}} value={input} onChange={onChangeHandler} placeholder='Please input here'></textarea>
            <textarea style={{width: '90%', height: '90%',margin: '10px', resize: 'none'}} value={output} placeholder='Result' ></textarea>
        </div>
    );
}