var seenGrid = [
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
];

var ship_80 = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 8, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 8, 9, 9, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0,13],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 9, 0,13],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 9, 9],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 9, 0, 9, 0, 9, 0,13],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0,11,11,11],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 0,11],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0,11, 0,11],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0,11,11,81,11],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0,11, 0, 0,11],
        [0, 0, 0, 9, 9,13, 9,13, 9, 9, 9,13, 9, 9, 9, 9,13,11,11,11],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 80
}

var ship_81 = {
    grid: [
        [11,10,10,10,11, 9,10,10,11,10, 9,10,11,10,10, 9,11,11,11,11],
        [ 8, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0,11],
        [11, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10,11, 0,11],
        [11,10, 0,10,10,10, 0,10,10,10, 0,10,10,10, 0,10,10,11,80,11],
        [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [ 8, 0, 0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11],
        [11, 0, 0,10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,83, 0,11],
        [ 8, 0, 0,10,10,10, 0,10,10,10,10,10,10,10,10,10,10,11, 0,11],
        [11, 0, 0,10, 9, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 9,11, 0,11],
        [ 8, 0, 0,10,10,10, 0,10,10,10, 0,10,10,10, 0,10,10,11,11,11],
        [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [10,10, 0,10,10,10, 0,10,10,10, 0,10,10,10, 0,10,10,11, 0,11],
        [10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10,11,82,11],
        [ 8, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0,11],
        [11,10,10,10,11, 9,10,10,11,10, 9,10,10,10,10, 9,11,11,11,11]

    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 81
}

var ship_82 = {
    grid: [
        [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11],
        [12, 0, 0,12, 0,12, 0, 0, 0, 0,12, 0, 0,12, 0, 0,11, 0, 0,11],
        [12,12, 0,12, 0, 0, 0, 0,12, 0, 0, 0, 0, 0, 0,12,11,11, 0,11],
        [12, 0, 0, 0, 0,12,12,12,12,12,12,12, 0,12, 0, 0, 0,11,81,11],
        [12, 0,12, 0, 0,12, 0, 0, 0, 0, 0,12,12, 0,12,12, 0, 0, 0,11],
        [12, 0,12,12, 0, 0,12,12,12, 0, 0, 0, 0, 0,12, 0, 0,11,11,11],
        [12, 0, 0, 0, 0, 0, 0, 0,12, 0,12,12, 0, 0, 0,12, 0, 0, 0,12],
        [12, 0,12,12, 0,12, 0,12,12, 0, 0, 0,12,12, 0, 0, 0,12, 0,12],
        [12, 0, 0,12,12,12, 0, 0, 0, 0,12, 0,12, 0,12, 0, 0,12, 0,12],
        [12,12, 0,12, 0, 0, 0, 0, 0,12, 0, 0, 0, 0, 0, 0,12,12, 0,12],
        [12,12, 0, 0, 0, 0,12,12, 0,12,12, 0, 0,12, 0, 0, 0, 0, 0,12],
        [12, 0, 0,12,12, 0, 0,12, 0, 0,12, 0,12,12, 0,12,12,12, 0,12],
        [12, 0,12,12, 0,12, 0,12,12, 0,12, 0,12,12, 0,12, 0,12, 0,12],
        [12, 0, 0, 0, 0, 0, 0,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12],
        [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 82
}

var arctic_83 = {
    grid: [
        [14,11,11,11,11, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2],
        [10, 0,81, 0,11, 0, 0, 0, 0, 3, 0, 0, 3, 3, 0, 0, 2, 0, 0, 2],
        [14,11,11, 0,11, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2, 2,84, 2],
        [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2],
        [14, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
        [14, 0, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2, 2],
        [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3],
        [14, 0, 0, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3],
        [14, 0, 0, 3, 3, 0, 3, 3, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3],
        [10, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 6, 0, 0, 3],
        [10, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 0, 3, 0, 0, 6,16,16,16],
        [14, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [10, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 7, 7, 0, 6, 6,16,86,16],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0,16],
        [14, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6,16,16,16,16]
    ],
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 83
}

var arctic_84 = {
    grid: [
        [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4],
        [ 2, 0,14,14,14,14, 0,14,14,14,14, 0, 0, 0, 0, 0, 0, 4, 0, 4],
        [ 2, 0, 0, 0, 0,14, 0,14, 0, 0,14, 0, 0,13, 0, 0, 4, 4,85, 4],
        [ 2, 0,14, 0, 0,14, 0,14, 0, 0,14, 0, 0, 0, 0, 0, 0, 4, 0, 0],
        [ 2, 0,14, 0,14,14, 0,14,14, 0,14, 0, 0,13, 0, 0, 0, 4, 4, 4],
        [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [ 2, 0,14,14,14,14,14,14,14,14,14, 0, 0,13, 0,13, 0, 0, 0, 2],
        [ 2, 0,14, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [ 2, 0,14, 0, 0, 0,10, 0, 0, 0,14, 0, 0,13, 0,13, 0, 2, 2, 2],
        [ 2, 0,14,14, 0,14,14, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [ 2, 0, 0, 0, 0, 0,14,14,14,14,14, 0, 0,13, 0, 0, 0, 2, 0, 2],
        [ 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,83, 2],
        [ 2, 0, 4, 4, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 2, 0, 0, 2],
        [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

    ],
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 84
}

var arctic_85 = {
    grid: [
        [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,10],
        [ 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0,10],
        [ 4, 4, 0, 4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,10],
        [ 4, 4,84, 4, 0, 0, 4, 4, 4, 4, 0, 4, 0, 4, 0, 0,10,10,10,10],
        [ 4, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0,10,10, 0,10],
        [ 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,89, 0,10],
        [ 4, 0, 0, 0, 0, 4, 4, 0, 0, 4, 0, 4, 0, 0, 0, 0,10,10,10,10],
        [ 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0,10,10,10,10],
        [ 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,10],
        [ 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0,10, 0, 4,10],
        [ 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0,10],
        [ 4, 0, 4, 0, 4, 4, 4, 4, 4, 4,10, 0, 4, 4, 4, 4, 4, 0, 4,10],
        [ 4, 0, 4, 0, 4,10,10,10,10,10,10, 0, 4, 0, 0, 0, 4, 0, 0,10],
        [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,10],
        [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,10]

    ],
    startingTileX: 6,
    startingTileY: 2,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 85
}

var cave_86 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [16, 0, 0,16,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0, 0,16],
        [16, 0, 0, 0, 0, 0,16, 0,16,16,16,16,16,16, 0,16,16,16,83,16],
        [16,16, 0,16, 0,16,16, 0,16, 0, 0, 0, 0,16, 0,16, 0, 0, 0,16],
        [16, 0, 0,16, 0, 0,16, 0,16, 0,16,16, 0, 0, 0,16, 0,16,16,16],
        [16,16, 0,16, 0,16,16, 0,16, 0, 0, 0, 0,16,16,16, 0,16, 0,16],
        [16, 0, 0, 0, 0, 0,16, 0,16,16,16,16,16,16, 0, 0, 0, 0, 0,16],
        [16, 0,16,16,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0,16,16,16],
        [16, 0, 0, 0, 0, 0,16,16,16,16,16,16, 0,16, 0, 0, 0, 0,16,16],
        [16,16,16, 0,16, 0, 0, 0, 0,16, 0, 0, 0,16, 0,16,16, 0,16,16],
        [16, 0, 0, 0,16,16, 0,16,16,16, 0,16, 0,16, 0, 0,16, 0, 0,16],
        [16, 0,16,16, 0, 0,16,16, 0,16, 0,16,16,16,16, 0, 0,16, 0,16],
        [16,87,16,16, 0,16, 0,16, 0,16, 0,16, 0, 0, 0,16,16,16, 0,16],
        [16, 0, 0,16, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0,16, 0, 0, 0,16],
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]

    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 86
}

var cave_87 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [16, 0, 0,16, 0, 0, 0, 0, 0,16, 0, 0, 0, 0,16, 0, 0, 0,16,16],
        [16, 0,16,16, 0,16,16,16, 0, 0, 0,16,16, 0,16, 0,16,88,16,16],
        [16, 0,16, 0, 0,16, 0, 0,16,16, 0,16, 0, 0, 0, 0,16, 0, 0,16],
        [16,86,16, 0, 0, 0,16, 0, 0, 0, 0,16, 0,16,16,16,16,16,16,16],
        [16, 0, 0, 0,16, 0, 0, 0,16,16, 0, 0, 0, 0, 0,16, 0, 0, 0,16],
        [16,16,16, 0,16,16, 0,16, 0,16,16, 0,16,16, 0,16, 0, 0, 0,16],
        [16, 0, 0, 0, 0, 0, 0,16, 0,16, 0, 0, 0,16,16,16,16,16, 0,16],
        [16,16,16, 0,16,16, 0,16, 0, 0, 0,16, 0, 0, 0, 0, 0,16, 0,16],
        [16, 0, 0, 0,16, 0, 0, 0, 0, 0,16,16,16, 0,16, 0,16,16, 0,16],
        [16, 0,16, 0,16,16, 0,16,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [16, 0,16, 0, 0, 0, 0, 0,16, 0,16,16,16, 0,16, 0,16,16,16,16],
        [16, 0,16,16, 0,16,16, 0,16,16,16, 0, 0, 0,16, 0,16, 0, 0,16],
        [16, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0,16],
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]

    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 87
}

var cave_88 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [16, 0, 0,16, 0, 0, 0, 0,16, 0, 0,16, 0, 0, 0,16, 0, 0, 0,16],
        [16,16,87,16,16,16,16, 0, 0,16, 0, 0, 0,16, 0, 0, 0,16, 0,16],
        [16,16, 0, 0, 0,16, 0, 0,16, 0, 0,16,16, 0,16,16,16, 0, 0,16],
        [16, 0,16,16, 0,16, 0,16,16, 0,16, 0,16, 0, 0, 0, 0,16, 0,16],
        [16, 0, 0,16, 0,16, 0, 0, 0, 0,16, 0,16, 0,16,16, 0, 0, 0,16],
        [16, 0,16,16, 0,16,16, 0,16,16,16, 0, 0, 0,16, 0, 0,16, 0,16],
        [16, 0, 0, 0, 0, 0,16, 0,16, 0, 0,16, 0,16, 0,16,16,16,16,16],
        [16, 0,16, 0,16,16, 0, 0, 0,16, 0, 0, 0, 0, 0,16,10,10,10,10],
        [16, 0,16, 0,16, 0, 0,16, 0, 0,16, 0,16, 0,16, 0,10, 0, 0,10],
        [16,16, 0, 0,16, 0,16,16, 0,16, 0, 0,16,16, 0, 0,10,91,10,10],
        [16, 0, 0,16, 0, 0,16, 0, 0,16, 0,16,16, 0, 0,16,16, 0,16,16],
        [16,16, 0,16,16,16, 0, 0,16, 0, 0, 0,16, 0,16, 0, 0, 0,16,16],
        [16, 0, 0, 0, 0, 0, 0,16, 0, 0,16, 0, 0, 0, 0, 0,16, 0, 0,16],
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]


    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 88
}

var lab_89 = {
    grid: [
        [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [ 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 9,85, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [ 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 9, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 9],
        [ 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0,90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 89
}

var lab_90 = {
    grid: [
        [ 9, 9, 9, 9, 9,12, 0,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [ 9, 0,89, 0, 9,12, 0,91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [ 9, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0,16],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0,16],
        [ 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 0,16],
        [ 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 9, 0,16],
        [ 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 9, 0,16],
        [ 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 0,16],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0,16],
        [ 9, 9, 9, 9, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 9, 0,16],
        [ 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 9, 0,16],
        [ 9, 0, 9, 0, 0, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 9, 0,16],
        [16, 0,16, 9, 9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 0,16],
        [16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]

    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 90
}

var lab_91 = {
    grid: [
        [10,10,10,10,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [10,10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [10,10,88,10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [16,16, 0,16, 0,16, 0,12,12,12,12,12,12,12,12,12,12,12, 0,16],
        [ 0, 0, 0,16,16,16, 0,12, 0, 0, 0, 0, 0, 0,12, 0, 0,12, 0,16],
        [16,16, 0, 0,16,16, 0,12, 0, 0, 0, 0, 0, 0,12, 0, 0,12, 0,16],
        [16,16,16,16,16,16, 0,12, 0, 0, 0, 0, 0, 0,12, 0, 0,12, 0,16],
        [12, 0, 0, 0, 0,12, 0,12,12,12,12,12,12, 0,12, 0,12,12, 0,16],
        [12, 0,12, 0, 0,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [12, 0,12, 0, 0,12, 0, 0,12, 0,12,12,12, 0,12, 0,12,12,16,16],
        [12, 0,12,12,12,12, 0, 0,16, 0, 0,16, 0, 0,16, 0, 0,16,16,16],
        [12, 0, 0, 0, 0, 0, 0, 0,16, 0, 0,16, 0, 0,16, 0, 0,16,16,16],
        [12,12,12,12, 0,12, 0,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [12, 0, 0, 0, 0,12, 0,90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0,16]



    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 91
}

var empty = {
    grid: [
        [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14],
        [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]
    ],
    startingTileX: 0,
    startingTileY: 0,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false
}

var levelList = [ship_80, ship_81, ship_82, arctic_83, arctic_84, arctic_85, cave_86, cave_87, cave_88, lab_89, lab_90, lab_91];
var currentRoom = 0;