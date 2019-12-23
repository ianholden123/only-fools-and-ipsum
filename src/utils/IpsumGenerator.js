import phrases from './quotes'

const minNumberOfPhrasesInParagraph = 10
const maxNumberOfPhrasesInParagraph = 30

export const generateParagraph = function() {
  const numberOfWords = Math.floor(Math.random() * minNumberOfPhrasesInParagraph + maxNumberOfPhrasesInParagraph)
  let paragraph = []
  
  for (let i = 0; i < numberOfWords; i++) {
    const randomNumber = Math.floor(Math.random() * phrases.length)
    paragraph.push(phrases[randomNumber])
  }
  return '<p>' + paragraph.join('. ') + '.</p>'
}

const generateParagraphs = function(numberOfParagraphs) {
  let paragraphs = []
  for (let i = 0; i < numberOfParagraphs; i++) {
    paragraphs.push(generateParagraph())
  }
  return paragraphs.join('')
}

export default generateParagraphs