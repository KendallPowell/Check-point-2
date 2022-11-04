console.log('js loaded')

let clickUpgrades = [
  {
    name: 'Amulet Coin',
    price: 75,
    quantity: 0,
    multiplier: 1
  }
]

let autoUpgrades = [
  {
    name: 'More Pokemon',
    price: 300,
    quantity: 0,
    multiplier: 20
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

  // console.log('bought upgrade')
}

function buyMorePokemon() {
  console.log('bought upgrade')
}