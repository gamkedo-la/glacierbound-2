class Player {
    constructor() {
        this.x = TILE_SIZE * 1.5;
        this.y = TILE_SIZE * 1.5;
        this.turnDirection = NEUTRAL;
        this.walkDirection = NEUTRAL;
        this.radius = TILE_SIZE/4;
        this.moveSpeed = 2.0; // pixels/frame
        this.rotationSpeed = degreesToRadians(3); //degrees converted to radians/frame
        this.rotationAngle = degreesToRadians(90); //degrees converted to radians
    }

    update() {
        this.rotationAngle += this.rotationSpeed * this.turnDirection;
        let nextX = this.x + Math.cos(this.rotationAngle) * this.moveSpeed * this.walkDirection;
        let nextY = this.y + Math.sin(this.rotationAngle) * this.moveSpeed * this.walkDirection;

        if (mapSection.getTileTypeAtPixelCoord(this.x, nextY) === TILE_TYPE_FLOOR) {
            this.y = nextY;
        }
        if (mapSection.getTileTypeAtPixelCoord(nextX, this.y) === TILE_TYPE_FLOOR) {
            this.x = nextX;
        }
    }

    draw() {
        //this.rays.forEach(element => element.draw());
        colorCircle(this.x, this.y, this.radius, 'red', MINIMAP_SCALE_FACTOR);
        colorLineAtAngle(this.x, this.y, this.rotationAngle, this.radius * 2, 'red', MINIMAP_SCALE_FACTOR)
    }

}
/*
    castAllRays() {
        var rayAngle = this.rotationAngle - (FOV_RADS / 2);
        this.rays = [];

        for (var i = 0; i < NUM_OF_RAYS; i++) {
            var ray = new Ray(this, rayAngle);
            ray.columnID = i;
            ray.cast();
            this.rays.push(ray);

            rayAngle += RAY_ANGLE_INCREMENT;
        }

        //re-sorts list of rays from furthest to closest to the player
        this.rays.sort((a, b) => (a.distance < b.distance) ? 1 : -1);
    }
}
*/