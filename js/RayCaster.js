function castAllRays(){
    var columnID = 0;
    var rayAngle = normalizeAngle(player.rotationAngle - (FOV_RADS / 2));

    rays = [];
    for (i = 0; i < NUM_OF_RAYS; i++){
        var ray = new Ray(rayAngle);
        ray.cast(columnID);
        rays.push(ray);

        rayAngle += FOV_RADS / NUM_OF_RAYS;
        columnID++;
    }
}