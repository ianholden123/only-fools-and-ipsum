import React from 'react';
import './App.css';
import generateParagraphs from './utils/IpsumGenerator'

function App() {
  return (
    <>
      <h1>Only Fools and Ipsum</h1>
      <p className='site-description'>A lorem ipsum generator for fans of the British TV sitcom Only Fools and Horses</p>

      <div className='generatedParagraphs' dangerouslySetInnerHTML={{__html: generateParagraphs(5)}} />
    </>
  );
}

export default App;
