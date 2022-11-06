console.log('js loaded')

let clickUpgrades = [
  {
    name: 'Pokemon',
    price: 15,
    quantity: 0,
    multiplier: 1
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

// function buyMorePokemon() {
//   let click = clickUpgrades.find(f => f.price == f.price)
//   if (total >= click.price) {
//     total -= click.price
//     click.price += 25
//     clickCynthia += 1
//     console.log('bought', click.name)
//     let clickPrice = document.getElementById('click-price')
//     clickPrice.innerText = click.price
//     let cynthiaClicker = document.getElementById('cynthia')
//     cynthiaClicker.innerText = clickCynthia
//   } else {
//     window.alert('Go fight Cynthia more!')
//   }
//   drawTotal()
// }

// function buyMoreTrainers() {
//   let auto = autoUpgrades.find(f => f.price == f.price)
//   if (total >= auto.price) {
//     total -= auto.price
//     console.log('Trainers have showed up to Help!')
//     autoCynthia += 20
//     auto.price += 250
//     let autoPrice = document.getElementById('auto-price')
//     autoPrice.innerText = auto.price
//     let cynthiaAuto = document.getElementById('auto')
//     cynthiaAuto.innerText = autoCynthia
//     // autoCynthia += clickCynthia * auto.multiplier
//   } else {
//     window.alert('Go fight Cynthia more!')
//   }
//   drawTotal()
// }

function buyClickUpgrade(name) {
  let click = clickUpgrades.find(c => c.name == name)
  if (total >= click.price) {
    total -= click.price
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
}

function buyAutoUpgrades(name) {
  let auto = autoUpgrades.find(a => a.name == name)
  if (total >= auto.price) {
    total -= auto.price
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
}


function runAuto() {
  if (autoCynthia >= 20) {
    console.log('trainers are helping')
    autoDollars()
  }
}

setInterval(runAuto, 3000)