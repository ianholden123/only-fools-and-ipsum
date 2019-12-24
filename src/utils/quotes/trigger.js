import QuoteList from './index'

class Trigger extends QuoteList {
  constructor() {
    super('Rodney')
    this.setPhrases(phrases)
    this.setQuotes(quotes)
  }
}

const phrases = [
  `Alright Dave?`
]

const quotes = [
  `If it's a girl they're calling her Sigourney after an actress, and if it's a boy they're naming him Rodney after Dave.`,
  `He died a couple of years before I was born.`
]

export default Trigger