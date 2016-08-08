var dragonDict = {
  plant = {
    one = 17
    two = 27
    three = 38
    four = 48
    five = 58
    six = 69
    seven = 79
    eight = 89
    nine = 99
    ten = 110
    eleven = 120
    twelve = 130
    thirteen = 141
    fourteen = 151
    fifteen = 161
    sixteen = 171
    seventeen = 182
    eighteen = 192
    nineteen = 202
    twenty = 213
  }
}
function rateRetrieve(type, level) {
  return dragonDict[type][level]
}
