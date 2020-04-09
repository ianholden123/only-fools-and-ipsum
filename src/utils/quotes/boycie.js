import QuoteList from './index'

class Boycie extends QuoteList {
  constructor() {
    super('Boycie')
    this.setPhrases(phrases)
    this.setQuotes(quotes)
  }
}

const phrases = [
  `Marlene!`,
  `For gawd sake Marlene!`
]

const quotes = [
  `I have never been so insulted in my life, do you know how much I've spent on that garden? You think I'm going to dig a hole in it?`,
  `I have heard rumours Mickey Mouse wears a Rodney Trotter wristwatch.`,
  `I'd like to get away as quick as possible. I've left my Mercedes parked downstairs and you know what they're like on this estate. They'd have the wheels off a Jumbo if it flew too low.`,
  `I might be able to con people into buying my cars, I might be able to convince them that you conceived and gave birth in seven days flat, but how the hell am I going to persuade them my grandad was Louis Armstrong?`,
  `Have you ever spent an evening in Trigger's flat!? It's like holding a seance with Mr. Bean.`,
  `This piece of paper. It's not a log book for a Cortina is it?`
]

export default Boycie