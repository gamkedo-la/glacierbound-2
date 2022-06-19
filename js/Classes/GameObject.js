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
        
    }

    draw2D() {
        colorCircle(this.x * MINIMAP_SCALE_FACTOR, this.y * MINIMAP_SCALE_FACTOR, this.radius * MINIMAP_SCALE_FACTOR, "yellow", bufferedDebugCanvasContext);
    }
}