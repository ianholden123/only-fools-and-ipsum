import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import IpsumGenerator from './utils/IpsumGenerator'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.characters = ['Del Boy', 'Rodney', 'Grandad', 'Uncle Albert', 'Boycie', 'Trigger']
    this.generator = new IpsumGenerator(this.characters)

    this.state = {
      numberOfParagraphs: 5,
      generatedContent: null
    }

    this.handleGenerate = this.handleGenerate.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress({key}) {
    key === 'Enter' && this.handleGenerate()
  }
  
  handleNumberChange(e) {
    this.setState({numberOfParagraphs: e.target.value})
  }

  handleGenerate() {
    const {numberOfParagraphs: nop} = this.state
    if (nop <= 100 && nop >= 1) {
      this.setState({ generatedContent: this.generator.generateParagraphs(this.state.numberOfParagraphs)})
    } else {
      alert('Please enter a sensible value between 1 and 100')
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Only Fools and Ipsum | Custom Lorem Ipsum Generator</title>
          <meta name="description" content="A lorem ipsum generator for fans of the British TV sitcom Only Fools and Horses" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Helmet>
        <header>
          <div className='innerHeader'>
            <div className='logoWrapper'>
              <h1>
                <span className='line1'>Only Fools</span>
                <span className='line2'>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                  <span className='and'> and </span>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                  <span role="presentation" aria-hidden='true' className='star'>&#9733;</span>
                </span>
                <span className='line3'>Ipsum</span>
              </h1>
            </div>
            <p className='site-description'>A lorem ipsum generator for fans of the British TV sitcom Only Fools and Horses</p>
          
            <p>Enter the number of paragraphs that you would like to generate</p>
            <input type='number' defaultValue='5' onChange={this.handleNumberChange} onKeyPress={this.handleKeyPress} autoFocus />
            <button onClick={this.handleGenerate}>Generate</button>
          </div>
        </header>
  
        <div className={`generatedParagraphs`}>
          <div className={this.state.generatedContent ? ' visible' : ''} dangerouslySetInnerHTML={{__html: this.state.generatedContent}} />
        </div>

        <footer>
          <p><strong>Only Fools and Ipsum - Ipsum Generator</strong> was created by <a href='https://www.ianholden.co.uk'>Ian Holden</a></p>
        </footer>
      </>
    );
  }
}

export default App;
