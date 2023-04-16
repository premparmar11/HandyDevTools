import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';
import { TextArea } from './components/TextArea';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{display : 'flex', flexDirection: 'column', height: '100vh'}}>
    <h2 style={{textAlign : 'center',flex: 1}}>DevHandyTools</h2>
    
    <div style={{flex: 1}}>
      <Button name='Remove Duplicate'/>
    </div>

    <TextArea />
  </div>
);  