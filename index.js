function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing(katzDeliLine) {
  var m = katzDeliLine[0]
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return "Currently serving " + m + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
