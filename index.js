const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  drivers.push('Ralph')
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  // let arr = drivers.slice()
  // arr.push(name)
  // return arr
  return drivers.push(name)
}

function prependDriver(name) {
  let arr = drivers.slice()

}
