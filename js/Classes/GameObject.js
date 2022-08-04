class GameObject {
    constructor(col, row, speed, spriteSheet, altitude = 0, scale = 1, angle, mapID, objectType, isLocked, lockedMessage, keyName) {
        this.col = col;
        this.row = row;
        this.x = mapSection.getTileCenterPixelCoordFromGridCoord(col, row).x;
        this.y = mapSection.getTileCenterPixelCoordFromGridCoord(col, row).y;
        this.mapID = mapID;
        this.direction = angle;
        this.moveSpeed = speed;
        this.altitude = altitude;
        this.scale = scale;
        this.radius = TILE_SIZE * 1.5;
        this.distanceToPlayer = Infinity;
        this.isDead = false;
        this.spriteName = spriteSheet;
        this.sprite = spriteList[this.spriteName];
        this.spriteData = spriteData[this.spriteName];
        this.timer = 0;
        this.frameCounter = 1;
        this.secondsPerFrame = 0.2
        this.drawnThisFrame = false;
        this.isActive = true;
        this.objectType = objectType;
        this.miniMapColor = (this.objectType === OBJECT_TYPE_DOOR) ? 'green' : 'yellow';
        this.isLocked = isLocked;
        this.lockedMessage = lockedMessage;
        this.keyName = keyName;
        this.opened = false;

        if (this.objectType == OBJECT_TYPE_DOOR && this.mapID == currentRoom) {
            mapSection.setTileTypeAtGridCoord(this.col, this.row, 17);
        }
        
        allObjects.push(this);
    }

    update() {
        if (!this.isActive) return;
        if (this.mapID != currentRoom) return;

        if (this.objectType == OBJECT_TYPE_DOOR && this.opened == false) {
            mapSection.setTileTypeAtGridCoord(this.col, this.row, 17);
        }

        this.drawnThisFrame = false;

        this.timer += 1;
        if (this.timer % (60 * this.secondsPerFrame) === 0) {
            this.frameCounter += 1;
        }
        
        this.distanceToPlayer = distanceBetweenPoints(this.x, this.y, player.x, player.y);

        let movePos = getVectorFromAngleAndMagnitude(this.x, this.y, this.direction, this.moveSpeed);
        this.x = movePos[0];
        this.y = movePos[1];

        if (this.distanceToPlayer < this.radius && (isMouseDown || activationPending)) {
            activationPending = false;
            this.activate();
        }
    }

    activate() {
        if (!this.isActive) return;
        console.log(this + " Activated");

        switch(this.objectType) {

            case OBJECT_TYPE_ITEM:
                inventory.addItem(new Item(0, this.spriteName, 8, 1, 128, 128));
                textDisplay.setText("Picked up " + this.spriteName);
                this.isActive = false;
                break;

            case OBJECT_TYPE_DOOR:
                if (this.isLocked) {
                    if (inventory.containsItem(this.keyName)){
                        this.isLocked = false;
                        mapSection.setTileTypeAtGridCoord(this.col, this.row, TILE_TYPE_FLOOR);
                        this.opened = true;
                    } else {
                        textDisplay.setText(this.lockedMessage);
                    }
                } else {
                    mapSection.setTileTypeAtGridCoord(this.col, this.row, TILE_TYPE_FLOOR);
                    this.opened = true;
                }
                break;
            case OBJECT_TYPE_INTERACTABLE:
                if (this.isLocked) {
                    if (inventory.containsItem(this.keyName)){
                        this.isLocked = false;
                        this.opened = true;
                        gameStarted = false;
                        showingEndingText = true;
                    } else {
                        textDisplay.setText(this.lockedMessage);
                    }
                } else {
                    textDisplay.setText("Activated");
                    this.opened = true;
                    gameStarted = false;
                    showingEndingText = true;
                    this.isLocked = true;
                }
                break;
        }
    }

    draw() {
        if (typeof this.spriteName === 'undefined') return;
        if (!this.isActive) return;
        if (this.mapID != currentRoom) return;
        if (this.drawnThisFrame) return;

        var dist = distanceBetweenPoints(this.x, this.y, player.x, player.y);
        var drawAngle = Math.atan2(this.y - player.y, this.x - player.x) - player.rotationAngle;
        var size = Math.cos(drawAngle);
        if (size <= Math.cos(FOV_RADS)) return;

        var drawHeight = (this.spriteData.h / dist) * PROJECTION_PLAIN_DISTANCE * this.scale;
        var drawWidth = (this.spriteData.w / this.spriteData.h) * drawHeight;
        var drawX = (bufferedGameCanvas.width / 2) + (Math.tan(drawAngle) * PROJECTION_PLAIN_DISTANCE);

        bufferedGameCanvasContext.drawImage(
            this.sprite, //image
            spriteData[this.spriteName].w * (this.frameCounter % spriteData[this.spriteName].frames), //sx
            0, //sy
            spriteData[this.spriteName].w, //sW
            spriteData[this.spriteName].h, //sH
            (drawX - drawWidth / 2), //dx
            (bufferedGameCanvas.height / 2) - (drawHeight / 2), //dy
            drawWidth, //dW
            drawHeight //dH
        );

        this.drawnThisFrame = true;
    }

    draw2D() {
        if (!this.isActive) return;
        if (this.mapID != currentRoom) return;

        if (MINIMAP_ENABLED) colorCircle(this.x * mapSection.miniMapScaleFactor, this.y * mapSection.miniMapScaleFactor, 5, this.miniMapColor, bufferedDebugCanvasContext);
    }
}