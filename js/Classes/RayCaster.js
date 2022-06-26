class RayCaster {
    constructor(angle){
        this.rays = [];

        for (var i = 0; i < NUM_OF_RAYS; i++){
            this.rays.push(new Ray(angle - (FOV_RADS / 2), i));
            angle += FOV_RADS / NUM_OF_RAYS;
        }

        //re-sorts list of rays from furthest to closest to the player
        this.rays.sort((a, b) => (a.distance < b.distance) ? 1 : -1);
    }

    draw(){
        for (var ray of this.rays){
            ray.draw();
        }
    }
}