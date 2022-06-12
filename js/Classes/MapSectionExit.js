class MapSectionExit {
    constructor(x, y, destinationMapSection) {
        this.x = x;
        this.y = y;
        this.destinationMapSection = destinationMapSection;
        this.radius = TILE_SIZE / 2;
        this.distanceToPlayer = Infinity;

        objectsToUpdate.push(this);
    }

    update() {
        this.distanceToPlayer = distanceBetweenPoints(this.x, this.y, player.x, player.y);

        if (this.distanceToPlayer < 10) {
            mapSection.changeMap(1);
        }
    }

    draw2D() {
        colorCircle(this.x * MINIMAP_SCALE_FACTOR, this.y * MINIMAP_SCALE_FACTOR, this.radius * MINIMAP_SCALE_FACTOR, "yellow", bufferedDebugCanvasContext);
    }
}