var imagesToLoad = 0;
var spriteList = {};
var spriteData = [];

function loadImages() {

	var imageList = [
		{spriteName: 'ice_wall', fileName: 'ice_wall.png'},
		{spriteName: 'rock_snowy_wall', fileName: 'rock_snowy_wall_texture_32x32.png'},
		{spriteName: 'rock_wall', fileName: 'rock_wall_texture_32x32.png'},
		{spriteName: 'snowy_wall', fileName: 'snowy_wall_texture_32x32.png'},
        {spriteName: 'sky_clouds', fileName: 'sky_clouds.png'},
        {spriteName: 'sky_ship', fileName: 'sky_ship.png'},
        {spriteName: 'ice_spikes', fileName: 'ice_spikes.png'},
        {spriteName: 'cliff_ice', fileName: 'cliff_ice.png'},
        {spriteName: 'cliff_rock', fileName: 'cliff_rock.png'},
        {spriteName: 'ship_window', fileName: 'ship_interior_window_32x32.png'},
        {spriteName: 'ship_shelves', fileName: 'ship_interior_shelves_32x32.png'},
        {spriteName: 'book_blue_spritesheet', fileName: 'spritesheets/book_blue_spritesheet.png'},
        {spriteName: 'flashlight_spritesheet', fileName: 'spritesheets/flashlight_spritesheet.png'},
        {spriteName: 'fire_extinguisher_spritesheet', fileName: 'spritesheets/fire_extinguisher_spritesheet.png'},
        {spriteName: 'map_spritesheet', fileName: 'spritesheets/map_spritesheet.png'},
        {spriteName: 'wrench_red_spritesheet', fileName: 'spritesheets/wrench_red_spritesheet.png'},
        {spriteName: 'floor_snow', fileName: 'floor_snow.png'},
        {spriteName: 'floor_ship', fileName: 'floor_ship.png'},

        {spriteName: 'ship_interior_wall_simple_panels', fileName: 'ship_interior_wall_simple_panels.png'},
        {spriteName: 'ship_interior_wall_panels', fileName: 'ship_interior_wall_panels.png'},
        {spriteName: 'ship_interior_wall', fileName: 'ship_interior_wall.png'},
        {spriteName: 'ship_interior_plain_wall', fileName: 'ship_interior_plain_wall.png'},
        {spriteName: 'ship_interior_wall_simple', fileName: 'ship_interior_wall_simple.png'},
        {spriteName: 'ship_interior_wall_no_pipes', fileName: 'ship_interior_wall_no_pipes.png'},

        {spriteName: 'cave_wall', fileName: 'cave_wall.png'},
	]

	imagesToLoad = imageList.length;

	for (var i=0; i<imageList.length; i++) {
		let newImage = document.createElement('img');
		beginLoadingImage(newImage, imageList[i].fileName);

		if(imageList[i].spriteName != undefined) {
			spriteList[imageList[i].spriteName] = newImage;
		}
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.src = 'images/'+fileName;
	imgVar.onload = function() {countImagesOrStartGame()};
}

function countImagesOrStartGame() {
	imagesToLoad--;
	if (imagesToLoad == 0) {
		initRenderLoop();
	}
}

spriteData["book_blue_spritesheet"] = {frames: 8, w: 128, h: 128};
spriteData["flashlight_spritesheet"] = {frames: 8, w: 128, h: 128};
spriteData["fire_extinguisher_spritesheet"] = {frames: 8, w: 128, h: 128};
spriteData["map_spritesheet"] = {frames: 8, w: 128, h: 128};
spriteData["wrench_red_spritesheet"] = {frames: 8, w: 128, h: 128};