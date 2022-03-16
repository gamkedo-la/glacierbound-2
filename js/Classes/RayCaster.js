class RayCaster {
    constructor(angle){
        this.rays = [];

        for (var i = 0; i < NUM_OF_RAYS; i++){
            this.rays.push(new Ray(angle - (FOV_RADS / 2)));
            angle += FOV_RADS / NUM_OF_RAYS;
        }
    }

    draw(){
        for (var ray of this.rays){
            ray.draw();
        }
    }
}