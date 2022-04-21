class MapSection {
    constructor() {
        this.grid = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ]
    }

    // this is not perspective correct so it would not work for floors
    // but we can assume the sky is infinitely far away
    // for simple math and very fast performance
    drawSkyPanorama(){
        var imgW = spriteList['sky_clouds'].width;
        var skyW = bufferedGameCanvasContext.canvas.width;
        var skyH = Math.round(bufferedGameCanvasContext.canvas.height/2);
        var skyX = -(player.rotationAngle)/(Math.PI*2)*imgW-imgW/2+skyW/2;
        skyX *= 0.25; // FIXME.. this ratio related to screen/panarama width
        var skyY = -spriteList['sky_clouds'].height + skyH;
        //console.log('skyX='+skyX);
        bufferedGameCanvasContext.drawImage(spriteList['sky_clouds'],skyX,skyY);
    }

    draw3DProjectedWalls(){
        for (var i = 0; i < NUM_OF_RAYS; i++){
            var ray = player.rayCaster.rays[i];
            var rayDistance = ray.distance * Math.cos(ray.rayAngle - player.rotationAngle);
            var wallStripHeight = (TILE_SIZE / rayDistance) * PROJECTION_PLAIN_DISTANCE;

            var wallTopPixel = (bufferedGameCanvasContext.canvas.height/2) - (wallStripHeight/2);
            var wallBottomPixel = (bufferedGameCanvasContext.canvas.height/2) + (wallStripHeight/2);
            wallBottomPixel = wallBottomPixel > bufferedGameCanvasContext.canvas.height ? bufferedGameCanvasContext.canvas.height : wallBottomPixel;

            if (ray.closestWallHitCoord.x % TILE_SIZE === 0){ // if Vertical Hit
                var textureOffSetX = ray.closestWallHitCoord.y % TILE_SIZE;
            } else { //else if Horizonal Hit
                var textureOffSetX = ray.closestWallHitCoord.x % TILE_SIZE;
            }

            textureOffSetX *= (TEXTURE_SIZE / TILE_SIZE);
            bufferedGameCanvasContext.drawImage(spriteList['ice_wall'], textureOffSetX, 0, 1, TEXTURE_SIZE, i * RAY_INCREMENT_WIDTH, wallTopPixel, RAY_INCREMENT_WIDTH, wallStripHeight); 
        }
    }

    draw2DMinimap() {
        for (var row = 0; row < MAP_NUM_ROWS; row++) {
            for ( var col = 0; col < MAP_NUM_COLS; col++) {
                var tileX = col * TILE_SIZE;
                var tileY = row * TILE_SIZE;
                var tileColor = this.grid[row][col] === 1 ? 'black' : 'white';
                colorRect(tileX, tileY, TILE_SIZE, TILE_SIZE, tileColor, bufferedDebugCanvasContext, MINIMAP_SCALE_FACTOR);
            }
        }
    }

    getTileTypeAtPixelCoord(pixelX, pixelY) {
        if (!isCoordWithinMapGrid(pixelX, pixelY)) return TILE_TYPE_WALL;

        var tileCol = Math.floor(pixelX / TILE_SIZE);
        var tileRow = Math.floor(pixelY / TILE_SIZE);
        return this.grid[tileRow][tileCol];
    }
}