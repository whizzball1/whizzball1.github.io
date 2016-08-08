var dragonDict = {
  plant: {
    elements: ["plant"]
    1: 17,
    2: 27,
    3: 38,
    4: 48,
    5: 58,
    6: 69,
    7: 79,
    8: 89,
    9: 99,
    10: 110,
    11: 120,
    12: 130,
    13: 141,
    14: 151,
    15: 161,
    16: 171,
    17: 182,
    18: 192,
    19: 202,
    20: 213
  }
}
function rateRetrieve(type, level) {
  return dragonDict[type][level]
}
