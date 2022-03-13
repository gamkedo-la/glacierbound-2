class Ray {
    constructor(rayAngle) {
        this.rayAngle = normalizeAngle(rayAngle);
        this.wallHitX = 0;
        this.wallHitY = 0;
        this.distance = 0;
        this.xStep;
        this.yStep;
        this.wasHitVertical = false;

        this.isRayFacingDown = this.rayAngle > 0 && this.rayAngle < Math.PI;
        this.isRayFacingUp = !this.isRayFacingDown;
        this.isRayFacingRight = this.rayAngle < (Math.PI / 2) || this.rayAngle > ((3 * Math.PI) / 2);
        this.isRayFacingLeft = !this.isRayFacingRight;
    }

    cast(columnID){
        var xIntercept, yIntercept;

        //Find Horizontal Intersections
        yIntercept = Math.floor(player.y / TILE_SIZE) * TILE_SIZE
        yIntercept += this.isRayFacingDown ? TILE_SIZE : 0;
        
        xIntercept = player.x + ((yIntercept - player.y) / Math.tan(this.rayAngle));
      
        this.yStep = TILE_SIZE;
        this.yStep *= this.isRayFacingUp ? -1 : 1;

        this.xStep = TILE_SIZE / Math.tan(this.rayAngle);
        this.xStep *= (this.isRayFacingLeft && this.xStep > 0) ? -1 : 1;
        this.xStep *= (this.isRayFacingRight && this.xStep < 0) ? -1 : 1;

        var horWallHitCoord = this.getWallHitCoord(xIntercept, yIntercept);
        
        //Find Vertical Intersections
        xIntercept = Math.floor(player.x / TILE_SIZE) * TILE_SIZE;
        xIntercept += this.isRayFacingRight ? TILE_SIZE : 0;
                
        yIntercept = player.y + ((xIntercept - player.x) * Math.tan(this.rayAngle));
              
        this.xStep = TILE_SIZE;
        this.xStep *= this.isRayFacingLeft ? -1 : 1;
        
        this.yStep = TILE_SIZE * Math.tan(this.rayAngle);
        this.yStep *= (this.isRayFacingUp && this.yStep > 0) ? -1 : 1;
        this.yStep *= (this.isRayFacingDown && this.yStep < 0) ? -1 : 1;
        
        var vertWallHitCoord = this.getWallHitCoord(xIntercept, yIntercept);
        
        //Compare Distances
        var horzHitDistance = (true) ? distanceBetweenPoints(player.x, player.y, horWallHitCoord.x, horWallHitCoord.y) : Number.MAX_VALUE;
        var vertHitDistance = (true) ? distanceBetweenPoints(player.x, player.y, vertWallHitCoord.x, vertWallHitCoord.y) : Number.MAX_VALUE;

        this.wallHitX = horzHitDistance < vertHitDistance ? horWallHitCoord.x : vertWallHitCoord.x;
        this.wallHitY = horzHitDistance < vertHitDistance ? horWallHitCoord.y : vertWallHitCoord.y;
        this.distance = horzHitDistance < vertHitDistance ? horzHitDistance : vertHitDistance;
        this.wasHitVertical = (vertHitDistance < horzHitDistance);
    }

    getWallHitCoord(nextTileEdgeX, nextTileEdgeY){
        var xOffset = this.isRayFacingLeft ? -1 : 0;
        var yOffSet = this.isRayFacingUp ? -1 : 0;
        
        while (true){
            if (mapSection.getTileTypeAtPixelCoord(nextTileEdgeX + xOffset, nextTileEdgeY + yOffSet) === TILE_TYPE_WALL){
                return {
                    'x': nextTileEdgeX,
                    'y': nextTileEdgeY
                };
            } else {
                nextTileEdgeX += this.xStep;
                nextTileEdgeY += this.yStep;
            }
        }
    }

    draw(){
        colorLine(player.x, player.y, this.wallHitX, this.wallHitY, 'blue');
    }
}