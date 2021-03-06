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
var currentID = 0
var groupID = 0
var groups = []
var groupIDs = []
var dragons = []
var dragonIDs = []
function rateRetrieve(type, level) {
  return dragonDict[type][level]
}
function tableAddDragon(type, level, group) {
  var newRow = document.createElement("tr");
  currentID++;
  newRow.id = "dragon" + currentID;
  dragons.push("dragon" + currentID);
  dragonIDs.push(currentID);
  var nameData = document.createElement("td");
  var idData = document.createElement("td");
  var levelData = document.createElement("td");
  var earnData = document.createElement("td");
  var upgradeButton = document.createElement("td");
  var uButton = document.createElement("button");
  var removeButton = document.createElement("td");
  var rButton = document.createElement("button");
  
  var dragonName = type;
  nameData.appendChild(document.createTextNode(dragonName));
  levelData.appendChild(document.createTextNode(level));
  
  var earning = dragonDict[type][level];
  var elements = dragonDict[type]["elements"];
  var islandBoosts = checkIslandBoost(group);
  for (i = 0; i < elements.length; i++) {
    var currentI = elements[i];
    for (j = 0; j < islandBoosts.length; j++) {
      if (currentI == islandBoosts[j]) {
        earning = Math.round(earning * 1.2);
      }
    }
  }
  earnData.appendChild(document.createTextNode(earning));
  
  idData.appendChild(document.createTextNode(currentID));
  uButton.setAttribute("type", "button");
  uButton.setAttribute("class", "btn btn-primary");
  var upgradeFunction = "upgradeDragon(" + currentID + ")";
  uButton.setAttribute("onclick", upgradeFunction);
  uButton.innerHTML = "Upgrade";
  upgradeButton.appendChild(uButton);
  rButton.setAttribute("type", "button");
  rButton.setAttribute("class", "btn btn-danger");
  var removeFunction = "removeDragon(" + currentID + ")";
  rButton.setAttribute("onclick", removeFunction);
  rButton.innerHTML = "Remove";
  removeButton.appendChild(rButton);
  newRow.appendChild(nameData);
  newRow.appendChild(idData);
  newRow.appendChild(levelData);
  newRow.appendChild(earnData);
  newRow.appendChild(upgradeButton);
  newRow.appendChild(removeButton);
  var islandGroup = "group" + group;
  document.getElementById(islandGroup).childNodes[0].appendChild(newRow)
}
function calculateEarning() {
  number = 0
  for (i in groups) {
    var currentGroup = document.getElementById(groups[i]);
    for (i = 2; i < currentGroup.childNodes[0].childNodes.length; i++) {
      number += parseInt(currentGroup.childNodes[0].childNodes[i].childNodes[3].innerHTML);
    }
  }
//  for (i = 2; i < document.getElementById("dragon_table").childNodes[1].childNodes.length; i++) {
//    number += parseInt(document.getElementById("dragon_table").childNodes[1].childNodes[i].childNodes[3].innerHTML)
//  }
  document.getElementById("total_earnings").innerHTML = " Total Coins/Minute: " + number
}
function addDragonButton() {
  var eDragonType = document.getElementById("dragon_type");
  var dragonType = eDragonType.options[eDragonType.selectedIndex].text;
  var eDragonLevel = document.getElementById("dragon_level");
  var dragonLevel = parseInt(eDragonLevel.options[eDragonLevel.selectedIndex].text);
  var eDragonGroup = document.getElementById("dragon_group");
  var dragonGroup = parseInt(eDragonGroup.options[eDragonGroup.selectedIndex].text);
  tableAddDragon(dragonType, dragonLevel, dragonGroup);
}
function calculateCostEfficiency(currentLevel, dragonID, foodType) {
  var nextLevel = currentLevel + 1;
  var levelFoodCost = levelDict[nextLevel];
  var levelCost = levelFoodCost * foodDict[foodType]
  var nextEarnRate = checkBoostedEarning(dragonID, nextLevel);
  var timeToBreakEven = levelCost / nextEarnRate;
  timeToBreakEven = Math.round(timeToBreakEven);
  return timeToBreakEven
}
function bestDragon() {
  var times = [];
  var dragons = [];
  var ids = [];
  var idTimeDict = [];
  var dragonIdDict = [];
  var foodType = document.getElementById("food_type").options[document.getElementById("food_type").selectedIndex].text;
  for (i in groups) {
    var currentGroup = document.getElementById(groups[i]);
    for (i = 2; i < currentGroup.childNodes[0].childNodes.length; i++) {
      var dragonType = currentGroup.childNodes[0].childNodes[i].childNodes[0].innerHTML;
      var dragonID = parseInt(currentGroup.childNodes[0].childNodes[i].childNodes[1].innerHTML);
      var currentLevel = parseInt(currentGroup.childNodes[0].childNodes[i].childNodes[2].innerHTML);
      times.push(calculateCostEfficiency(currentLevel, dragonID, foodType));
      dragons.push(dragonType);
      ids.push(dragonID);
    }
  }
  for (i = 0; i < dragons.length + 1; i++) {
    idTimeDict[times[i]] = ids[i];
    dragonIdDict[ids[i]] = dragons[i];
  }
  var bestTime = Math.min.apply(Math, times);
  document.getElementById("dragon_id").innerHTML = idTimeDict[bestTime]
}
function upgradeDragon(id) {
  var htmlID = "dragon" + id;
  var currentDragon = document.getElementById(htmlID);
  var dragonType = currentDragon.childNodes[0].innerHTML;
  var dragonLevel = parseInt(currentDragon.childNodes[2].innerHTML) + 1;
  if (dragonLevel < 21) {
    currentDragon.childNodes[2].innerHTML = dragonLevel;
    currentDragon.childNodes[3].innerHTML = dragonDict[dragonType][dragonLevel];
  }
  document.getElementById("dragon_id").innerHTML = "N/A"
  calculateBoostedEarnings();
}
function removeDragon(id) {
  var htmlID = "dragon" + id;
  var currentDragon = document.getElementById(htmlID);
  currentDragon.parentNode.removeChild(currentDragon);
}
function addGroup() {
  groupID++;
  groups.push("group" + groupID);
  groupIDs.push(groupID);
  table = document.getElementById("new_dragon_table");
  group = document.createElement("table");
  table.appendChild(group);
  group.id = "group" + groupID;
  group.setAttribute("class", "table");
  groupBody = document.createElement("tbody");
  group.appendChild(groupBody);
  groupRow1 = document.createElement("tr");
  groupName = document.createElement("td");
  groupHR = document.createElement("h2");
  groupName.appendChild(groupHR);
  groupHR.innerHTML = "Island " + groupID;
  groupRow1.appendChild(groupName);
  groupBody.appendChild(groupRow1);
  groupRow2 = document.createElement("tr");
  groupBody.appendChild(groupRow2);
  groupDragon = document.createElement("td");
  groupDragon.appendChild(document.createElement("b"));
  groupDragon.childNodes[0].innerHTML = "Dragon";
  groupRow2.appendChild(groupDragon);
  
  groupId = document.createElement("td");
  groupId.appendChild(document.createElement("b"));
  groupId.childNodes[0].innerHTML = "ID";
  groupRow2.appendChild(groupId);
  
  groupLevel = document.createElement("td");
  groupLevel.appendChild(document.createElement("b"));
  groupLevel.childNodes[0].innerHTML = "Level";
  groupRow2.appendChild(groupLevel);
  
  groupCPM = document.createElement("td");
  groupCPM.appendChild(document.createElement("b"));
  groupCPM.childNodes[0].innerHTML = "Coins per Minute";
  groupRow2.appendChild(groupCPM);
  
  groupUpgrade = document.createElement("td");
  groupUpgrade.appendChild(document.createElement("b"));
  groupUpgrade.childNodes[0].innerHTML = "Upgrade";
  groupRow2.appendChild(groupUpgrade);
  
  groupRemove = document.createElement("td");
  groupRemove.appendChild(document.createElement("b"));
  groupRemove.childNodes[0].innerHTML = "Remove";
  groupRow2.appendChild(groupRemove);
  
  var select = document.getElementById("dragon_group");
  var option = document.createElement("option");
  option.innerHTML = groupID;
  select.appendChild(option);
  
  select = document.getElementById("dragon_group_2");
  var option = document.createElement("option");
  option.innerHTML = groupID;
  select.appendChild(option);
  
  select = document.getElementById("dragon_group_3");
  var option = document.createElement("option");
  option.innerHTML = groupID;
  select.appendChild(option);
}
addGroup();
function addDragonOptions() {
  var select = document.getElementById("dragon_type");
  for (i in dragonDict) {
    newOption = document.createElement("option");
    newOption.innerHTML = i;
    select.appendChild(newOption);
  }
}
addDragonOptions();

function addBoost() {
  var eBoostType = document.getElementById("boost_type")
  var boostType = eBoostType.options[eBoostType.selectedIndex].text;
  var eIslandGroup = document.getElementById("dragon_group_2");
  var islandGroup = parseInt(eIslandGroup.options[eIslandGroup.selectedIndex].text);
  var boostRow = boostType.toLowerCase() + "_row";
  var eBoostRow = document.getElementById(boostRow);
  
  if (eBoostRow.childNodes[3].innerHTML != "Not Assigned") {
    document.getElementById("add_boost").innerHTML = "Already Added";
    setTimeout(function() {
      document.getElementById("add_boost").innerHTML = "Add Boost";
    }, 1000)
    return;
  }
  eBoostRow.childNodes[3].innerHTML = islandGroup;
  calculateBoostedEarnings();
}
function moveBoost() {
  var eBoostType = document.getElementById("boost_type_2")
  var boostType = eBoostType.options[eBoostType.selectedIndex].text;
  var eIslandGroup = document.getElementById("dragon_group_3");
  var islandGroup = parseInt(eIslandGroup.options[eIslandGroup.selectedIndex].text);
  var boostRow = boostType.toLowerCase() + "_row";
  var eBoostRow = document.getElementById(boostRow);
  eBoostRow.childNodes[3].innerHTML = islandGroup;
  calculateBoostedEarnings();
}
function calculateBoostedEarnings() {
  for (f = 0; f < groupIDs.length; f++) {
  var island = groupIDs[f];
  var islandId = "group" + island;
  var islandTable = document.getElementById(islandId).childNodes[0]
  var islandArray = []
  var islandBoosts = checkIslandBoost(island);
  for (i = 2; i < islandTable.childNodes.length; i++) {
    islandArray.push(parseInt(islandTable.childNodes[i].childNodes[1].innerHTML))
  }
  for (i = 0; i < islandArray.length; i++) {
    currentI = islandArray[i];
    var currentDragon = "dragon" + currentI;
    var eCurrentDragon = document.getElementById(currentDragon);
    var dragonType = eCurrentDragon.childNodes[0].innerHTML;
    var dragonLevel = parseInt(eCurrentDragon.childNodes[2].innerHTML);
    var dragonElements = dragonDict[dragonType]["elements"];
    eCurrentDragon.childNodes[3].innerHTML = dragonDict[dragonType][dragonLevel];
    for (k = 0; k < dragonElements.length; k++) {
      dragonElement = dragonElements[k]
      for (j = 0; j < islandBoosts.length; j++) {
        if (dragonElement == islandBoosts[j]) {
          var currentEarning = parseInt(eCurrentDragon.childNodes[3].innerHTML);
          eCurrentDragon.childNodes[3].innerHTML = Math.round(currentEarning * 1.2);
        }
      }
    }
  }
  }
}
function checkIslandBoost(island) {
  boostsOnIsland = []
  if (island == parseInt(document.getElementById("plant_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("plant");
  }
  if (island == parseInt(document.getElementById("fire_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("fire");
  }
  if (island == parseInt(document.getElementById("lightning_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("lightning");
  }
  if (island == parseInt(document.getElementById("air_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("air");
  }
  if (island == parseInt(document.getElementById("metal_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("metal");
  }
  if (island == parseInt(document.getElementById("cold_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("cold");
  }
  if (island == parseInt(document.getElementById("water_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("water");
  }
  if (island == parseInt(document.getElementById("earth_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("earth");
  }
  if (island == parseInt(document.getElementById("dark_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("dark");
  }
  if (island == parseInt(document.getElementById("light_row").childNodes[3].innerHTML)) {
    boostsOnIsland.push("light");
  }
  return boostsOnIsland;
}
function checkBoostedEarning(dragonID, level) {
  var eDragon = document.getElementById("dragon" + dragonID);
  var dragonType = eDragon.childNodes[0].innerHTML;
  var dragonElements = dragonDict[dragonType]["elements"];
  var baseEarning = dragonDict[dragonType][level];
  var boostedEarning = baseEarning
  var islandID = eDragon.parentNode.parentNode.id;
  var islandNumber = parseInt(islandID.replace(/[group]/g, ""));
  var islandBoosts = checkIslandBoost(islandNumber);
  for (i = 0; i < dragonElements.length; i++) {
    currentElement = dragonElements[i];
    for (j = 0; j < islandBoosts.length; j++) {
      currentBoost = islandBoosts[j];
      if (currentElement == currentBoost) {
        boostedEarning = Math.round(baseEarning * 1.2);
      }
    }
  }
  return boostedEarning;
}
function saveIsland() {
  var save = {}
  save["boosts"] = {}
  save["boosts"]["plant"] = document.getElementById("plant_row").childNodes[3].innerHTML
  save["boosts"]["fire"] = document.getElementById("fire_row").childNodes[3].innerHTML
  save["boosts"]["lightning"] = document.getElementById("lightning_row").childNodes[3].innerHTML
  save["boosts"]["air"] = document.getElementById("air_row").childNodes[3].innerHTML
  save["boosts"]["metal"] = document.getElementById("metal_row").childNodes[3].innerHTML
  save["boosts"]["cold"] = document.getElementById("cold_row").childNodes[3].innerHTML
  save["boosts"]["water"] = document.getElementById("water_row").childNodes[3].innerHTML
  save["boosts"]["earth"] = document.getElementById("earth_row").childNodes[3].innerHTML
  save["boosts"]["light"] = document.getElementById("light_row").childNodes[3].innerHTML
  save["boosts"]["dark"] = document.getElementById("dark_row").childNodes[3].innerHTML
  
  save["grouplist"] = groups
  save["groups"] = {}
  for (i = 0; i < groups.length; i++) {
    currentGroup = groups[i];
    save["groups"][currentGroup] = {}
    eCurrentGroup = document.getElementById(currentGroup)
    currentDragons = []
    eCurrentDragons = eCurrentGroup.childNodes[0].childNodes;
    dragonArray = []
    for (j = 2; j < eCurrentDragons.length; j++) {
      dragonRow = eCurrentDragons[j];
      dragonId = dragonRow.id;
      dragonArray.push(dragonId);
      save["groups"][currentGroup][dragonId] = {}
      save["groups"][currentGroup][dragonId]["type"] = dragonRow.childNodes[0].innerHTML
      save["groups"][currentGroup][dragonId]["level"] = dragonRow.childNodes[2].innerHTML
    }
    save["groups"][currentGroup]["dragons"] = dragonArray;
  }
  localStorage.setItem('save', JSON.stringify(save));
}
function load() {
  save = JSON.parse(localStorage.getItem('save'))
  document.getElementById("plant_row").childNodes[3].innerHTML = save["boosts"]["plant"];
  document.getElementById("fire_row").childNodes[3].innerHTML = save["boosts"]["fire"];
  document.getElementById("lightning_row").childNodes[3].innerHTML = save["boosts"]["lightning"];
  document.getElementById("air_row").childNodes[3].innerHTML = save["boosts"]["air"];
  document.getElementById("metal_row").childNodes[3].innerHTML = save["boosts"]["metal"];
  document.getElementById("cold_row").childNodes[3].innerHTML = save["boosts"]["cold"];
  document.getElementById("water_row").childNodes[3].innerHTML = save["boosts"]["water"];
  document.getElementById("earth_row").childNodes[3].innerHTML = save["boosts"]["earth"];
  document.getElementById("dark_row").childNodes[3].innerHTML = save["boosts"]["dark"];
  document.getElementById("light_row").childNodes[3].innerHTML = save["boosts"]["light"];
  
  for (a = 0; a < save["grouplist"].length; a++) {
    currentGroup = save["grouplist"][a];
    if (document.getElementById(currentGroup) == undefined) {
      addGroup();
    }
  }
  
  for (b = 0; b < dragonIDs.length; b++) {
    currentDragon = dragonIDs[b];
    removeDragon(currentDragon);
  }
  currentID = 0;
  
  for (c = 0; c < save["grouplist"].length; c++) {
    currentGroup = save["grouplist"][c];
    currentGroupID = parseInt(currentGroup.replace(/[group]/g, ""));
    for (d = 0; d < save["groups"][currentGroup]["dragons"].length; d++) {
      currentDragon = save["groups"][currentGroup]["dragons"][d]
      level = save["groups"][currentGroup][currentDragon]["level"];
      type = save["groups"][currentGroup][currentDragon]["type"];
      tableAddDragon(type, level, currentGroupID);
    }
  }
  calculateBoostedEarnings();
}
