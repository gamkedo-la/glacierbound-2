class TextDisplay {
    constructor() {
        this.displayMessage;
        this.timer = 0;
 
        this.boxY = bufferedHUDCanvas.height - 180;
        this.boxHeight = 50;
        this.fontSize = 20;
        this.font = this.fontSize+'px Roboto Mono';
        this.textY = this.boxY + (this.boxHeight / 2) + (this.fontSize / 2);

        allObjects.push(this);
    }

    update() {
        this.timer--;
    }

    setText(text){
        this.timer = TEXT_DISPLAY_TIME_SEC * FRAMES_PER_SECOND;
        this.displayMessage = text;
    }

    draw() {
        if (this.timer <= 0) return;

        colorRect(0, this.boxY, bufferedHUDCanvas.width, this.boxHeight, 'rgba(0,0,0,0.5)', bufferedHUDCanvasContext);
        colorText(this.displayMessage, bufferedHUDCanvasContext, bufferedHUDCanvas.width / 2, this.textY, this.font, 'center', 'white');
    }

    draw2D(){

    }
}