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
        var imgH = spriteList['sky_clouds'].height;
        var skyH = Math.round(bufferedGameCanvasContext.canvas.height/2);
        //adjust the width of the image for the available height
        var width = imgW * (skyH/imgH);
        //how far left to draw the image
        var skyX = -(player.rotationAngle*width)/(Math.PI*2);
        //draw the image
        bufferedGameCanvasContext.drawImage(spriteList['sky_clouds'],skyX,0,width,skyH);
        //if the image ends before the end of the screen draw another starting where the last one stopped (left+width)
        if(skyX < width - bufferedGameCanvasContext.canvas.width){
            bufferedGameCanvasContext.drawImage(spriteList['sky_clouds'],skyX+width,0,width,skyH);
        }
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
            textureOffSetX = Math.floor(textureOffSetX);
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

    setTileTypeAtPixelCoord(pixelX, pixelY) {

        var scaledPixelX = pixelX / MINIMAP_SCALE_FACTOR;
        var scaledPixelY = pixelY / MINIMAP_SCALE_FACTOR;

        if (!isCoordWithinMapGrid(scaledPixelX, scaledPixelY)) return;

        var tileCol = Math.floor((scaledPixelX) / (TILE_SIZE));
        var tileRow = Math.floor((scaledPixelY) / (TILE_SIZE));

        if (this.getTileTypeAtPixelCoord(scaledPixelX, scaledPixelY) == TILE_TYPE_WALL) {
            this.grid[tileRow][tileCol] = TILE_TYPE_FLOOR;
        } else {
            this.grid[tileRow][tileCol] = TILE_TYPE_WALL;
        }
    }

}