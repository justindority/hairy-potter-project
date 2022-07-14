let primaryKey = 1

const makePottery = (shape,weight,height) => {
    const pot = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey++
    return pot
}

module.exports = { makePottery }