console.log('js loaded')

let clickUpgrades = [
  {
    name: 'Amulet Coin',
    price: 75,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'Shiny Charm',
    price: 250,
    quantity: 0,
    multiplier: 7
  }
]

let autoUpgrades = [
  {
    name: 'More Pokemon',
    price: 500,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'Legendary',
    price: 15000,
    quantity: 0,
    multiplier: 1000
  }
]

let clickCynthia = 1
let shinyCynthia = 7
let autoCynthia = 0
let autoLegendary = 1000
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

function buyMorePokemon() {
  let click = clickUpgrades.find(f => f.price == f.price)
  if (total >= click.price) {
    total -= click.price
    click.price += 25
    clickCynthia += 2
    console.log('bought', click.name)
    let clickPrice = document.getElementById('click-price')
    clickPrice.innerText = click.price
    let cynthiaClicker = document.getElementById('cynthia')
    cynthiaClicker.innerText = clickCynthia
  } else {
    window.alert('Go fight Cynthia more!')
  }
  drawTotal()
}

function buyMoreTrainers() {
  let auto = autoUpgrades.find(f => f.price == f.price)
  if (total >= auto.price) {
    total -= auto.price
    console.log('Trainers have showed up to Help!')
    autoCynthia += 20
    auto.price += 250
    let autoPrice = document.getElementById('auto-price')
    autoPrice.innerText = auto.price
    let cynthiaAuto = document.getElementById('auto')
    cynthiaAuto.innerText = autoCynthia
    // autoCynthia += clickCynthia * auto.multiplier
  } else {
    window.alert('Go fight Cynthia more!')
  }
  drawTotal()
}

function runAuto() {
  if (autoCynthia >= 20) {
    console.log('trainers are helping')
    autoDollars()

  }
}

setInterval(runAuto, 5000)