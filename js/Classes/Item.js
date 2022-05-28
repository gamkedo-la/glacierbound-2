class Item{
    constructor(itemID, spriteName, numFramesinRow, numFramesinCol, frameW, frameH) {
        this.itemID = itemID;
        this.spriteName = spriteName;
        this.frameW = frameW;
        this.frameH = frameH;
        this.numFramesinRow = numFramesinRow;
        this.numFramesinCol = numFramesinCol;
        this.currentFrameRowIndex = 0;
        this.currentFrameColIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 20;
    }

    update (){
        if (this.tickCount >= this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.currentFrameRowIndex >= this.numFramesinRow - 1) {
                this.currentFrameRowIndex = 0;
            } else {
                this.currentFrameRowIndex += 1;
            }
        } else {
            this.tickCount += 1;
        }
    }
}