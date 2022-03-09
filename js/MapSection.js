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

    draw() {
        for (var row = 0; row < MAP_NUM_ROWS; row++) {
            for ( var col = 0; col < MAP_NUM_COLS; col++) {
                var tileX = col * TILE_SIZE;
                var tileY = row * TILE_SIZE;
                var tileColor = this.grid[row][col] === 1 ? 'black' : 'white';
                colorRect(tileX, tileY, TILE_SIZE, TILE_SIZE, tileColor, MINIMAP_SCALE_FACTOR);
            }
        }
    }

    getTileTypeAtPixelCoord(pixelX, pixelY) {
        var tileCol = Math.floor(pixelX / TILE_SIZE);
        var tileRow = Math.floor(pixelY / TILE_SIZE);
    
        return this.grid[tileRow][tileCol];
    }

}