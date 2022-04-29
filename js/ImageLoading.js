var imagesToLoad = 0;
var spriteList = {};

function loadImages() {

	var imageList = [
		{spriteName: 'ice_wall', fileName: 'ice_wall.png'},
		{spriteName: 'rock_snowy_wall', fileName: 'rock_snowy_wall_texture_32x32.png'},
		{spriteName: 'rock_wall', fileName: 'rock_wall_texture_32x32.png'},
		{spriteName: 'snowy_wall', fileName: 'snowy_wall_texture_32x32.png'},
        {spriteName: 'sky_clouds', fileName: 'sky_clouds.png'},
        {spriteName: 'ice_spikes', fileName: 'ice_spikes.png'},
        {spriteName: 'cliff_ice', fileName: 'cliff_ice.png'},
        {spriteName: 'cliff_rock', fileName: 'cliff_rock.png'}
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