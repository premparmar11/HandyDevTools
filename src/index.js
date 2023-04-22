import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ButtonConatiner} from './ButtonConatiner.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div style={{textAlign : "center"}}>
      <h2>DevHandyTools</h2>
    </div>
    <ButtonConatiner />
  </>
);