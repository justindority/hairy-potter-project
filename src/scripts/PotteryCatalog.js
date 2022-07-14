let sell = []

const toSellOrNotToSell = (pot) => {
    if(pot.weight >= 6 && pot.cracked !== true) {
        pot.price = 40
    } else if (pot.cracked !== true) {
        pot.price = 20
        sell.push(pot)
    }
    return pot
}


const usePottery = () => {
    const newSell = sell.slice(0)
    return newSell
}
module.exports = { toSellOrNotToSell }
module.exports = { usePottery }