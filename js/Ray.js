class Ray {
    constructor(rayAngle) {
        this.rayAngle = normalizeAngle(rayAngle);
        this.wallHitX = 0;
        this.wallHitY = 0;
        this.distance = 0;
        this.wasHitVertical = false;

        this.isRayFacingDown = this.rayAngle > 0 && this.rayAngle < Math.PI;
        this.isRayFacingUp = !this.isRayFacingDown;
        this.isRayFacingRight = this.rayAngle < (Math.PI / 2) || this.rayAngle > ((3 * Math.PI) / 2);
        this.isRayFacingLeft = !this.isRayFacingRight;
    }

    cast(columnID){
        var xIntercept, yIntercept;
        var xStep, yStep;
        
        //Find Horizontal Intersections
        var foundHorzWallHit = false;
        var HorWallHitX = 0;
        var HorWallHitY = 0;

        yIntercept = Math.floor(player.y / TILE_SIZE) * TILE_SIZE
        yIntercept += this.isRayFacingDown ? TILE_SIZE : 0;
        
        xIntercept = player.x + ((yIntercept - player.y) / Math.tan(this.rayAngle));
      
        yStep = TILE_SIZE;
        yStep *= this.isRayFacingUp ? -1 : 1;

        xStep = TILE_SIZE / Math.tan(this.rayAngle);
        xStep *= (this.isRayFacingLeft && xStep > 0) ? -1 : 1;
        xStep *= (this.isRayFacingRight && xStep < 0) ? -1 : 1;

        var nextHorzTouchX = xIntercept;
        var nextHorzTouchY = yIntercept;

        while (isCoordWithinMapGrid(nextHorzTouchX, nextHorzTouchY)){
            if (mapSection.getTileTypeAtPixelCoord(nextHorzTouchX, nextHorzTouchY - (this.isRayFacingUp ? 1 : 0)) === TILE_TYPE_WALL){
                foundHorzWallHit = true;
                HorWallHitX = nextHorzTouchX;
                HorWallHitY = nextHorzTouchY;
                break
            } else {
                nextHorzTouchX += xStep;
                nextHorzTouchY += yStep;
            }
        }

        //Find Vertical Intersections
        var foundVertWallHit = false;
        var vertWallHitX = 0;
        var vertWallHitY = 0;
        
        xIntercept = Math.floor(player.x / TILE_SIZE) * TILE_SIZE;
        xIntercept += this.isRayFacingRight ? TILE_SIZE : 0;
                
        yIntercept = player.y + ((xIntercept - player.x) * Math.tan(this.rayAngle));
              
        xStep = TILE_SIZE;
        xStep *= this.isRayFacingLeft ? -1 : 1;
        
        yStep = TILE_SIZE * Math.tan(this.rayAngle);
        yStep *= (this.isRayFacingUp && yStep > 0) ? -1 : 1;
        yStep *= (this.isRayFacingDown && yStep < 0) ? -1 : 1;
        
        var nextVertTouchX = xIntercept;
        var nextVertTouchY = yIntercept;
        
        while (isCoordWithinMapGrid(nextVertTouchX, nextVertTouchY)){
            if (mapSection.getTileTypeAtPixelCoord(nextVertTouchX - (this.isRayFacingLeft ? 1 : 0), nextVertTouchY) === TILE_TYPE_WALL){
                foundVertWallHit = true;
                vertWallHitX = nextVertTouchX;
                vertWallHitY = nextVertTouchY;
                break;
            } else {
                nextVertTouchX += xStep;
                nextVertTouchY += yStep;
            }
        }

        var horzHitDistance = (foundHorzWallHit) ? distanceBetweenPoints(player.x, player.y, HorWallHitX, HorWallHitY) : Number.MAX_VALUE;
        var vertHitDistance = (foundVertWallHit) ? distanceBetweenPoints(player.x, player.y, vertWallHitX, vertWallHitY) : Number.MAX_VALUE;

        this.wallHitX = horzHitDistance < vertHitDistance ? HorWallHitX : vertWallHitX;
        this.wallHitY = horzHitDistance < vertHitDistance ? HorWallHitY : vertWallHitY;
        this.distance = horzHitDistance < vertHitDistance ? horzHitDistance : vertHitDistance;
        this.wasHitVertical = (vertHitDistance < horzHitDistance);
    }

    draw(){
        colorLine(player.x, player.y, this.wallHitX, this.wallHitY, 'blue');
    }
}