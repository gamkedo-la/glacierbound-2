function initMapGameObjects(){
    levelList.forEach(map => map.objects.forEach(function(element) {
        if (element) {
            new GameObject(element.col, element.row, 0, element.spriteSheet, 0, 0.05, 0, map.mapID - 80, element.objectType, element.isLocked, element.lockedMessage, element.keyName, element.functionWhenLocked, element.functionWhenActivated); 
        }
    }) );
}

var ship_80 = {
    grid: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3],
        [ 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 3, 3,17, 3, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 3],
        [20, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3],
        [20, 0, 0, 0, 0, 0, 0,17, 0, 3, 0, 3, 0, 3, 0, 3, 0, 4, 0, 3],
        [20, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4],
        [ 3, 0, 0, 0, 3, 3,17, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 4],
        [ 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 4],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3,81, 4],
        [ 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0,79, 4],
        [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    mapMusicTrack: 'InteriorAmbient',
    floorReflection: true,
    mapID: 80,
    objects: [
        {
            col: 2,
            row: 7,
            spriteSheet: "Map",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.addObjective(OBJECTIVE_FIND_BEACON)}
        },
        {
            col: 0,
            row: 7,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_INTERACTABLE,
            isLocked: true,
            lockedMessage: "I need to find the Artifact before I can leave this planet.",
            keyName: 'Artifact',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        },
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        },
        {
            col: 7,
            row: 7,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "I'd better grab the map from the bridge before setting out.",
            keyName: 'Map',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
    ]
}

var ship_81 = {
    grid: [
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 4],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3,79, 4],
        [ 3, 3,17, 3, 3, 3,17, 3, 3, 3,17, 3, 3, 3,17, 3, 3, 3,80, 4],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [ 3, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [ 3, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
        [ 3, 0, 0, 4, 4, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,83, 4, 4],
        [ 3, 0, 0, 4, 4, 4, 0, 0, 3, 0, 0, 0, 3, 0, 0,18, 3,79, 0, 4],
        [ 3, 0, 0, 4, 4, 4, 0, 3, 3, 3, 0, 3, 3, 3, 0, 5, 5, 5, 5, 5],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [ 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 5],
        [ 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3,82, 5],
        [ 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0,79, 5],
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5]
        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    mapMusicTrack: 'InteriorAmbient',
    floorReflection: true,
    mapID: 81,
    objects: [
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        },
        {
            col: 17,
            row: 6,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "The handle is broken. I'll need to find the wrench in the boiler room to open this.",
            keyName: 'Wrench',
            functionWhenLocked: function() {player.addObjective(OBJECTIVE_FIND_WRENCH)},
            functionWhenActivated: function() {player.removeObjective(OBJECTIVE_EXIT_SHIP);}
        },
         /*
        {
            col: 15,
            row: 6,
            spriteSheet: "Wrench",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
        */
    ]
}

var ship_82 = {
    grid: [
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5],
        [18, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 5],
        [ 3, 3, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 3, 3, 3,79, 5],
        [ 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 3, 0, 0, 0, 0, 3,81, 5],
        [ 5, 0, 3, 0, 0, 5,18, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 5],
        [ 5, 0, 3, 3, 0, 0, 5, 5, 3, 0, 0, 0, 0, 3,18, 0, 0, 5, 5, 5],
        [ 5, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 3, 3, 5, 0, 5, 3, 3],
        [ 3, 3, 3, 3, 0, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [18, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 0, 5, 0, 3],
        [ 5, 5, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 5, 3, 0, 3],
        [ 5, 5, 0, 5, 5, 5, 0, 0, 0, 3, 3, 0, 0, 3, 0, 5, 5, 3, 0, 3],
        [ 5, 0, 0, 5,18, 5, 5, 5, 0, 0, 3, 0, 3, 3, 0, 5,18, 3, 0, 3],
        [ 5, 0, 5, 5, 0, 5, 5, 5, 5, 0, 3, 0, 3, 3, 0, 5, 0, 3, 0, 3],
        [ 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3]        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 16,
    startingTileY: 5,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    mapMusicTrack: 'InteriorAmbient',
    floorReflection: true,
    mapID: 82,
    objects: [
        {
            col: 6,
            row: 13,
            spriteSheet: "Wrench",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.removeObjective(OBJECTIVE_FIND_WRENCH); player.addObjective(OBJECTIVE_EXIT_SHIP);}
        }
    ]
}

var arctic_83 = {
    grid: [
        [ 4, 4, 4, 4, 4,10,10,10,10,10,10,10,10,10, 9, 9, 9, 9, 9, 9],
        [ 4, 0,79, 4, 4,10, 0, 0, 0,10, 0, 0,10,10,11, 9, 9, 0,79, 9],
        [ 3, 3,81, 4, 4, 0, 0, 0,10, 0, 0, 0,10, 0, 0,11, 9, 9,84, 9],
        [ 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 2, 5, 5, 5, 5, 0, 0,10,10, 0, 0, 0, 0, 0, 0, 0,11, 9, 9, 9],
        [ 4, 0, 0, 0, 5, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 9, 9],
        [ 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 9],
        [ 2, 0, 0, 0, 5, 0, 0,10,10, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 9],
        [ 4, 0, 0, 0, 5, 0,10,10,10, 0,14, 0, 0, 0,14, 0, 0, 0, 0, 9],
        [ 4, 0, 0, 0, 5, 0, 0,10,10, 0, 0,14, 0, 0, 0, 0,14,14,14, 9],
        [ 2, 0, 0, 0, 5, 0, 0, 0, 0, 0,14,14, 0,14, 0, 0,14,16,16,16],
        [ 4, 0, 0, 0, 5, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0,17, 0,16],
        [ 4, 0, 0, 0, 5, 0, 0,10, 0, 0, 0, 0,14,14, 0,14,14,16,86,16],
        [ 2, 0, 0, 0, 5,10, 0, 0, 0,14, 0, 0, 0, 0, 0, 0,14, 0,79,15],
        [ 4,10,10,10,10,10,10,10,10,14,14,14,14,14,14,14,14,15,15,15]
        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    mapMusicTrack: 'ExteriorAmbient',
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
            keyName: 'Key',
            functionWhenLocked: function() {player.addObjective(OBJECTIVE_FIND_MINE_KEY);},
            functionWhenActivated: function() {}
        }
    ]
}

var arctic_84 = {
    grid: [
        [14,14,14,14,14,14,14,14,14,14,14,14,14,14,13,11,11,11,11,11],
        [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,13,11, 0,17, 0,11],
        [14, 0,13,13,13,13, 0,13,13,13,13, 0,13, 0, 0, 0, 0,11,85,11],
        [14, 0, 0, 0,14,14, 0,14,14, 0,13, 0,13, 0, 0, 0,11,11,79,11],
        [14, 0,14, 0, 0,14, 0,14, 0, 0,13, 0, 0, 0, 0, 0,14,11, 0, 0],
        [14, 0,14, 0,14,14, 0,14,14, 0,14,14, 0,14, 0, 0,14,11,11,11],
        [14, 0, 0, 0,14, 0, 0, 0,14, 0, 0, 0, 0,14,14, 0, 0,14,14,14],
        [14, 0,13,14,14,14,14,14,14,14,14, 0, 0,14,14,14, 0, 0, 0,14],
        [14, 0,13, 0, 0, 0, 0, 0, 0, 0,13,13, 0, 0, 0, 0, 0, 9, 9,14],
        [14, 0,13, 0, 0, 0,13, 0, 0, 0,13,13, 0,14,14, 0,11, 9, 9, 9],
        [14, 0,13,13, 0,14,14, 0, 0, 0,13,13, 0,14,14, 0, 0, 0, 0, 9],
        [14, 0, 0, 0, 0, 0,14,14,14,14,13,13, 0,14, 0, 0,11, 9,83, 9],
        [14, 0, 0, 9, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0,11, 9,79, 9],
        [14, 0, 9, 9, 9, 0, 9, 0,14,14,14, 9, 0, 0,13,13, 9, 0, 0, 9],
        [14,14,14,14,14,14,14,14,14,14,14, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 2,
    startingTileY: 6,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    mapMusicTrack: 'ExteriorAmbient',
    floorReflection: false,
    mapID: 84,
    objects: [
        {
            col: 8,
            row: 9,
            spriteSheet: "Key",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: "Locked",
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.removeObjective(OBJECTIVE_FIND_MINE_KEY)}
        },
        {
            col: 17,
            row: 1,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: true,
            lockedMessage: "It's jammed shut. Maybe I can find something to pry it open.",
            keyName: 'Crowbar',
            functionWhenLocked: function() {player.addObjective(OBJECTIVE_FIND_CROW_BAR)},
            functionWhenActivated: function() {}
        }
    ]
}

var arctic_85 = {
    grid: [
        [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
        [11, 0,79,11,11, 0, 0, 0, 0, 0, 0,11,11,11,11, 0, 0, 0, 0,11],
        [11,11,84,11, 0, 0, 0,11,11, 0, 0, 0, 0,11, 0, 0, 3, 3, 3, 3],
        [11,11, 0,11, 0, 0,11,11,11,11, 0,11, 0,11, 0, 0, 3,79, 0, 3],
        [11,11, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,11, 0, 0, 3,89, 3, 3],
        [11,11,11,11, 0, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 3, 3],
        [11, 0, 0, 0, 0,11,11, 0, 0,11, 0,11, 0, 0, 0, 0, 3, 3, 3, 3],
        [11, 0,11, 0,11, 0,11,11, 0,11, 0, 0, 0, 0, 0, 0,11,11,11,11],
        [11, 0,11, 0,11, 0, 0, 0, 0, 0, 0, 0,11,11,11, 0, 0, 0, 0,11],
        [11, 0,11, 0,11,11,11,11,11, 0, 0, 0, 0, 0, 0, 0,11, 0,11,11],
        [11, 0,11, 0, 0, 0, 0, 0, 0, 0,11,11, 0, 0, 0, 0, 0, 0, 0,11],
        [11, 0,11, 0,11,11,11,11,11,11, 0, 0,11,11,11,11,11, 0,11,11],
        [11, 0,11, 0,11, 0,11, 0,11, 0,11, 0,11, 0, 0, 0,11, 0, 0,11],
        [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11],
        [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]

    ],
    seenGrid: initSeenGrid(),
    startingTileX: 6,
    startingTileY: 2,
    skyMapName: 'sky_clouds',
    floorMapName: 'floor_snow',
    mapMusicTrack: 'ExteriorAmbient',
    floorReflection: false,
    mapID: 85,
    objects: [
        {
            col: 16,
            row: 5,
            spriteSheet: undefined,
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_DOOR,
            isLocked: false,
            lockedMessage: '',
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
    ]
}

var cave_86 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
        [16, 0, 0,16,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0,79,16],
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
        [16,79, 0,16, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0,16, 0, 0, 0,16],
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_cave',
    floorMapName: 'floor_cave',
    mapMusicTrack: 'cave-music',
    floorReflection: false,
    mapID: 86,
    objects: [
        {
            col: 8,
            row: 9,
            spriteSheet: "Crowbar",
            altitude: 0,
            scale: 0.05,
            angle: 0,
            objectType: OBJECT_TYPE_ITEM,
            isLocked: false,
            lockedMessage: '',
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.removeObjective(OBJECTIVE_FIND_CROW_BAR)}
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
            keyName: 'Lantern',
            functionWhenLocked: function() {player.addObjective(OBJECTIVE_FIND_LANTERN)},
            functionWhenActivated: function() {player.addObjective(OBJECTIVE_FIND_BEACON)}
        }
    ]
}

var cave_87 = {
    grid: [
        [16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,15,15,15,15,15],
        [16, 0, 0,16, 0, 0, 0, 0, 0,16, 0, 0, 0, 0,15, 0, 0, 0,15,15],
        [16, 0,16,16, 0,16,16,16, 0, 0, 0,15,15, 0,15, 0,15,88,15,15],
        [16,79,16, 0, 0,16, 0, 0,16,16, 0,15, 0, 0, 0, 0,15,79, 0,15],
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
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_cave',
    floorMapName: 'floor_cave',
    mapMusicTrack: 'cave-music',
    floorReflection: false,
    mapID: 87,
    objects: []
}

var cave_88 = {
    grid: [
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [15, 0,79,15, 0, 0, 0, 0,15, 0, 0,15, 0, 0, 0,15, 0, 0, 0,15],
        [15,15,87,15,15,15,15, 0, 0,15, 0, 0, 0,15, 0, 0, 0,15, 0,15],
        [15,15, 0, 0, 0,15, 0, 0,15, 0, 0,15,15, 0,15,15,15, 0, 0,15],
        [15, 0,15,15, 0,15, 0,15,15, 0,15, 0,15, 0, 0, 0, 0,15, 0,15],
        [15, 0, 0,15, 0,15, 0, 0, 0, 0,15, 0,15, 0,15,15, 0, 0, 0,15],
        [15, 0,15,15, 0,15,15, 0,15,15,15, 0, 0, 0,15, 0, 0,15, 0,15],
        [15, 0, 0, 0, 0, 0,15, 0,15, 0, 0,16, 0,15, 0,15,15,15,15,15],
        [15, 0,15, 0,15,15, 0, 0, 0,15, 0, 0, 0, 0, 0,15, 4, 4, 4, 4],
        [15, 0,15, 0,15, 0, 0,15, 0, 0,15, 0,15, 0,15, 0, 4,79, 0, 4],
        [15,15, 0, 0,15, 0,15,15, 0,15, 0, 0,15,15, 0, 0, 4,91, 4, 4],
        [15, 0, 0,15, 0, 0,15, 0, 0,15, 0,15,15, 0, 0,15,15, 0,15,15],
        [15,16, 0,15,15,15, 0, 0,15, 0, 0, 0,15, 0,15, 0, 0, 0,15,15],
        [15, 0, 0, 0, 0, 0, 0,15, 0, 0,15, 0, 0, 0, 0, 0,15, 0, 0,15],
        [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_cave',
    floorMapName: 'ffloor_cave',
    mapMusicTrack: 'cave-music',
    floorReflection: false,
    mapID: 88,
    objects: []
}

var lab_89 = {
    grid: [
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [ 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 3,85, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0,79, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3],
        [ 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3],
        [ 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3,79,90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [ 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    mapMusicTrack: 'cave-music',
    floorReflection: false,
    mapID: 89,
    objects: [
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
    ]
}

var lab_90 = {
    grid: [
        [ 3, 3, 3, 3, 3, 5, 0,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 3, 0,89,79, 3, 5, 0,91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
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
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_ship',
    floorMapName: 'floor_ship',
    mapMusicTrack: 'cave-music',
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.removeObjective(OBJECTIVE_FIND_LANTERN)}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: 'Artifact',
            functionWhenLocked: function() {player.addObjective(OBJECTIVE_FIND_LAB_CAVE_ENTERANCE)},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
    ]
}

var lab_91 = {
    grid: [
        [ 4, 4, 4, 4, 4, 4,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 4, 4,88, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [15,15,79,15, 0,15, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0,15],
        [ 0, 0, 0,15,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [15,15, 0, 0,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [15,15,15,15,15,15, 0, 5, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0,15],
        [ 7, 0, 0, 0, 0, 7, 0, 5, 5, 5, 5, 5, 5, 0, 7, 0, 7, 7, 0,15],
        [ 7, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 7, 0, 7, 0, 0, 7, 0, 0, 7, 0, 7, 7, 7, 0, 7, 0, 7, 7,15,15],
        [ 7, 0, 7, 7, 7, 7, 0, 0,15, 0, 0,15, 0, 0,15, 0, 0,15,15,15],
        [ 7, 0, 0, 0, 0, 0, 0, 0,15, 0, 0,15, 0, 0,15, 0, 0,15,15,15],
        [ 7, 7, 7, 7, 0, 5, 0,15,15,15,15,15,15,15,15,15,15,15,15,15],
        [ 7, 0, 0, 0, 0, 5, 0,90,79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,15],
        [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,15]        
    ],
    seenGrid: initSeenGrid(),
    startingTileX: 1,
    startingTileY: 2,
    skyMapName: 'sky_cave',
    floorMapName: 'floor_cave',
    mapMusicTrack: 'cave-music',
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {player.addObjective(OBJECTIVE_RETURN_TO_SHIP);}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: '',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
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
            keyName: 'Artifact',
            functionWhenLocked: function() {},
            functionWhenActivated: function() {}
        }
    ]
}

var levelList = [ship_80, ship_81, ship_82, arctic_83, arctic_84, arctic_85, cave_86, cave_87, cave_88, lab_89, lab_90, lab_91];
var currentRoom = 0;

function initSeenGrid(val = 0) {
    var seenGrid = [];

    for (var row = 0; row < MAP_NUM_ROWS; row++) {
        seenGrid[row] = [];

        for ( var col = 0; col < MAP_NUM_COLS; col++) {
            seenGrid[row][col] = val;
        }
    }

    return seenGrid;
}