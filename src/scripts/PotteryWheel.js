let primaryKey = 1

export const makePottery = (shape,weight,height) => {
    const pot = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey++
    return pot
}

