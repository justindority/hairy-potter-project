// Imports go first

import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { makePottery } from "./PotteryWheel.js"
import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery('Cup',3,5)
let bowl = makePottery('Bowl',5,3)
let plate = makePottery('Plate',6,344)
let vase = makePottery('Vase',4,5)
let dog = makePottery('Dog',20,20)

// Fire each piece of pottery in the kiln
mug = firePottery(mug,2200)
bowl = firePottery(bowl,600)
plate = firePottery(plate,500)
vase = firePottery(vase,9000)
dog = firePottery(dog, 72)


// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
bowl = toSellOrNotToSell(bowl)
plate = toSellOrNotToSell(plate)
vase = toSellOrNotToSell(vase)
dog = toSellOrNotToSell(dog)


// Invoke the component function that renders the HTML list
let sell = usePottery()
let html = PotteryList(sell)

const htmlElement = document.querySelector(".potteryList")
htmlElement.innerHTML = html