class DebugDisplay {
  constructor() {
    this.start_x = 0
    this.start_y = 200
    this.width = 640
    this.height = 320
    this.color = 'rgba(0,0,0,0.5)'
    this.mouseGridCood = {
      col: 0,
      row: 0
    };
  }

  draw() {
    this.updateDebugData();
    colorRect(this.start_x, this.start_y, this.width, this.height, this.color, bufferedDebugCanvasContext);

    let text_pos_x = this.start_x + 5;
    let text_pos_y = this.start_y + 25;
    let font = '20px sans-serif';
    let text_align = 'left';
    let color = 'white';

    for (const property in debugDisplayData) {
      colorText(
        `${property}: ${debugDisplayData[property]}`, 
        bufferedDebugCanvasContext, 
        text_pos_x, 
        text_pos_y, 
        font, 
        text_align, 
        color
      )

      text_pos_y += 25;
    }

    colorText("Minimap Grid Coord: ("+this.mouseGridCood.col +", "+this.mouseGridCood.row+")", bufferedDebugCanvasContext, text_pos_x, text_pos_y, font, text_align, color);

    drawBufferedCanvasToScreenCanvas(bufferedDebugCanvas);
  }

  updateDebugData() {
    debugDisplayData = {
        DEBUG_MODE_ENBALED,
        levelEditorEnabled,
        showDebugText,
        gameStarted
    };

    if (isPixelCoordWithinMapGrid(mousePos.x / mapSection.miniMapScaleFactor, mousePos.y / mapSection.miniMapScaleFactor)){
        this.mouseGridCood = {
          col: mapSection.getGridCoordFromPixelCoord(mousePos.x / mapSection.miniMapScaleFactor, mousePos.y / mapSection.miniMapScaleFactor).col,
          row: mapSection.getGridCoordFromPixelCoord(mousePos.x / mapSection.miniMapScaleFactor, mousePos.y / mapSection.miniMapScaleFactor).row
        }
    }
    
  }
}