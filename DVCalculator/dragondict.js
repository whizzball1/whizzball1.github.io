var air = "air"
var fire = "fire"
var water = "water"
var earth = "earth"
var lightning = "lightning"
var cold = "cold"
var metal = "metal"
var plant = "plant"
var light = "light"
var dark = "dark"
var dragonDict = {
  "Ash Dragon": {
    elements: ["lightning", "plant"],
    1: 13,
    2: 21,
    3: 29,
    4: 37,
    5: 45,
    6: 53,
    7: 61,
    8: 69,
    9: 77,
    10: 85,
    11: 93,
    12: 101,
    13: 109,
    14: 117,
    15: 125,
    16: 133,
    17: 141,
    18: 149,
    19: 157,
    20: 165,
  },
  "Blazing Dragon": {
    elements: ["fire", "air"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 32,
    8: 36,
    9: 40,
    10: 44,
    11: 48,
    12: 52,
    13: 56,
    14: 60,
    15: 64,
    16: 69,
    17: 73,
    18: 77,
    19: 81,
    20: 85
  },
  "Blizzard Dragon": {
    elements: ["cold", "air"],
    1: 7,
    2: 11,
    3: 15,
    4: 20,
    5: 24,
    6: 28,
    7: 32,
    8: 36,
    9: 41,
    10: 45,
    11: 49,
    12: 53,
    13: 57,
    14: 62,
    15: 66,
    16: 70,
    17: 74,
    18: 78,
    19: 83,
    20: 87
  },
  "Blue Fire Dragon": {
    elements: ["cold", "fire"],
    1: 16,
    2: 26,
    3: 36,
    4: 46,
    5: 56,
    6: 66,
    7: 75,
    8: 85,
    9: 95,
    10: 105,
    11: 115,
    12: 125,
    13: 134,
    14: 144,
    15: 154,
    16: 164,
    17: 174,
    18: 184,
    19: 193,
    20: 203
  },
  "Brass Dragon": {
    elements: ["fire", "metal"],
    1: 4,
    2: 7,
    3: 9,
    4: 12,
    5: 14,
    6: 17,
    7: 19,
    8: 22,
    9: 24,
    10: 26,
    11: 29,
    12: 31,
    13: 34,
    14: 36,
    15: 39,
    16: 41,
    17: 44,
    18: 46,
    19: 49,
    20: 51
  },
  "Cactus Dragon": {
    elements: ["lightning", "plant"],
    1: 13,
    2: 21,
    3: 29,
    4: 37,
    5: 45,
    6: 53,
    7: 61,
    8: 69,
    9: 77,
    10: 85,
    11: 93,
    12: 101,
    13: 109,
    14: 117,
    15: 125,
    16: 133,
    17: 141,
    18: 149,
    19: 157,
    20: 165
  },
  "Cave Dragon": {
    elements: ["dark", "earth"],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 17,
    6: 20,
    7: 23,
    8: 26,
    9: 29,
    10: 32,
    11: 35,
    12: 38,
    13: 41,
    14: 44,
    15: 47,
    16: 50,
    17: 53,
    18: 56,
    19: 59,
    20: 62
  },
  "Chrome Dragon": {
    elements: ["metal", "air"],
    1: 4,
    2: 7,
    3: 9,
    4: 12,
    5: 14,
    6: 17,
    7: 19,
    8: 22,
    9: 24,
    10: 26,
    11: 29,
    12: 31,
    13: 34,
    14: 36,
    15: 39,
    16: 41,
    17: 44,
    18: 46,
    19: 49,
    20: 51
  },
  "Cold Dragon": {
    elements: ["cold"],
    1: 5,
    2: 8,
    3: 11,
    4: 13,
    5: 16,
    6: 19,
    7: 22,
    8: 25,
    9: 28,
    10: 31,
    11: 34,
    12: 36,
    13: 39,
    14: 42,
    15: 45,
    16: 48,
    17: 51,
    18: 54,
    19: 57,
    20: 60
  },
  "Copper Dragon": {
    elements: ["metal", "lightning"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Coral Dragon": {
    elements: ["fire", "water"],
    1: 8,
    2: 12,
    3: 17,
    4: 22,
    5: 26,
    6: 31,
    7: 36,
    8: 40,
    9: 45,
    10: 50,
    11: 54,
    12: 59,
    13: 63,
    14: 68,
    15: 73,
    16: 77,
    17: 82,
    18: 87,
    19: 91,
    20: 96
  },
  "Crypt Dragon": {
    elements: ["dark, cold"],
    1: 7,
    2: 10,
    3: 14,
    4: 18,
    5: 22,
    6: 26,
    7: 30,
    8: 34,
    9: 38,
    10: 42,
    11: 46,
    12: 50,
    13: 53,
    14: 57,
    15: 61,
    16: 65,
    17: 69,
    18: 73,
    19: 77,
    20: 81
  },
  "Crystal Dragon": {
    elements: ["lightning", "earth"],
    1: 8,
    2: 12,
    3: 17,
    4: 21,
    5: 26,
    6: 30,
    7: 35,
    8: 39,
    9: 44,
    10: 48,
    11: 53,
    12: 57,
    13: 62,
    14: 66,
    15: 71,
    16: 75,
    17: 80,
    18: 84,
    19: 89,
    20: 93
  },
  "Current Dragon": {
    elements: ["water", "lightning"],
    1: 20,
    2: 32,
    3: 44,
    4: 56,
    5: 68,
    6: 80,
    7: 92,
    8: 104,
    9: 116,
    10: 128,
    11: 140,
    12: 152,
    13: 164,
    14: 176,
    15: 188,
    16: 200,
    17: 212,
    18: 224,
    19: 236,
    20: 248
  },
  "Dark Dragon": {
    elements: ["dark"],
    1: 6,
    2: 9,
    3: 13,
    4: 16,
    5: 20,
    6: 23,
    7: 27,
    8: 30,
    9: 33,
    10: 37,
    11: 40,
    12: 44,
    13: 47,
    14: 51,
    15: 54,
    16: 58,
    17: 61,
    18: 65,
    19: 68,
    20: 72
  },
  "Dodo Dragon": {
    elements: ["earth", "air"],
    1: 8,
    2: 13,
    3: 18,
    4: 22,
    5: 27,
    6: 32,
    7: 37,
    8: 42,
    9: 46,
    10: 51,
    11: 56,
    12: 61,
    13: 66,
    14: 70,
    15: 75,
    16: 80,
    17: 85,
    18: 90,
    19: 94,
    20: 99
  },
  "Dungeon Dragon": {
    elements: ["dark", "fire"],
    1: 7,
    2: 11,
    3: 16,
    4: 20,
    5: 24,
    6: 29,
    7: 33,
    8: 37,
    9: 41,
    10: 46,
    11: 50,
    12: 54,
    13: 59,
    14: 63,
    15: 67,
    16: 71,
    17: 76,
    18: 80,
    19: 84,
    20: 89
  },
  "Earth Dragon": {
    elements: ["earth"],
    1: 4,
    2: 6,
    3: 8,
    4: 11,
    5: 13,
    6: 15,
    7: 17,
    8: 20,
    9: 22,
    10: 24,
    11: 26,
    12: 29,
    13: 31,
    14: 33,
    15: 35,
    16: 38,
    17: 40,
    18: 42,
    19: 44,
    20: 47
  },
  "Ember Dragon": {
    elements: ["fire", "light"],
    1: 6,
    2: 10,
    3: 14,
    4: 18,
    5: 22,
    6: 26,
    7: 29,
    8: 33,
    9: 37,
    10: 41,
    11: 45,
    12: 49,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 71,
    19: 75,
    20: 79
  },
  "Evergreen Dragon": {
    elements: ["plant", "cold"],
    1: 7,
    2: 11,
    3: 16,
    4: 20,
    5: 24,
    6: 28,
    7: 32,
    8: 37,
    9: 41,
    10: 45,
    11: 49,
    12: 54,
    13: 58,
    14: 62,
    15: 66,
    16: 71,
    17: 75,
    18: 79,
    19: 83,
    20: 88
  },
  "Firefly Dragon": {
    elements: ["fire", "lightning"],
    1: 9,
    2: 14,
    3: 19,
    4: 24,
    5: 29,
    6: 34,
    7: 39,
    8: 45,
    9: 50,
    10: 55,
    11: 60,
    12: 65,
    13: 70,
    14: 75,
    15: 81,
    16: 86,
    17: 91,
    18: 96,
    19: 101,
    20: 106
  },
  "Flash Dragon": {
    elements: ["lightning", "light"],
    1: 6,
    2: 9,
    3: 13,
    4: 16,
    5: 20,
    6: 23,
    7: 27,
    8: 30,
    9: 33,
    10: 37,
    11: 40,
    12: 44,
    13: 47,
    14: 51,
    15: 54,
    16: 58,
    17: 61,
    18: 65,
    19: 68,
    20: 72
  },
  "Flower Dragon": {
    elements: ["plant", "fire"],
    1: 9,
    2: 15,
    3: 20,
    4: 26,
    5: 31,
    6: 37,
    7: 42,
    8: 48,
    9: 54,
    10: 59,
    11: 65,
    12: 70,
    13: 76,
    14: 81,
    15: 87,
    16: 92,
    17: 98,
    18: 103,
    19: 109,
    20: 114,
  },
  "Fog Dragon": {
    elements: ["air", "water"],
    1: 8,
    2: 13,
    3: 18,
    4: 22,
    5: 27,
    6: 32,
    7: 37,
    8: 42,
    9: 46,
    10: 51,
    11: 56,
    12: 61,
    13: 66,
    14: 70,
    15: 75,
    16: 80,
    17: 85,
    18: 90,
    19: 94,
    20: 99
  },
  "Forge Dragon": {
    elements: ["fire", "metal"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Frostfire Dragon": {
    elements: ["fire", "cold"],
    1: 16,
    2: 23,
    3: 36,
    4: 46,
    5: 56,
    6: 66,
    7: 75,
    8: 85,
    9: 95,
    10: 105,
    11: 115,
    12: 125,
    13: 134,
    14: 144,
    15: 154,
    16: 164,
    17: 174,
    18: 184,
    19: 193,
    20: 203
  },
  "Fungus Dragon": {
    elements: ["dark", "plant"],
    1: 6,
    2: 9,
    3: 13,
    4: 17,
    5: 20,
    6: 24,
    7: 27,
    8: 31,
    9: 34,
    10: 38,
    11: 42,
    12: 45,
    13: 49,
    14: 52,
    15: 56,
    16: 59,
    17: 63,
    18: 66,
    19: 70,
    20: 74
  },
  "Gamma Dragon": {
    elements: ["light", "lightning"],
    1: 8,
    2: 13,
    3: 18,
    4: 23,
    5: 27,
    6: 32,
    7: 37,
    8: 42,
    9: 47,
    10: 52,
    11: 56,
    12: 61,
    13: 66,
    14: 70,
    15: 75,
    16: 80,
    17: 85,
    18: 90,
    19: 94,
    20: 99
  },
  "Glacier Dragon": {
    elements: ["cold", "earth"],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 17,
    6: 20,
    7: 23,
    8: 26,
    9: 29,
    10: 32,
    11: 35,
    12: 38,
    13: 41,
    14: 44,
    15: 47,
    16: 50,
    17: 53,
    18: 56,
    19: 59,
    20: 62
  },
  "Glare Dragon": {
    elements: ["light", "cold"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Glass Dragon": {
    elements: ["light", "earth"],
    1: 6,
    2: 9,
    3: 13,
    4: 17,
    5: 20,
    6: 24,
    7: 27,
    8: 31,
    9: 34,
    10: 38,
    11: 41,
    12: 45,
    13: 48,
    14: 52,
    15: 56,
    16: 59,
    17: 63,
    18: 66,
    19: 70,
    20: 73
  },
  "Hail Dragon": {
    elements: ["cold", "lightning"],
    1: 12,
    2: 19,
    3: 26,
    4: 34,
    5: 41,
    6: 48,
    7: 55,
    8: 62,
    9: 70,
    10: 77,
    11: 84,
    12: 91,
    13: 98,
    14: 106,
    15: 113,
    16: 120,
    17: 127,
    18: 134,
    19: 142,
    20: 149
  },
  "Heat Dragon": {
    elements: ["light", "fire"],
    1: 7,
    2: 11,
    3: 16,
    4: 20,
    5: 24,
    6: 29,
    7: 33,
    8: 37,
    9: 41,
    10: 46,
    11: 50,
    12: 54,
    13: 59,
    14: 63,
    15: 67,
    16: 71,
    17: 76,
    18: 80,
    19: 84,
    20: 89
  },
  "Howl Dragon": {
    elements: ["dark", "air"],
    1: 6,
    2: 9,
    3: 12,
    4: 16,
    5: 19,
    6: 22,
    7: 26,
    8: 29,
    9: 33,
    10: 36,
    11: 39,
    12: 43,
    13: 46,
    14: 49,
    15: 53,
    16: 56,
    17: 60,
    18: 63,
    19: 66,
    20: 70
  },
  "Hypnotic Dragon": {
    elements: ["light", "air"],
    1: 9,
    2: 14,
    3: 19,
    4: 24,
    5: 29,
    6: 35,
    7: 40,
    8: 45,
    9: 50,
    10: 55,
    11: 60,
    12: 66,
    13: 71,
    14: 76,
    15: 81,
    16: 86,
    17: 92,
    18: 97,
    19: 102,
    20: 107
  },
  "Ice Dragon": {
    elements: ["cold", "water"],
    1: 6,
    2: 9,
    3: 13,
    4: 16,
    5: 19,
    6: 23,
    7: 26,
    8: 30,
    9: 33,
    10: 37,
    11: 40,
    12: 43,
    13: 47,
    14: 50,
    15: 54,
    16: 57,
    17: 61,
    18: 64,
    19: 67,
    20: 71
  },
  "Iceberg Dragon": {
    elements: ["cold", "water"],
    1: 8,
    2: 13,
    3: 18,
    4: 22,
    5: 27,
    6: 32,
    7: 37,
    8: 42,
    9: 46,
    10: 51,
    11: 56,
    12: 61,
    13: 66,
    14: 70,
    15: 75,
    16: 80,
    17: 85,
    18: 90,
    19: 94,
    20: 99
  },
  "Iron Dragon": {
    elements: ["earth", "metal"],
    1: 3,
    2: 5,
    3: 7,
    4: 9,
    5: 11,
    6: 13,
    7: 15,
    8: 17,
    9: 19,
    10: 21,
    11: 23,
    12: 25,
    13: 27,
    14: 29,
    15: 31,
    16: 33,
    17: 35,
    18: 37,
    19: 39,
    20: 41,
  },
  "Lava Dragon": {
    elements: ["fire", "earth"],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 17,
    6: 20,
    7: 23,
    8: 26,
    9: 29,
    10: 32,
    11: 35,
    12: 38,
    13: 41,
    14: 44,
    15: 47,
    16: 50,
    17: 53,
    18: 56,
    19: 59,
    20: 62
  },
  "Lichen Dragon": {
    elements: ["cold", "plant"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83,
  },
  "Light Dragon": {
    elements: ["light"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Lightning Dragon": {
    elements: ["lightning"],
    1: 9,
    2: 15,
    3: 20,
    4: 26,
    5: 31,
    6: 37,
    7: 42,
    8: 48,
    9: 54,
    10: 59,
    11: 65,
    12: 70,
    13: 76,
    14: 81,
    15: 87,
    16: 92,
    17: 98,
    18: 103,
    19: 109,
    20: 114
  },
  "Lotus Dragon": {
    elements: ["light", "water"],
    1: 6,
    2: 10,
    3: 13,
    4: 17,
    5: 21,
    6: 24,
    7: 28,
    8: 32,
    9: 35,
    10: 39,
    11: 42,
    12: 46,
    13: 50,
    14: 53,
    15: 57,
    16: 61,
    17: 64,
    18: 69,
    19: 72,
    20: 76
  },
  "Luminous Dragon": {
    elements: ["light", "plant"],
    1: 8,
    2: 12,
    3: 17,
    4: 21,
    5: 26,
    6: 30,
    7: 35,
    8: 39,
    9: 44,
    10: 49,
    11: 53,
    12: 58,
    13: 62,
    14: 67,
    15: 71,
    16: 76,
    17: 81,
    18: 85,
    19: 90,
    20: 94
  },
  "Magnetic Dragon": {
    elements: ["metal", "lightning"],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 17,
    6: 20,
    7: 23,
    8: 26,
    9: 29,
    10: 32,
    11: 35,
    12: 38,
    13: 41,
    14: 44,
    15: 47,
    16: 50,
    17: 53,
    18: 56,
    19: 59,
    20: 62
  },
  "Meadow Dragon": {
    elements: ["plant", "light"],
    1: 7,
    2: 10,
    3: 14,
    4: 18,
    5: 22,
    6: 26,
    7: 30,
    8: 34,
    9: 38,
    10: 42,
    11: 46,
    12: 50,
    13: 53,
    14: 57,
    15: 61,
    16: 65,
    17: 69,
    18: 73,
    19: 77,
    20: 81
  },
  "Meteor Dragon": {
    elements: ["metal", "air"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Miasma Dragon": {
    elements: ["dark", "air"],
    1: 5,
    2: 8,
    3: 12,
    4: 15,
    5: 18,
    6: 21,
    7: 24,
    8: 28,
    9: 31,
    10: 34,
    11: 37,
    12: 40,
    13: 44,
    14: 47,
    15: 50,
    16: 53,
    17: 56,
    18: 59,
    19: 63,
    20: 66
  },
  "Mine Dragon": {
    elements: ["cold", "metal"],
    1: 4,
    2: 6,
    3: 8,
    4: 11,
    5: 13,
    6: 15,
    7: 17,
    8: 20,
    9: 22,
    10: 24,
    11: 26,
    12: 29,
    13: 31,
    14: 33,
    15: 35,
    16: 38,
    17: 40,
    18: 42,
    19: 44,
    20: 47
  },
  "Moss Dragon": {
    elements: ["plant", "earth"],
    1: 6,
    2: 9,
    3: 13,
    4: 16,
    5: 19,
    6: 23,
    7: 26,
    8: 30,
    9: 33,
    10: 37,
    11: 40,
    12: 43,
    13: 47,
    14: 50,
    15: 54,
    16: 57,
    17: 61,
    18: 64,
    19: 67,
    20: 71,
  },
  "Mud Dragon": {
    elements: ["earth", "water"],
    1: 5,
    2: 9,
    3: 12,
    4: 15,
    5: 19,
    6: 22,
    7: 25,
    8: 28,
    9: 32,
    10: 35,
    11: 38,
    12: 41,
    13: 45,
    14: 48,
    15: 51,
    16: 55,
    17: 58,
    18: 61,
    19: 64,
    20: 68
  },
  "Nightshade Dragon": {
    elements: ["plant", "dark"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Obsidian Dragon": {
    elements: [fire, earth],
    1: 5,
    2: 9,
    3: 12,
    4: 15,
    5: 19,
    6: 22,
    7: 25,
    8: 28,
    9: 32,
    10: 35,
    11: 38,
    12: 41,
    13: 45,
    14: 48,
    15: 51,
    16: 55,
    17: 58,
    18: 61,
    19: 64,
    20: 68
  },
  "Ooze Dragon": {
    elements: [dark, water],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 40,
    10: 44,
    11: 48,
    12: 52,
    13: 56,
    14: 60,
    15: 64,
    16: 68,
    17: 72,
    18: 76,
    19: 80,
    20: 85
  },
  "Palladium Dragon": {
    elements: [metal, light],
    1: 6,
    2: 9,
    3: 12,
    4: 16,
    5: 19,
    6: 22,
    7: 26,
    8: 29,
    9: 33,
    10: 36,
    11: 39,
    12: 43,
    13: 46,
    14: 49,
    15: 53,
    16: 56,
    17: 59,
    18: 63,
    19: 66,
    20: 70
  },
  "Phantom Dragon": {
    elements: [light, cold],
    1: 6,
    2: 10,
    3: 14,
    4: 17,
    5: 21,
    6: 25,
    7: 29,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 47,
    13: 51,
    14: 55,
    15: 58,
    16: 62,
    17: 66,
    18: 70,
    19: 73,
    20: 77
  },
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
  },
  "Poison Dragon": {
    elements: [dark, fire],
    1: 9,
    2: 14,
    3: 19,
    4: 24,
    5: 29,
    6: 34,
    7: 39,
    8: 45,
    9: 50,
    10: 55,
    11: 60,
    12: 65,
    13: 70,
    14: 75,
    15: 81,
    16: 86,
    17: 91,
    18: 96,
    19: 101,
    20: 106
  },
  "Pollen Dragon": {
    elements: [plant, air],
    1: 8,
    2: 12,
    3: 17,
    4: 21,
    5: 26,
    6: 30,
    7: 35,
    8: 39,
    9: 44,
    10: 48,
    11: 53,
    12: 57,
    13: 62,
    14: 66,
    15: 71,
    16: 75,
    17: 80,
    18: 84,
    19: 89,
    20: 93
  },
  "Promethium Dragon": {
    elements: [metal, dark],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 16,
    6: 19,
    7: 22,
    8: 25,
    9: 28,
    10: 31,
    11: 34,
    12: 37,
    13: 40,
    14: 43,
    15: 45,
    16: 48,
    17: 51,
    18: 54,
    19: 57,
    20: 60
  },
  "Quicksilver Dragon": {
    elements: [metal, water],
    1: 5,
    2: 9,
    3: 12,
    4: 15,
    5: 19,
    6: 22,
    7: 25,
    8: 28,
    9: 32,
    10: 35,
    11: 38,
    12: 41,
    13: 45,
    14: 48,
    15: 51,
    16: 55,
    17: 58,
    18: 61,
    19: 64,
    20: 68
  },
  "Rain Dragon": {
    elements: ["air", "water"],
    1: 8,
    2: 13,
    3: 18,
    4: 22,
    5: 27,
    6: 32,
    7: 37,
    8: 42,
    9: 46,
    10: 51,
    11: 56,
    12: 61,
    13: 66,
    14: 70,
    15: 75,
    16: 80,
    17: 85,
    18: 90,
    19: 94,
    20: 99
  },
  "Rust Dragon": {
    elements: ["water", "metal"],
    1: 5,
    2: 7,
    3: 10,
    4: 13,
    5: 16,
    6: 18,
    7: 21,
    8: 24,
    9: 27,
    10: 30,
    11: 32,
    12: 35,
    13: 38,
    14: 41,
    15: 43,
    16: 46,
    17: 49,
    18: 52,
    19: 54,
    20: 57
  },
  "Shadow Dragon": {
    elements: ["light", "dark"],
    1: 7,
    2: 11,
    3: 15,
    4: 19,
    5: 23,
    6: 27,
    7: 31,
    8: 35,
    9: 39,
    10: 43,
    11: 47,
    12: 51,
    13: 55,
    14: 59,
    15: 63,
    16: 67,
    17: 71,
    18: 75,
    19: 79,
    20: 83
  },
  "Snow Dragon": {
    elements: ["cold", "air"],
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 17,
    6: 20,
    7: 23,
    8: 26,
    9: 29,
    10: 32,
    11: 35,
    12: 38,
    13: 41,
    14: 44,
    15: 47,
    16: 50,
    17: 53,
    18: 56,
    19: 59,
    20: 62
  },
  "Scoria Dragon": {
    elements: ["metal", "earth"],
    1: 5,
    2: 8,
    3: 11,
    4: 15,
    5: 18,
    6: 21,
    7: 24,
    8: 27,
    9: 30,
    10: 33,
    11: 37,
    12: 40,
    13: 43,
    14: 46,
    15: 49,
    16: 52,
    17: 55,
    18: 58,
    19: 62,
    20: 65
  },
  "Sonic Dragon": {
    elements: ["lightning", "air"],
    1: 8,
    2: 12,
    3: 17,
    4: 21,
    5: 26,
    6: 30,
    7: 35,
    8: 39,
    9: 44,
    10: 48,
    11: 53,
    12: 57,
    13: 62,
    14: 66,
    15: 71,
    16: 75,
    17: 80,
    18: 84,
    19: 89,
    20: 93
  },
  "Steel Dragon": {
    elements: ["metal", "cold"],
    1: 5,
    2: 7,
    3: 10,
    4: 13,
    5: 16,
    6: 18,
    7: 21,
    8: 24,
    9: 27,
    10: 30,
    11: 32,
    12: 35,
    13: 38,
    14: 41,
    15: 43,
    16: 46,
    17: 49,
    18: 52,
    19: 54,
    20: 57
  },
  "Thunder Dragon": {
    elements: ["lightning", "air"],
    1: 9,
    2: 14,
    3: 20,
    4: 25,
    5: 30,
    6: 36,
    7: 41,
    8: 46,
    9: 52,
    10: 57,
    11: 62,
    12: 68,
    13: 73,
    14: 78,
    15: 84,
    16: 89,
    17: 94,
    18: 100,
    19: 105,
    20: 110
  },
}
