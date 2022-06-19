var shipInterior = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 8, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 8, 9, 9, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 9, 0, 8],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 9, 9],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 0,81, 0, 0, 0, 9, 9, 9, 0, 9, 0, 9, 0, 9, 0, 8],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 9, 9],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 9, 0, 8],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 9, 8, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 8, 9, 9, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true
}

var shipExterior = {
    grid: [
        [7, 7, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5],
        [7, 0, 8, 0, 4, 4, 4, 0, 0, 3, 3, 3, 3, 3, 3,82, 3, 0, 0, 5],
        [7, 0, 8, 0, 0, 4, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 5],
        [7, 0, 8, 0, 0, 0, 0, 0, 4, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 7],
        [8, 8, 8, 0, 4, 0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 7],
        [8, 0, 0, 0, 0, 0, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 7],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 7],
        [8,80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7],
        [8, 8, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 7, 7],
        [7, 0, 8, 0, 0, 4, 4, 0, 0, 0, 0, 6, 6, 6, 7, 0, 0, 7, 7, 7],
        [7, 0, 8, 4, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 7, 7, 7],
        [7, 0, 8, 0, 0, 0, 0, 4, 0, 6, 6, 0, 0, 0, 7, 7, 7, 7, 7, 7],
        [7, 0, 8, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
        [7, 0, 8, 0, 4, 4, 0, 0, 0, 6, 0, 7, 7, 7, 0, 0, 0, 7, 7, 7],
        [7, 7, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
    ],
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false
}

var arcticExterior = {
    grid: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4],
        [2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 4, 0, 0, 7, 0, 0,83, 4],
        [2, 0, 6, 0, 6, 0, 0, 6, 6, 6, 0, 6, 4, 0, 0, 0, 0, 4, 4, 4],
        [2, 0, 3, 0, 6, 7, 0, 0, 7, 6, 0, 0, 6, 0, 4, 4, 4, 4, 4, 4],
        [2, 0, 0, 3, 6, 6, 0, 6, 6, 6, 0, 0, 0, 0, 0, 6, 4, 4, 4, 4],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 6, 7, 4, 4, 4],
        [2, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 6, 6, 7, 0, 2],
        [2, 3, 0, 0, 7, 7, 7, 2, 2, 2, 0, 0, 2, 0, 0, 0, 6, 6, 7, 2],
        [2, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 2],
        [2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 6, 6, 6, 6, 5, 5, 6, 5, 2],
        [2, 0, 3, 0, 0, 3, 3, 3, 0, 3, 0, 5, 0, 0, 6, 6, 6, 6, 0, 2],
        [2, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 6, 6, 0, 5, 2],
        [2, 0, 0, 3, 3, 3, 0, 0, 3, 7, 0, 7, 0, 5, 5, 0, 6, 0, 0, 2],
        [2, 3, 0, 0, 3, 0, 0, 0, 7, 7, 0, 7, 7, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 2, 2]
    ],
    startingTileX: 6,
    startingTileY: 2,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false
}

var lab_level_1 = {
    grid: [
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
        [9, 9,80, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 9, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false
}

var empty = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    startingTileX: 0,
    startingTileY: 0,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false
}

var levelList = [shipInterior, shipExterior, arcticExterior, lab_level_1];
var currentRoom = 0;