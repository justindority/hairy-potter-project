// Imports go first
const { makePottery } = require("./PotteryWheel.js") 
const { firePottery } = require("./Kiln.js") 
const { toSellOrNotToSell } = require("./PotteryCatalog.js")
const { usePottery } = require("./PotteryCatalog.js")

// Make 5 pieces of pottery at the wheel
let mug = makePottery('cup',3,5)
let bowl = makePottery('bowl',5,3)
let plate = makePottery('plate',6,344)
let vase = makePottery('vase',4,5)
let dog = makePottery('dog',20,20)

// Fire each piece of pottery in the kiln
mug = firePottery(mug,2200)
bowl = firePottery(bowl,4000)
plate = firePottery(plate,3000)
vase = firePottery(vase,9000)
dog = firePottery(dog, 72)


// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
bowl = toSellOrNotToSell(bowl)
plate = toSellOrNotToSell(plate)
vase = toSellOrNotToSell(vase)
dog = toSellOrNotToSell(dog)
let sell = usePottery()
console.log(sell)


// Invoke the component function that renders the HTML list

