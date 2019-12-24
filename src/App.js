import React from 'react';
import './App.css';
import IpsumGenerator from './utils/IpsumGenerator'

function App() {
  const characters = ['Del Boy', 'Rodney', 'Grandad', 'Uncle Albert', 'Boycie', 'Trigger']
  const generator = new IpsumGenerator(characters)

  return (
    <>
      <h1>Only Fools and Ipsum</h1>
      <p className='site-description'>A lorem ipsum generator for fans of the British TV sitcom Only Fools and Horses</p>

      <div className='generatedParagraphs' dangerouslySetInnerHTML={{__html: generator.generateParagraphs(5)}} />
    </>
  );
}

export default App;
