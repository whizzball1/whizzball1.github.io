var dragonDict = {
  "Plant Dragon": {
    elements: ["plant"],
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
// The food dictionary matches the name of a treat group to the cost _per treat_, not per 5 treats or 20 treats.
var foodDict = {
  "Dragon Snaps": 10,
  "Dragon Root": 12.5,
  "Zazzberries": 13.33,
  "Blushrooms": 16.67,
  "Pumpermelons": 18.75,
  "Dragon Fruit": 25,
  "Sarjin Pepper": 50,
  "Omega Squash": 50,
  "Beanstalk": 50,
  "Cacti-snack": 80,
  "Kraken Kabbage": 70,
  "Berry Bauble": 65
}
// The level dictionary matches the next level your dragon can get to to the food required to get there.
var levelDict = {
  2: 40,
  3: 80,
  4: 160,
  5: 320,
  6: 640,
  7: 1280,
  8: 2560,
  9: 5120,
  10: 10240,
  11: 20480,
  12: 40960,
  13: 81920,
  14: 163840,
  15: 327680,
  16: 655360,
  17: 1310720,
  18: 2621440,
  19: 5242880,
  20: 10485760,
}
tableLength = 1
function rateRetrieve(type, level) {
  return dragonDict[type][level]
}
function tableAddDragon(type, level) {
  var newRow = document.createElement("tr");
  newRow.id = "dragon" + tableLength;
  tableLength++;
  var nameData = document.createElement("td");
  var levelData = document.createElement("td");
  var earnData = document.createElement("td");
  var dragonName = type;
  nameData.appendChild(document.createTextNode(dragonName));
  levelData.appendChild(document.createTextNode(level));
  var earning = dragonDict[type][level];
  earnData.appendChild(document.createTextNode(earning));
  newRow.appendChild(nameData);
  newRow.appendChild(levelData);
  newRow.appendChild(earnData);
  document.getElementById("dragon_table").childNodes[1].appendChild(newRow)
}
function calculateEarning() {
  number = 0
  for (i = 2; i < document.getElementById("dragon_table").childNodes[1].childNodes.length; i++) {
    number += parseInt(document.getElementById("dragon_table").childNodes[1].childNodes[i].childNodes[2].innerHTML)
  }
  document.getElementById("total_earnings").innerHTML = " Total Coins/Minute: " + number
}
function addDragonButton() {
  var eDragonType = document.getElementById("dragon_type");
  var dragonType = eDragonType.options[eDragonType.selectedIndex].text + " Dragon";
  var eDragonLevel = document.getElementById("dragon_level");
  var dragonLevel = parseInt(eDragonLevel.options[eDragonLevel.selectedIndex].text);
  tableAddDragon(dragonType, dragonLevel);
}
function calculateCostEfficiency(currentLevel, dragonType, foodType) {
  var nextLevel = currentLevel + 1;
  var levelFoodCost = levelDict[nextLevel];
  var levelCost = levelFoodCost * foodDict[foodType]
  var nextEarnRate = dragonDict[dragonType][nextLevel];
  var timeToBreakEven = levelCost / nextEarnRate;
  timeToBreakEven = Math.round(timeToBreakEven);
  return timeToBreakEven
}
function bestDragon(foodType) {
  var times = []
  for (i = 2; i < document.getElementById("dragon_table").childNodes[1].childNodes.length; i++) {
    var dragonType = document.getElementById("dragon_table").childNodes[1].childNodes[i].childNodes[0].innerHTML;
    var currentLevel = parseInt(document.getElementById("dragon_table").childNodes[1].childNodes[i].childNodes[1].innerHTML);
    times.push(calculateCostEfficiency(currentLevel, dragonType, foodType));
  }
  return Math.min.apply(Math, times);
}
