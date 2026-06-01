let countHome = 0

let sumEl = document.querySelector("#sum-el")

let plusOne = document.querySelector("#plus-one").addEventListener("click", function(){
    countHome += 1
    sumEl.textContent = countHome
})

let plustwo = document.querySelector("#plus-two").addEventListener("click", function(){
    countHome += 2
    sumEl.textContent = countHome
})
let plusthree = document.querySelector("#plus-three").addEventListener("click", function(){
    countHome += 3
    sumEl.textContent = countHome
})

//Guest Section
let sumgEl = document.querySelector("#sum-g-el")
let countG = 0
let plusGone = document.querySelector("#plus-g-one").addEventListener("click", function(){
countG += 1
sumgEl.textContent = countG
})

let plusGtwo = document.querySelector("#plus-g-two").addEventListener("click", function(){
    countG += 2
    sumgEl.textContent = countG
})

let plusGthree = document.querySelector("#plus-g-three").addEventListener("click", function(){
    countG += 3
    sumgEl.textContent = countG
})

const resetBtn = document.querySelector("#reset-btn").addEventListener("click", function(){
    sumEl.textContent = 0
    sumgEl.textContent = 0
    countG = 0
    countHome = 0
})


