const mtg = require('mtgsdk')

class MTG {
  partialNameSearch(substring) {
    return mtg.card.where({name: substring})
  }
}

export default MTG
