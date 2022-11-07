console.log('js loaded')

let clickUpgrades = [
  {
    name: 'Pokemon',
    price: 15,
    quantity: 0,
    multiplier: 1,
  },
  {
    name: 'Legendary',
    price: 250,
    quantity: 0,
    multiplier: 10
  }
]

let autoUpgrades = [
  {
    name: 'Trainer',
    price: 500,
    quantity: 0,
    multiplier: 50
  },
  {
    name: 'Red',
    price: 10000,
    quantity: 0,
    multiplier: 1000
  }
]

let clickCynthia = 1
let autoCynthia = 0
let total = 0

function addDollar() {
  // console.log('plus', 1)
  total += clickCynthia
  drawTotal()
}

function autoDollars() {
  console.log('making 20s')
  total += autoCynthia
  drawTotal()
}

function drawTotal() {
  let getTotal = document.getElementById('total')
  getTotal.innerText = total
}


function buyClickUpgrade(name) {
  let click = clickUpgrades.find(c => c.name == name)
  if (total >= click.price) {
    total -= click.price
    click.quantity++
    click.price += click.price
    clickCynthia += click.multiplier
    console.log(name)
    let clickPokemon = document.getElementById(name)
    clickPokemon.innerText = click.price
    let cynthiaClicker = document.getElementById('cynthia')
    cynthiaClicker.innerText = clickCynthia
  } else {
    window.alert('Go fight Cynthia more!')
  }
  drawTotal()
  populateClick()
  populateLegendary()
}


function populateClick() {
  let click = clickUpgrades.find(c => c.name == "Pokemon")
  let clicks = document.getElementById('clicks')
  clicks.innerText = click.quantity * click.multiplier
  let clicked = document.getElementById('clicked')
  clicked.innerText = click.quantity
}

function populateLegendary() {
  let click = clickUpgrades.find(c => c.name == "Legendary")
  let legendaries = document.getElementById('legendaries-clicked')
  legendaries.innerText = click.quantity
  let legendariesClicked = document.getElementById('legendaries')
  legendariesClicked.innerText = click.quantity * click.multiplier
}

function populateTrainer() {
  let click = autoUpgrades.find(c => c.name == "Trainer")
  let clicks = document.getElementById('trainers-pw')
  clicks.innerText = click.quantity * click.multiplier
  let clicked = document.getElementById('trainers')
  clicked.innerText = click.quantity
}

function populateRed() {
  let click = autoUpgrades.find(c => c.name == "Red")
  let legendaries = document.getElementById('red')
  legendaries.innerText = click.quantity
  let legendariesClicked = document.getElementById('red-pw')
  legendariesClicked.innerText = click.quantity * click.multiplier
}

function buyAutoUpgrades(name) {
  let auto = autoUpgrades.find(a => a.name == name)
  if (total >= auto.price) {
    total -= auto.price
    auto.quantity++
    auto.price += auto.price
    autoCynthia += auto.multiplier
    console.log(name)
    let autoTrainer = document.getElementById(name)
    autoTrainer.innerText = auto.price
    let cynthiaAuto = document.getElementById('auto')
    cynthiaAuto.innerText = autoCynthia
  } else {
    window.alert('Go fight Cynthia more!')
  }
  drawTotal()
  populateRed()
  populateTrainer()
}


function runAuto() {
  if (autoCynthia >= 20) {
    console.log('trainers are helping')
    autoDollars()
  }
}

setInterval(runAuto, 3000)