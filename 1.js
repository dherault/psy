// 3 watches
// aniversaires
// preventiondes crises
// mise en place d'un système de surveillance
// modelisation de mon chat

// --> Graph de systemes

// Un cercle


function anniversary() {
  const list = []
  const halfLefdger = {}

  return {
    register(address, date, reason = 'birthday') {
      list.push({ address, date, reason })
    },
    save(address, amount) {
      if (!halfLefdger[address]) halfLefdger[address] = amount
      else halfLefdger[address] += amount
    },
    morning() {
      const today = Date.today()

      let results = []
      for (const item of list) {
        if (item.date === today) {
          results.push({ address: item.address, reason: item.reason, gift: halfLefdger[item.address] || 0 })
        }
      }

      return results
    },
    description: 'Hook `morning` to your morning routine. Use `register(address, date)` to register a new anniversary. Use `save(address, amount)` to save a gift for the anniversary.',
    example: "register('0x123', Date.today(), 'victory on strong person'))",
  }
}

export default anniversary
