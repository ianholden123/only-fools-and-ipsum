import QuoteList from './index'

class UncleAlbert extends QuoteList {
  constructor() {
    super('Rodney')
    this.setPhrases(phrases)
    this.setQuotes(quotes)
  }
}

const phrases = [
  `During the war...`
]

const quotes = [
  `I’m the only one in our family who ever went to sea. Well, my grandmother’s brother was safety officer on the Titanic, but we never talk about it.`
]

export default UncleAlbert