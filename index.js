const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
  return kittens
}