let sell = []

export const toSellOrNotToSell = (pot) => {
    if(pot.weight >= 6 && pot.cracked !== true) {
        pot.price = 40
    }
    if (pot.cracked !== true) {
        pot.price = 20
        sell.push(pot)
        console.log(sell)
    }
    console.log(sell)
    return pot
}


export const usePottery = () => {
    const newSell = sell.slice()
    return newSell
}
