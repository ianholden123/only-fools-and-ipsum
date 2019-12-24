import DelBoy from './quotes/del-boy'
import Rodney from './quotes/rodney'
import Grandad from './quotes/grandad'
import UncleAlbert from './quotes/uncle-albert'
import Trigger from './quotes/trigger'
import Boycie from './quotes/boycie'

class IpsumGenerator {
  constructor(selectedCharacters = null) {
    this.selectedCharacters = [...selectedCharacters]
    this.quotes = this.get('getQuotes')
    this.phrases = this.get('getPhrases')

    this.minNumberOfPhrasesInParagraph = 5
    this.maxNumberOfPhrasesInParagraph = 15
    this.minNumberOfQuotesInParagraph = 2
    this.maxNumberOfQuotesInParagraph = 6
  }

  get(getterFunction) {
    let output = []
    this.selectedCharacters.forEach((character) => {
      switch(character) {
        case 'Del Boy':
          return output = [...output, ...new DelBoy()[getterFunction]()]
        case 'Rodney':
          return output = [...output, ...new Rodney()[getterFunction]()]
        case 'Grandad':
          return output = [...output, ...new Grandad()[getterFunction]()]
        case 'Uncle Albert':
          return output = [...output, ...new UncleAlbert()[getterFunction]()]
        case 'Boycie':
          return output = [...output, ...new Boycie()[getterFunction]()]
        case 'Trigger':
          return output = [...output, ...new Trigger()[getterFunction]()]
        default:
          return
      }
    })
    return output
  }

  generateParagraph() {
    const numberOfPhrases = Math.floor(Math.random() * this.minNumberOfPhrasesInParagraph + this.maxNumberOfPhrasesInParagraph)
    const numberOfQuotes = Math.floor(Math.random() * this.minNumberOfQuotesInParagraph + this.maxNumberOfQuotesInParagraph)
    let paragraph = []
    
    for (let i = 0; i < numberOfPhrases; i++) {
      const randomNumber = Math.floor(Math.random() * this.phrases.length)
      paragraph.push(this.phrases[randomNumber])
    }
    for (let i = 0; i < numberOfQuotes; i++) {
      const randomNumber = Math.floor(Math.random() * this.quotes.length)
      paragraph.push(this.quotes[randomNumber])
    }
    return '<p>' + this.shuffleArray(paragraph).join(' ') + '</p>'
  }

  generateParagraphs(numberOfParagraphs = 5) {
    let paragraphs = []
    for (let i = 0; i < numberOfParagraphs; i++) {
      paragraphs.push(this.generateParagraph())
    }
    return paragraphs.join('')
  }

  shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

export default IpsumGenerator