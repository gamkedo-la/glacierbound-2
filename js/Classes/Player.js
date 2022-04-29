class Player {
    constructor() {
        this.x = TILE_SIZE * 6;
        this.y = TILE_SIZE * 5;
        this.turnDirection = NEUTRAL;
        this.walkDirection = NEUTRAL;
        this.stepLeft = false;
        this.stepRight = false;
        this.radius = TILE_SIZE/4;
        this.moveSpeed = 1; // pixels/frame
        this.rotationSpeed = degreesToRadians(3); //degrees converted to radians/frame
        this.rotationAngle = degreesToRadians(90); //degrees converted to radians
        this.rayCaster;
    }

    update() {
        this.rotationAngle += this.rotationSpeed * this.turnDirection;
        this.rotationAngle = normalizeAngle(this.rotationAngle);
        
        let nextX = this.x + Math.cos(this.rotationAngle) * this.moveSpeed * this.walkDirection;
        let nextY = this.y + Math.sin(this.rotationAngle) * this.moveSpeed * this.walkDirection;

        // side stepping (strafe)
        if (this.stepLeft) nextX -= Math.cos(this.rotationAngle+(Math.PI/2)) * this.moveSpeed;
        if (this.stepRight) nextX += Math.cos(this.rotationAngle+(Math.PI/2)) * this.moveSpeed;

        if (mapSection.getTileTypeAtPixelCoord(this.x, nextY) === TILE_TYPE_FLOOR) {
            this.y = nextY;
        }
        if (mapSection.getTileTypeAtPixelCoord(nextX, this.y) === TILE_TYPE_FLOOR) {
            this.x = nextX;
        }

        this.rayCaster = new RayCaster(player.rotationAngle);
    }

    draw() {
        this.rayCaster.draw();
        colorCircle(this.x, this.y, this.radius, 'red', bufferedDebugCanvasContext, MINIMAP_SCALE_FACTOR);
        colorLineAtAngle(this.x, this.y, this.rotationAngle, this.radius * 2, 'red', bufferedDebugCanvasContext, MINIMAP_SCALE_FACTOR)
    }
}