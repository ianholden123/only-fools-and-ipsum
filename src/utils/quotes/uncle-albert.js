import QuoteList from './index'

class UncleAlbert extends QuoteList {
  constructor() {
    super('Uncle Albert')
    this.setPhrases(phrases)
    this.setQuotes(quotes)
  }
}

const phrases = [
  `During the war...`
]

const quotes = [
  `I’m the only one in our family who ever went to sea. Well, my grandmother’s brother was safety officer on the Titanic, but we never talk about it.`,
  `They used to call me "Boomerang Trotter" cause I always came back.`,
  `I fought in the war, didn't I? I fought so that kids like Rodney could have freedom. And what do they do with their freedom? Anything they bloody like!`,
  `This flat is in a wonderful position, isn't it? I mean, fifteen minutes from the West End, it's fifteen minutes from the motorway... And fifteen minutes from the ground.`,
  `Last time I was over there, the only way you could tell the sexes, was the men spit further.`
]

export default UncleAlbert