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
    price: 1000,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'Legendary',
    price: 15000,
    quantity: 0,
    multiplier: 500
  }
]

let clickCynthia = 1
let total = 0

function addDollar() {
  // console.log('plus', 1)
  total += clickCynthia
  drawTotal()
}

function drawTotal() {
  let getTotal = document.getElementById('total')
  getTotal.innerText = total
}

function buyAmulet() {
  let click = clickUpgrades.find(f => f.price == 75)
  if (total >= click.price) {
    total -= 75
    clickCynthia++
    console.log('bought', click.name)
  } else {
    window.alert('Go fight Cynthia more!')
  }
  drawTotal()
}

function buyMorePokemon() {
  console.log('bought More Pokemon')
}