class QuoteList {
  constructor(name) {
    this.name = name
    this.phrases = []
    this.quotes = []
  }

  getPhrases() {
    return this.phrases
  }
  
  setPhrases(phrases) {
    this.phrases = phrases
  }
  
  getQuotes() {
    return this.quotes
  }

  setQuotes(quotes) {
    this.quotes = quotes
  }
}

export default QuoteList