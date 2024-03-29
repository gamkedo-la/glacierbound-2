var bookItem;

class Player {
    constructor() {
        this.x = TILE_SIZE * 6.5;
        this.y = TILE_SIZE * 2.5;
        this.col = mapSection.getGridCoordFromPixelCoord(this.x, this.y).col;
        this.row = mapSection.getGridCoordFromPixelCoord(this.x, this.y).row;
        this.startingCol = this.col;
        this.startingRow = this.row;
        this.turnDirection = NEUTRAL;
        this.walkDirection = NEUTRAL;
        this.strafeDirection = NEUTRAL;
        this.radius = TILE_SIZE/4;
        this.moveSpeed = 1; // pixels/frame
        this.sprintSpeed = 2;
        this.isSprinting = false;
        this.rotationSpeed = degreesToRadians(3); //degrees converted to radians/frame
        this.rotationAngle = degreesToRadians(90); //degrees converted to radians
        this.rayCaster;
        this.currentTileType = 0;
        this.previousMapSection = 0;
        this.isMoving = false;
        this.canExitMapSection = true;
        this.ticksBetweenSteps = 20;
        this.stepTickCounter = 0;
        this.posInTile = {
            x: TILE_SIZE / 2,
            y: TILE_SIZE / 2
        }
        this.currentObjective = [];

        allObjects.push(this);
    }
    update() {
        this.col = mapSection.getGridCoordFromPixelCoord(this.x, this.y).col;
        this.row = mapSection.getGridCoordFromPixelCoord(this.x, this.y).row;

        if (this.col != this.startingCol || this.row != this.startingRow){
            this.canExitMapSection = true;
        }

        this.rotationAngle += this.rotationSpeed * this.turnDirection;
        this.rotationAngle = normalizeAngle(this.rotationAngle);

        let inputDirectionMagnitude = Math.sqrt(Math.pow(this.walkDirection,2)+Math.pow(this.strafeDirection,2));

        let inputDirection = [this.walkDirection/inputDirectionMagnitude,this.strafeDirection/inputDirectionMagnitude];

        let movementDirectionX = Math.cos(this.rotationAngle)*inputDirection[0]
                                + Math.cos(this.rotationAngle+Math.PI/2)*inputDirection[1];

        let movementDirectionY = Math.sin(this.rotationAngle)*inputDirection[0]
                                + Math.sin(this.rotationAngle+Math.PI/2)*inputDirection[1];

        if(this.isSprinting){
            movementDirectionX *= this.sprintSpeed;
            movementDirectionY *= this.sprintSpeed;
        }else {
            movementDirectionX *= this.moveSpeed;
            movementDirectionY *= this.moveSpeed;
        }

        //set moving to false, set to true if we do actually move
        this.isMoving = false;

        if (mapSection.getTileTypeAtPixelCoord(this.x, this.y+movementDirectionY) === TILE_TYPE_FLOOR ||
            mapSection.getTileTypeAtPixelCoord(this.x, this.y+movementDirectionY) >= 80) {
            this.y += movementDirectionY;
            this.isMoving = true;
        }
        if (mapSection.getTileTypeAtPixelCoord(this.x+movementDirectionX, this.y) === TILE_TYPE_FLOOR ||
            mapSection.getTileTypeAtPixelCoord(this.x+movementDirectionX, this.y) >= 80) {
            this.x += movementDirectionX;
            this.isMoving = true;
        }

        this.posInTile.x = this.x % TILE_SIZE;
        this.posInTile.y = this.y % TILE_SIZE;

        this.rayCaster = new RayCaster(player.rotationAngle);

        this.currentTileType = mapSection.getTileTypeAtPixelCoord(this.x, this.y);
        if (this.currentTileType >= 80){
            mapSection.changeMap(this.currentTileType - 80);
        }

        if(this.isMoving ) {
            if (this.stepTickCounter === 0) {
                playSFXAudio(audioSourceList['footstep']);
                this.stepTickCounter = this.ticksBetweenSteps;
            } else {
                this.stepTickCounter--;
            }
        }else{//if movement stops reset the counter
            this.stepTickCounter = 0;
        }
    }

    draw() {
        this.rayCaster.draw();
        if (MINIMAP_ENABLED && inventory.containsItem("Map") || levelEditorEnabled) {
            //colorCircle(this.x, this.y, this.radius, 'red', bufferedHUDCanvasContext, mapSection.miniMapScaleFactor);
            //colorLineAtAngle(this.x, this.y, this.rotationAngle, this.radius * 3, 'red', bufferedHUDCanvasContext, mapSection.miniMapScaleFactor);
        }
        if (RADAR_ENABLED && inventory.containsItem("Map")) {
            colorCircle(RADAR_X+this.x*RADAR_SCALE_FACTOR, RADAR_Y+this.y*RADAR_SCALE_FACTOR, 2, 'red', bufferedHUDCanvasContext, 1);
            colorLineAtAngle(RADAR_X+this.x*RADAR_SCALE_FACTOR, RADAR_Y+this.y*RADAR_SCALE_FACTOR, this.rotationAngle, 6, 'red', bufferedHUDCanvasContext, 1);
        }

        this.displayObjectives();
    }

    draw2D(){
        
    }

    displayObjectives(){

        colorText("Current Objectives:", bufferedHUDCanvasContext, bufferedHUDCanvas.width - 20, 30, '16px Roboto Mono', 'right', 'white');
        for (i = 0; i < this.currentObjective.length; i++){
            colorText(this.currentObjective[i], bufferedHUDCanvasContext, bufferedHUDCanvas.width - 20, 50 + (i * 20), '16px Roboto Mono', 'right', 'white');
        }

    }

    addObjective(objective){
        if (this.currentObjective.findIndex(element => element === objective) === -1){
            this.currentObjective.push(objective);
        }
    }

    removeObjective(objective){
        var index = this.currentObjective.findIndex(element => element === objective);
        if (index >= 0){
            this.currentObjective.splice(index, 1);
        }
    }

}