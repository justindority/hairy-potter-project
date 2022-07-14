let sell = []

const toSell = (pot) => {
    if(pot.weight >= 6 || pot.cracked !==true){
        pot.price = 40
    } else if (pot.cracked !== true) {
        pot.price = 20
    }
    if (pot.cracked !== true) {
        sell.push(pot)
    }
}


const usePottery = () => {
    const newSell = sell.slice(0)
    return newSell
}
module.exports = { toSell }
module.exports = { usePottery }