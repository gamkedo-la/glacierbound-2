class Ray {
    constructor(rayAngle, id) {
        this.rayAngle = normalizeAngle(rayAngle);
        this.id = id;
        this.drawnThisFrame = false;

        this.isRayFacingDown = this.rayAngle > 0 && this.rayAngle < Math.PI;
        this.isRayFacingUp = !this.isRayFacingDown;
        this.isRayFacingRight = this.rayAngle < (Math.PI / 2) || this.rayAngle > ((3 * Math.PI) / 2);
        this.isRayFacingLeft = !this.isRayFacingRight;

        this.xOffset = this.isRayFacingLeft ? -1 : 0;
        this.yOffset = this.isRayFacingUp ? -1 : 0;

        this.horWallHitCoord = this.getHorWallHitCoord();
        this.vertWallHitCoord = this.getVertWallHitCoord();
        this.closestWallHitCoord = this.getClosestWallHitCoord(this.horWallHitCoord, this.vertWallHitCoord);
        this.distance = distanceBetweenPoints(player.x, player.y, this.closestWallHitCoord.x, this.closestWallHitCoord.y);

        this.tileTypeHit = mapSection.getTileTypeAtPixelCoord(this.closestWallHitCoord.x + this.xOffset, this.closestWallHitCoord.y + this.yOffset);
        this.gridCoord = mapSection.getGridCoordFromPixelCoord(this.closestWallHitCoord.x + this.xOffset, this.closestWallHitCoord.y + this.yOffset)
        if (levelList[currentRoom].seenGrid[this.gridCoord.row][this.gridCoord.col] != 1){
            mapSection.minimapIsDirty = true;
            //seenGrid[this.gridCoord.row][this.gridCoord.col];
        }

        if (this.distance < mapSection.minimapDrawDistance) levelList[currentRoom].seenGrid[this.gridCoord.row][this.gridCoord.col] = 1;
        this.wallStripTexture = wallTexturesFlat[this.tileTypeHit - 1];

        //quick solution to minimap floor drawing bug is to just run these functions once more after this.distance is calculated.
        this.getVertWallHitCoord();
        this.getHorWallHitCoord();
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
        while (true){
            if (mapSection.getTileTypeAtPixelCoord(nextTileEdgeX + this.xOffset, nextTileEdgeY + this.yOffset) != TILE_TYPE_FLOOR &&
                mapSection.getTileTypeAtPixelCoord(nextTileEdgeX + this.xOffset, nextTileEdgeY + this.yOffset) < 79) { //make constant
                return {
                    'x': nextTileEdgeX,
                    'y': nextTileEdgeY
                };
            } else {

                if (distanceBetweenPoints(player.x, player.y, nextTileEdgeX, nextTileEdgeY) < (mapSection.minimapDrawDistance - TILE_SIZE) &&
                    distanceBetweenPoints(player.x, player.y, nextTileEdgeX, nextTileEdgeY) < this.distance){
                    var coord = mapSection.getGridCoordFromPixelCoord(nextTileEdgeX + this.xOffset, nextTileEdgeY + this.yOffset);
                    levelList[currentRoom].seenGrid[coord.row][coord.col] = 1;
                }

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
        if (MINIMAP_ENABLED) colorLine(player.x, player.y, this.closestWallHitCoord.x, this.closestWallHitCoord.y, 'red', bufferedDebugCanvasContext, mapSection.miniMapScaleFactor);
    }
}