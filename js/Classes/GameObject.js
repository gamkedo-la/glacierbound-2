class GameObject {
    constructor(x, y, speed, spriteSheet, altitude = 0, scale = 1, angle) {
        this.x = x;
        this.y = y;
        this.direction = angle;
        this.moveSpeed = speed;
        this.altitude = altitude;
        this.spriteSheet = spriteSheet;
        this.scale = scale;
        this.radius = (this.scale * TILE_SIZE / 2) - 6;
        this.distanceToPlayer = Infinity;
        this.isDead = false;
        this.animTimer = 0;
        this.renderedThisFrame = false;
        this.pic = spriteList[0];

        objectsToUpdate.push(this);
    }

    update() {
        this.distanceToPlayer = distanceBetweenPoints(this.x, this.y, player.x, player.y);

        let movePos = getPixelCoordFromAngleAndSpeed(this.x, this.y, this.direction, this.moveSpeed);
        this.x = movePos[0];
        this.y = movePos[1];

        if (this.distanceToPlayer < this.radius && isMouseDown) {
            this.activate();
        }
    }

    activate(){
        console.log(this + " Activated");
    }

    draw() {
        if (!this.renderedThisFrame) {
            var dist = distanceBetweenPoints(this.x, this.y, player.x, player.y);
            var drawAngle = Math.atan2(this.y - player.y, this.x - player.x) - player.rotationAngle;
            var size = Math.cos(drawAngle);
            if (size <= Math.cos(FOV_RADS)) return;

            var drawHeight = (TILE_SIZE / dist) * PROJECTION_PLAIN_DISTANCE;
            var drawWidth = (100 / 100) * drawHeight;
            var drawX = bufferedGameCanvas.width / 2 + Math.tan(drawAngle) * PROJECTION_PLAIN_DISTANCE;
        
            bufferedGameCanvasContext.drawImage(spriteList['ice_wall'], 0, 0, 32, 32, drawX - drawWidth / 2, (bufferedGameCanvas.height / 2) - (drawHeight / 2), drawWidth /2, drawHeight /2);
            this.renderedThisFrame = true;
        }
    }

    draw2D() {
        colorCircle(this.x * MINIMAP_SCALE_FACTOR, this.y * MINIMAP_SCALE_FACTOR, this.radius * MINIMAP_SCALE_FACTOR, "yellow", bufferedDebugCanvasContext);
    }
}