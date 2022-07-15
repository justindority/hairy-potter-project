let sell = []

export const toSellOrNotToSell = (pot) => {
    if(pot.weight >= 6) {
        pot.price = 40
    }
    if(pot.weight < 6){
        pot.price = 20
    }
    if (pot.cracked !== true) {
        sell.push(pot)
    }
    console.log(sell)
    return pot
}


export const usePottery = () => {
    const newSell = sell.slice()
    return newSell
}
