var imagesToLoad = 0;
var spriteList = {};

function loadImages() {

	var imageList = [
		{spriteName: 'wall', fileName: 'wall_snow.png'},
		{spriteName: 'wall2', fileName: 'wall_blue_2.png'},
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