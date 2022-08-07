var imagesToLoad = 0;
var spriteList = {};
var spriteData = [];

function loadImages() {

	var imageList = [

        //Wall Textures
		{spriteName: 'rock_snowy_wall', fileName: 'rock_snowy_wall_texture_32x32.png'},
		{spriteName: 'rock_wall', fileName: 'rock_wall_texture_32x32.png'},
		{spriteName: 'snowy_wall', fileName: 'snowy_wall_texture_32x32.png'},
        {spriteName: 'ice_spikes', fileName: 'ice_spikes.png'},
        {spriteName: 'cliff_ice', fileName: 'cliff_ice.png'},
        {spriteName: 'cliff_rock', fileName: 'cliff_rock.png'},
        {spriteName: 'ship_window', fileName: 'ship_interior_window_32x32.png'},
        {spriteName: 'ship_shelves', fileName: 'ship_interior_shelves_32x32.png'},
        {spriteName: 'ship_door', fileName: 'ship_interior_door_32x32.png'},
        {spriteName: 'ship_interior_wall_simple_panels', fileName: 'ship_interior_wall_simple_panels.png'},
        {spriteName: 'ship_interior_wall_panels', fileName: 'ship_interior_wall_panels.png'},
        {spriteName: 'ship_interior_wall', fileName: 'ship_interior_wall.png'},
        {spriteName: 'ship_interior_plain_wall', fileName: 'ship_interior_plain_wall.png'},
        {spriteName: 'ship_interior_wall_simple', fileName: 'ship_interior_wall_simple.png'},
        {spriteName: 'ship_interior_wall_no_pipes', fileName: 'ship_interior_wall_no_pipes.png'},
        {spriteName: 'ship_interior_valves', fileName: 'ship_interior_valves_32x32.png'},
        {spriteName: 'ship_interior_valves_striped', fileName: 'ship_interior_valves_striped_32x32.png'},
        {spriteName: 'cave_wall', fileName: 'cave_wall.png'},
        {spriteName: 'cave_wall_icy', fileName: 'cave_wall_icy.png'},
        {spriteName: 'ship_interior_computer', fileName: 'ship_interior_computer_32x32.png'},

        //Item Spritesheets
        {spriteName: 'Book', fileName: 'spritesheets/book_blue_spritesheet.png'},
        {spriteName: 'Crowbar', fileName: 'spritesheets/crowbar_spritesheet.png'},
        {spriteName: 'Flashlight', fileName: 'spritesheets/flashlight_spritesheet.png'},
        {spriteName: 'Fire Extinguisher', fileName: 'spritesheets/fire_extinguisher_spritesheet.png'},
        {spriteName: 'Map', fileName: 'spritesheets/map_spritesheet.png'},
        {spriteName: 'Lantern', fileName: 'spritesheets/lamp_128_sheet.png'},
        {spriteName: 'Wrench', fileName: 'spritesheets/wrench_red_spritesheet.png'},
        {spriteName: 'Key', fileName: 'spritesheets/key_spritesheet.png'},
        {spriteName: 'TNT', fileName: 'spritesheets/tnt_spritesheet.png'},
        {spriteName: 'Artifact', fileName: 'spritesheets/artifact_spritesheet.png'},

        //Other Images
        {spriteName: 'floor_snow', fileName: 'floor_snow.png'},
        {spriteName: 'floor_ship', fileName: 'floor_ship.png'},
        {spriteName: 'sky_clouds', fileName: 'sky_clouds.png'},
        {spriteName: 'sky_ship', fileName: 'sky_ship.png'},
        {spriteName: 'snow', fileName: 'snow.png'},
        {spriteName: 'fog', fileName: 'fog.png'},
        {spriteName: 'titlescreenBG', fileName: 'title_screen_bg.png'},
        {spriteName: 'intro_text', fileName: 'intro_text.png'},
        {spriteName: 'ending_text', fileName: 'ending_text.png'},
        {spriteName: 'inventory_background', fileName:'inventory_background_16x16.png'},
        {spriteName: 'menu_button', fileName: 'ui/menu-button.png'}
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

spriteData["Book"] = {frames: 8, w: 128, h: 128};
spriteData["Crowbar"] = {frames: 8, w: 128, h: 128};
spriteData["Flashlight"] = {frames: 8, w: 128, h: 128};
spriteData["Fire Extinguisher"] = {frames: 8, w: 128, h: 128};
spriteData["Map"] = {frames: 8, w: 128, h: 128};
spriteData["Wrench"] = {frames: 8, w: 128, h: 128};
spriteData["Lantern"] = {frames: 8, w: 128, h: 128};
spriteData["Key"] = {frames: 8, w: 128, h: 128};
spriteData["TNT"] = {frames: 8, w: 128, h: 128};
spriteData["Artifact"] = {frames: 8, w: 128, h: 128};