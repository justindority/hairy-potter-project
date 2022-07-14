// Imports go first
const { makePottery } = require("./PotteryWheel.js") 
const { firePottery } = require("./Kiln.js") 
const { toSell } = require("./PotteryCatalog.js")
const { usePottery } = require("./PotteryCatalog.js")

// Make 5 pieces of pottery at the wheel
let mug = makePottery('cup',3,5)
let bowl = makePottery('bowl',5,3)
let plate = makePottery('plate',6,344)
let vase = makePottery('vase',4,5)
let dog = makePottery('dog',20,20)

// Fire each piece of pottery in the kiln
firePottery(mug,2200)
firePottery(bowl,4000)
firePottery(plate,3000)
firePottery(vase,9000)
firePottery(dog, 72)


// Determine which ones should be sold, and their price
toSell(mug)
toSell(bowl)
toSell(plate)
toSell(vase)
toSell(dog)
let sell = usePottery()
console.log(sell)


// Invoke the component function that renders the HTML list

