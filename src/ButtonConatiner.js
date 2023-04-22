import {React, useState} from 'react';
import { buttons } from './constants/buttons';
import { MainContainer } from './MainContainer';

export const ButtonConatiner = () => {

    const [clickButton, setClickButton] = useState('Remove Duplicates');

    const clickHandler = (event) => {
        console.log(event);
        console.log(event.target.innerText);
        
        setClickButton(event.target.innerText);

    }

    return (
        <>
        {
            buttons.map((button, index) => <button key={index} onClick={clickHandler} type='button'>{button}</button>)
        }
        <h3>{clickButton}</h3>
        <MainContainer action={clickButton}/>
        </>
    );
}