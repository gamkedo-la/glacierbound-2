class Ray {
    constructor(rayAngle) {
        this.rayAngle = normalizeAngle(rayAngle);

        this.isRayFacingDown = this.rayAngle > 0 && this.rayAngle < Math.PI;
        this.isRayFacingUp = !this.isRayFacingDown;
        this.isRayFacingRight = this.rayAngle < (Math.PI / 2) || this.rayAngle > ((3 * Math.PI) / 2);
        this.isRayFacingLeft = !this.isRayFacingRight;

        this.horWallHitCoord = this.getHorWallHitCoord();
        this.vertWallHitCoord = this.getVertWallHitCoord();
        this.closestWallHitCoord = this.getClosestWallHitCoord(this.horWallHitCoord, this.vertWallHitCoord);
        this.distance = distanceBetweenPoints(player.x, player.y, this.closestWallHitCoord.x, this.closestWallHitCoord.y);
    }

    getHorWallHitCoord(){
        var yIntercept = Math.floor(player.y / TILE_SIZE) * TILE_SIZE
        yIntercept += this.isRayFacingDown ? TILE_SIZE : 0;

        var xIntercept = player.x + ((yIntercept - player.y) / Math.tan(this.rayAngle));

        var yStep = TILE_SIZE;
        yStep *= this.isRayFacingUp ? -1 : 1;

        var xStep = TILE_SIZE / Math.tan(this.rayAngle);
        xStep *= (this.isRayFacingLeft && xStep > 0) ? -1 : 1;
        xStep *= (this.isRayFacingRight && xStep < 0) ? -1 : 1;

        return this.getWallHitCoord(xIntercept, yIntercept, xStep, yStep);
    }

    getVertWallHitCoord(){
        var xIntercept = Math.floor(player.x / TILE_SIZE) * TILE_SIZE;
        xIntercept += this.isRayFacingRight ? TILE_SIZE : 0;
        
        var yIntercept = player.y + ((xIntercept - player.x) * Math.tan(this.rayAngle));
      
        var xStep = TILE_SIZE;
        xStep *= this.isRayFacingLeft ? -1 : 1;

        var yStep = TILE_SIZE * Math.tan(this.rayAngle);
        yStep *= (this.isRayFacingUp && yStep > 0) ? -1 : 1;
        yStep *= (this.isRayFacingDown && yStep < 0) ? -1 : 1;

        return this.getWallHitCoord(xIntercept, yIntercept, xStep, yStep);
    }

    getWallHitCoord(nextTileEdgeX, nextTileEdgeY, xStep, yStep){
        var xOffset = this.isRayFacingLeft ? -1 : 0;
        var yOffSet = this.isRayFacingUp ? -1 : 0;
        
        while (true){
            if (mapSection.getTileTypeAtPixelCoord(nextTileEdgeX + xOffset, nextTileEdgeY + yOffSet) === TILE_TYPE_WALL){
                return {
                    'x': nextTileEdgeX,
                    'y': nextTileEdgeY
                };
            } else {
                nextTileEdgeX += xStep;
                nextTileEdgeY += yStep;
            }
        }
    }

    getClosestWallHitCoord(horWallHitCoord, vertWallHitCoord){
        var horzHitDistance = distanceBetweenPoints(player.x, player.y, horWallHitCoord.x, horWallHitCoord.y);
        var vertHitDistance = distanceBetweenPoints(player.x, player.y, vertWallHitCoord.x, vertWallHitCoord.y);

        return horzHitDistance < vertHitDistance ? horWallHitCoord : vertWallHitCoord;
    }

    draw(){
        colorLine(player.x, player.y, this.closestWallHitCoord.x, this.closestWallHitCoord.y, 'red', MINIMAP_SCALE_FACTOR);
    }
}