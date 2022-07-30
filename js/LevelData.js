function initMapGameObjects(){
    levelList.forEach(map => map.objects.forEach(function(element) {
        new GameObject(element.col, element.row, 0, element.spriteSheet, 0, 0.05, 0, map.mapID - 80, element.objectType, element.isLocked, element.lockedMessage, element.keyName); 
    }) );
}

var ship_80 = {
    grid: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3],
        [ 4, 8, 8, 8, 3, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        [ 8, 8, 0, 0, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 0, 0, 0, 3, 3],
        [ 8, 8, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        [ 8, 8, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 0, 3],
        [ 8, 8, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3],
        [ 8, 8, 0, 0, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 0, 0, 0, 0, 4],
        [ 4, 8, 8, 8, 3, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 4],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 4,81, 4],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 0, 4],
        [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]              

    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 80,
    objects: [
        //{
        //    col: 6,
        //    row: 7,
        //    spriteSheet: "Book",
        //    altitude: 0,
        //    scale: 0.05,
        //    angle: 0,
        //    objectType: OBJECT_TYPE_ITEM,
        //    isLocked: false
        //},
        {
            col: 6,
            row: 5,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 5,
            row: 7,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 6,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            keyName: ''
        },
        {
            col: 17,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        }
    ]
}

var ship_81 = {
    grid: [
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 4],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3, 0, 4],
        [ 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4,80, 4],
        [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [ 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [ 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,83, 0, 4],
        [ 4, 0, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4],
        [ 4, 0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 3, 4, 0, 4],
        [ 4, 0, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4],
        [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [ 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 6],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 4,82, 6],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 6],
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6]

    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 81,
    objects: [
        {
            col: 6,
            row: 1,
            spriteSheet: "Fire Extinguisher",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            keyName: ''
        },
        {
            col: 2,
            row: 3,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 6,
            row: 3,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 10,
            row: 3,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 14,
            row: 3,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 16,
            row: 6,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "I need find the wrench in the boiler room to open this.",
            keyName: 'Wrench'
        }
    ]
}

var ship_82 = {
    grid: [
        [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4],
        [18, 0, 0, 5, 0, 5, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 4, 0, 0, 6],
        [ 5, 5, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 4, 4, 0, 6],
        [ 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 4,81, 6],
        [ 5, 0, 5, 0, 0, 5,18, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 6],
        [ 5, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5,18, 0, 0, 6, 6, 6],
        [ 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 5],
        [ 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
        [ 5, 0, 0, 5,18, 5, 0, 0, 0, 0, 5, 0, 5, 0, 5, 0, 0, 5, 0, 5],
        [ 5, 5, 0, 5, 5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5],
        [ 5, 5, 0, 0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 5, 0, 5],
        [ 5, 0, 0, 5, 5, 0, 0, 5, 0, 0, 5, 0, 5, 5, 0, 5,18, 5, 0, 5],
        [ 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 0, 5],
        [ 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

    ],
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: true,
    mapID: 82,
    objects: [
        {
            col: 4,
            row: 12,
            spriteSheet: "Wrench",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        }
    ]
}

var arctic_83 = {
    grid: [
        [ 4, 4, 4, 4, 4,10,10,10,10,10,10,10,10,10, 9, 9, 9, 9, 9, 9],
        [ 4, 0,81, 0, 4, 0, 0, 0, 0,10, 0, 0,10,10, 0, 9, 9, 0, 0, 9],
        [ 4, 4, 4, 0, 4, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 9, 9,84, 9],
        [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 2, 0, 0, 0, 0, 0, 0,10,10, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9],
        [ 4, 0,10,10, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 9, 9],
        [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 9],
        [ 2, 0, 0,10, 0, 0, 0,10,10, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 9],
        [ 4, 0, 0,10,10, 0,10,10,10, 0,14, 0, 0, 0,14, 0, 0, 0, 0, 9],
        [ 4, 0, 0, 0,10,10, 0,10,10, 0, 0,14, 0, 0, 0, 0,14, 0, 0, 9],
        [ 2, 0, 0, 0,10,10, 0, 0, 0, 0,14,14, 0,14, 0, 0,14,16,16,16],
        [ 4, 0,10, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 0,16],
        [ 4, 0, 0, 0,10, 0, 0,10, 0, 0, 0, 0,14,14, 0,14,14,16,86,16],
        [ 2, 0, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0,14, 0, 0,15],
        [ 4,10,10,10,10,10,10,10,10,14,14,14,14,14,14,14,14,15,15,15]

    ],
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 83,
    objects: [
        {
            col: 17,
            row: 11,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "I'll need to find the key to access the cave systems.",
            keyName: 'Key'
        }
    ]
}

var arctic_84 = {
    grid: [
        [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,11,11,11,11,11,11,11],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 0, 0, 0,11],
        [ 9, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0,11,85,11],
        [ 9, 0, 0, 0, 0, 4, 0, 4, 0, 0, 4, 0, 0, 6, 0, 0,11,11, 0,11],
        [ 9, 0, 4, 0, 0, 4, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0,11, 0, 0],
        [ 9, 0, 4, 0, 4, 4, 0, 4, 4, 0, 4, 0, 0, 6, 0, 0, 0,11,11,11],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [ 9, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 6, 0, 6, 0, 0, 0,11],
        [ 9, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [ 9, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 6, 0, 6, 0, 9, 9, 9],
        [ 9, 0, 4, 4, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 6, 0, 0, 0, 9, 0, 9],
        [ 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9,83, 9],
        [ 9, 0, 9, 9, 9, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9],
        [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]        
        
    ],
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 84,
    objects: [
        {
            col: 9,
            row: 10,
            spriteSheet: "Key",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 16,
            row: 1,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "It's blocked. Maybe I can find some explosives somewhere.",
            keyName: 'TNT'
        }
    ]
}

var arctic_85 = {
    grid: [
        [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
        [11, 0, 0,11,11, 0, 0, 0, 0, 0, 0,11,11,11,11, 0, 0, 0, 0,11],
        [11,11,84,11, 0, 0, 0,11,11, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,11],
        [11,11, 0,11, 0, 0,11,11,11,11, 0,11, 0,11, 0, 0, 7, 7, 7, 7],
        [11,11, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,11, 0, 0, 7, 7, 0, 7],
        [11,11,11,11, 0, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,89, 0, 7],
        [11, 0, 0, 0, 0,11,11, 0, 0,11, 0,11, 0, 0, 0, 0, 7, 7, 7, 7],
        [11, 0,11, 0,11, 0,11,11, 0,11, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7],
        [11, 0,11, 0,11, 0, 0, 0, 0, 0, 0, 0,11,11,11, 0, 0, 0, 0,11],
        [11, 0,11, 0,11,11,11,11,11, 0, 0, 0, 0, 0, 0, 0,11, 0,11,11],
        [11, 0,11, 0, 0, 0, 0, 0, 0, 0,11,11, 0, 0, 0, 0, 0, 0, 0,11],
        [11, 0,11, 0,11,11,11,11,11,11, 0, 0,11,11,11,11,11, 0,11,11],
        [11, 0,11, 0,11, 0,11, 0,11, 0,11, 0,11, 0, 0, 0,11, 0, 0,11],
        [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]

    ],
    startingTileX: 6,
    startingTileY: 2,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    floorReflection: false,
    mapID: 85,
    objects: [
        {
            col: 6,
            row: 3,
            spriteSheet: "Map",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        }
    ]
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
    mapID: 86,
    objects: [
        {
            col: 8,
            row: 9,
            spriteSheet: "TNT",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: '',
            keyName: ''
        },
        {
            col: 1,
            row: 11,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "It's getting too dark to continue without a light",
            keyName: 'Lantern'
        }
    ]
}

var cave_87 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,15,15,15,15,15],
        [16, 0, 0,16, 0, 0, 0, 0, 0,16, 0, 0, 0, 0,15, 0, 0, 0,15,15],
        [16, 0,16,16, 0,16,16,16, 0, 0, 0,15,15, 0,15, 0,15,88,15,15],
        [16, 0,16, 0, 0,16, 0, 0,16,16, 0,15, 0, 0, 0, 0,15, 0, 0,15],
        [16,86,16, 0, 0, 0,16, 0, 0, 0, 0,15, 0,15,15,15,15,15,15,15],
        [16, 0, 0, 0,16, 0, 0, 0,16,15, 0, 0, 0, 0, 0,15, 0, 0, 0,15],
        [16,16,16, 0,15,15, 0,15, 0,15,15, 0,16,15, 0,15, 0, 0, 0,15],
        [15, 0, 0, 0, 0, 0, 0,15, 0,15, 0, 0, 0,15,15,15,15,15, 0,15],
        [15,15,15, 0,16,16, 0,15, 0, 0, 0,16, 0, 0, 0, 0, 0,15, 0,15],
        [15, 0, 0, 0,15, 0, 0, 0, 0, 0,16,15,15, 0,15, 0,15,15, 0,15],
        [15, 0,16, 0,15,15, 0,16,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [15, 0,15, 0, 0, 0, 0, 0,15, 0,15,15,15, 0,16, 0,15,15,15,15],
        [15, 0,15,15, 0,15,15, 0,15,15,15, 0, 0, 0,15, 0,15, 0, 0,15],
        [15, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0,15],
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]        
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 87,
    objects: [
        {
            col: 0,
            row: 0,
            spriteSheet: "Map",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        }
    ]
}

var cave_88 = {
    grid: [
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [15, 0, 0,15, 0, 0, 0, 0,15, 0, 0,15, 0, 0, 0,15, 0, 0, 0,15],
        [15,15,87,15,15,15,15, 0, 0,15, 0, 0, 0,15, 0, 0, 0,15, 0,15],
        [15,15, 0, 0, 0,15, 0, 0,15, 0, 0,15,15, 0,15,15,15, 0, 0,15],
        [15, 0,15,15, 0,15, 0,15,15, 0,15, 0,15, 0, 0, 0, 0,15, 0,15],
        [15, 0, 0,15, 0,15, 0, 0, 0, 0,15, 0,15, 0,15,15, 0, 0, 0,15],
        [15, 0,15,15, 0,15,15, 0,15,15,15, 0, 0, 0,15, 0, 0,15, 0,15],
        [15, 0, 0, 0, 0, 0,15, 0,15, 0, 0,16, 0,15, 0,15,15,15,15,15],
        [15, 0,15, 0,15,15, 0, 0, 0,15, 0, 0, 0, 0, 0,15, 4, 4, 4, 4],
        [15, 0,15, 0,15, 0, 0,15, 0, 0,15, 0,15, 0,15, 0, 4, 0, 0, 4],
        [15,15, 0, 0,15, 0,15,15, 0,15, 0, 0,15,15, 0, 0, 4,91, 4, 4],
        [15, 0, 0,15, 0, 0,15, 0, 0,15, 0,15,15, 0, 0,15,15, 0,15,15],
        [15,16, 0,15,15,15, 0, 0,15, 0, 0, 0,15, 0,15, 0, 0, 0,15,15],
        [15, 0, 0, 0, 0, 0, 0,15, 0, 0,15, 0, 0, 0, 0, 0,15, 0, 0,15],
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]        
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 88,
    objects: [
        {
            col: 6,
            row: 3,
            spriteSheet: "Map",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        }
    ]
}

var lab_89 = {
    grid: [
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [ 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 3,85, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0,90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 89,
    objects: [
        {
            col: 1,
            row: 8,
            spriteSheet: "Map",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: '',
            keyName: ''
        },
        {
            col: 9,
            row: 4,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 12,
            row: 6,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        }
        ,
        {
            col: 6,
            row: 6,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 4,
            row: 11,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 6,
            row: 11,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 15,
            row: 10,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 3,
            row: 13,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        }
    ]
}

var lab_90 = {
    grid: [
        [ 3, 3, 3, 3, 3, 5, 0,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 3, 0,89, 0, 3, 5, 0,91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,15],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,15],
        [ 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 3, 0,15],
        [ 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0,15],
        [ 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0,15],
        [ 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0,15],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,15],
        [ 3, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0,15],
        [ 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0,15],
        [ 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0,15],
        [15, 0,15, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0,15],
        [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]        
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 90,
    objects: [
        {
            col: 16,
            row: 10,
            spriteSheet: "Lantern",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: ''
        },
        {
            col: 2,
            row: 4,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 8,
            row: 4,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 14,
            row: 4,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 14,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 8,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 4,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 1,
            row: 12,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "It doesn't seem to open from this side",
            keyName: 'Artifact'
        },
        {
            col: 15,
            row: 11,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        }
    ]
}

var lab_91 = {
    grid: [
        [ 4, 4, 4, 4, 4, 4,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 4, 4,88, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [15,15, 0,15, 0,15, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0,15],
        [ 0, 0, 0,15,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [15,15, 0, 0,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [15,15,15,15,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [ 7, 0, 0, 0, 0, 7, 0, 5, 5, 5, 5, 5, 5, 0, 7, 0, 7, 7, 0,15],
        [ 7, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 7, 0, 7, 0, 0, 7, 0, 0, 7, 0, 7, 7, 7, 0, 7, 0, 7, 7,15,15],
        [ 7, 0, 7, 7, 7, 7, 0, 0,15, 0, 0,15, 0, 0,15, 0, 0,15,15,15],
        [ 7, 0, 0, 0, 0, 0, 0, 0,15, 0, 0,15, 0, 0,15, 0, 0,15,15,15],
        [ 7, 7, 7, 7, 0, 5, 0,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 7, 0, 0, 0, 0, 5, 0,90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,15]        
    ],
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    floorReflection: false,
    mapID: 91,
    objects: [
        {
            col: 9,
            row: 5,
            spriteSheet: "Artifact",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: '',
            keyName: ''
        },
        {
            col: 4,
            row: 12,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 1,
            row: 10,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 9,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 13,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 15,
            row: 9,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 15,
            row: 7,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 13,
            row: 7,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: "",
            keyName: ''
        },
        {
            col: 6,
            row: 12,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "I can't leave without the artifact...",
            keyName: 'Artifact'
        }
    ]
}

var levelList = [ship_80, ship_81, ship_82, arctic_83, arctic_84, arctic_85, cave_86, cave_87, cave_88, lab_89, lab_90, lab_91];
var currentRoom = 0;

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