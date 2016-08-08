var dragonDict = {
  Plant: {
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
tableLength = 1
function rateRetrieve(type, level) {
  return dragonDict[type][level]
}
function tableAddDragon(type, level) {
  var newRow = document.createElement("tr");
  newRow.id = "dragon" + tableLength;
  tableLength++;
  var nameData = document.createElement("td");
  var earnData = document.createElement("td");
  var dragonName = type + " Dragon";
  nameData.appendChild(document.createTextNode(dragonName));
  var earning = dragonDict[type][level];
  earnData.appendChild(document.createTextNode(earning));
  newRow.appendChild(nameData);
  newRow.appendChild(earnData);
  document.getElementById("dragon_table").childNodes[1].appendChild(newRow)
}
function calculateEarning() {
  number = 0
  for (i = 2; i < document.getElementById("dragon_table").childNodes[1].childNodes.length; i++) {
    number += parseInt(document.getElementById("dragon_table").childNodes[1].childNodes[i].childNodes[1].innerHTML)
  }
  document.getElementById("total_earnings").innerHTML = " Total Coins/Minute: " + number
}
