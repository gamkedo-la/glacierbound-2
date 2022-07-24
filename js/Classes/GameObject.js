class GameObject {
    constructor(col, row, speed, spriteSheet, altitude = 0, scale = 1, angle, mapID, isCollectable = false, isInteractable = false) {
        this.x = mapSection.getTileCenterPixelCoordFromGridCoord(col, row).x;
        this.y = mapSection.getTileCenterPixelCoordFromGridCoord(col, row).y;
        this.mapID = mapID;
        this.direction = angle;
        this.moveSpeed = speed;
        this.altitude = altitude;
        this.scale = scale;
        this.radius = TILE_SIZE;
        this.distanceToPlayer = Infinity;
        this.isDead = false;
        this.spriteName = spriteSheet;
        this.sprite = spriteList[this.spriteName];
        this.spriteData = spriteData[this.spriteName];
        this.timer = 0;
        this.frameCounter = 1;
        this.secondsPerFrame = 0.2
        this.drawnThisFrame = false;
        this.isCollectable = isCollectable;
        this.isInteractable = isInteractable;
        this.isActive = true;
        
        allObjects.push(this);
    }

    update() {
        if (!this.isActive) return;
        if (this.mapID != currentRoom) return;

        this.drawnThisFrame = false;

        this.timer += 1;
        if (this.timer % (60 * this.secondsPerFrame) === 0) {
            this.frameCounter += 1;
        }
        
        this.distanceToPlayer = distanceBetweenPoints(this.x, this.y, player.x, player.y);

        let movePos = getVectorFromAngleAndMagnitude(this.x, this.y, this.direction, this.moveSpeed);
        this.x = movePos[0];
        this.y = movePos[1];

        if (this.distanceToPlayer < this.radius && isMouseDown) {
            this.activate();
        }
    }

    activate() {
        if (!this.isActive) return;

        console.log(this + " Activated");

        if (this.isCollectable){
            inventory.addItem(new Item(0, this.spriteName, 8, 1, 128, 128));
            this.isActive = false;
            console.log("Picked up " + this.spriteName);
        } else if (this.isInteractable){
            if (inventory.containsItem("book_blue_spritesheet")){
                document.location.reload();
            } else {
                //colorText("Item Required", bufferedGameCanvas, bufferedDebugCanvasContext.height / 2, bufferedDebugCanvasContext.height / 2, '20px sans-serif', center, 'white');
                console.log("Iten Required");
            }
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

        if (MINIMAP_ENABLED) colorCircle(this.x * MINIMAP_SCALE_FACTOR, this.y * MINIMAP_SCALE_FACTOR, 5, "green", bufferedDebugCanvasContext);
    }
}