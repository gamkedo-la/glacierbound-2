class Player {
    constructor() {
        this.x = TILE_SIZE * 6.5;
        this.y = TILE_SIZE * 2.5;
        this.turnDirection = NEUTRAL;
        this.walkDirection = NEUTRAL;
        this.strafeDirection = NEUTRAL;
        this.radius = TILE_SIZE/4;
        this.moveSpeed = 1; // pixels/frame
        this.rotationSpeed = degreesToRadians(3); //degrees converted to radians/frame
        this.rotationAngle = degreesToRadians(90); //degrees converted to radians
        this.rayCaster;

        //Testing inventory item functionality
        var bookItem = new Item(0,"book_blue_icon");
        inventory.addItem(bookItem);
    }

    update() {
        this.rotationAngle += this.rotationSpeed * this.turnDirection;
        this.rotationAngle = normalizeAngle(this.rotationAngle);



        let inputDirectionMagnitude = Math.sqrt(Math.pow(this.walkDirection,2)+Math.pow(this.strafeDirection,2));

        let inputDirection = [this.walkDirection/inputDirectionMagnitude,this.strafeDirection/inputDirectionMagnitude];

        let movementDirectionX = Math.cos(this.rotationAngle)*inputDirection[0]
                                + Math.cos(this.rotationAngle+Math.PI/2)*inputDirection[1];

        let movementDirectionY = Math.sin(this.rotationAngle)*inputDirection[0]
                                + Math.sin(this.rotationAngle+Math.PI/2)*inputDirection[1];

        movementDirectionX *= this.moveSpeed;
        movementDirectionY *= this.moveSpeed;
        
        if (mapSection.getTileTypeAtPixelCoord(this.x, this.y+movementDirectionY) === TILE_TYPE_FLOOR) {
            this.y += movementDirectionY;
        }
        if (mapSection.getTileTypeAtPixelCoord(this.x+movementDirectionX, this.y) === TILE_TYPE_FLOOR) {
            this.x += movementDirectionX;
        }

        this.rayCaster = new RayCaster(player.rotationAngle);
    }

    draw() {
        this.rayCaster.draw();
        colorCircle(this.x, this.y, this.radius, 'red', bufferedDebugCanvasContext, MINIMAP_SCALE_FACTOR);
        colorLineAtAngle(this.x, this.y, this.rotationAngle, this.radius * 2, 'red', bufferedDebugCanvasContext, MINIMAP_SCALE_FACTOR)
    }
}