class GameObject {
    constructor(x, y, speed, spriteSheet, altitude = 0, scale = 1, angle) {
        this.x = x;
        this.y = y;
        this.direction = angle;
        this.moveSpeed = speed;
        this.altitude = altitude;
        this.scale = scale;
        this.radius = (this.scale * TILE_SIZE / 2) - 6;
        this.distanceToPlayer = Infinity;
        this.isDead = false;
        this.spriteName = spriteSheet
        this.sprite = spriteList[this.spriteName];
        this.spriteData = spriteData[this.spriteName];
        this.timer = 0;
        this.frameCounter = 1;
        this.secondsPerFrame = 0.2
        
        allObjects.push(this);
    }

    update() {

        this.timer += 1;
        if (this.timer % (60 * this.secondsPerFrame) === 0) {
            this.frameCounter += 1;
        }
        

        this.distanceToPlayer = distanceBetweenPoints(this.x, this.y, player.x, player.y);

        let movePos = getPixelCoordFromAngleAndSpeed(this.x, this.y, this.direction, this.moveSpeed);
        this.x = movePos[0];
        this.y = movePos[1];

        if (this.distanceToPlayer < this.radius && isMouseDown) {
            this.activate();
        }
    }

    activate() {
        console.log(this + " Activated");
    }

    draw() {
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
    }

    draw2D() {
        if (MINIMAP_ENABLED) colorCircle(this.x * MINIMAP_SCALE_FACTOR, this.y * MINIMAP_SCALE_FACTOR, this.radius * MINIMAP_SCALE_FACTOR, "green", bufferedDebugCanvasContext);
    }
}