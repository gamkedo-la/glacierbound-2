class Inventory{
    constructor() {
        this.x = 96;
        this.y = 112;
        this.slotSize = 16;
        this.inventorySize = 8;
        this.slotsPerRow = 4;
        this.inventorySlots = [];
        this.showInventory = false;
        this.backgroundColor = "white";
        this.borderColor = "black";
        this.borderSize = 2;
        this.selectedColor = "red";
        this.selectedIndex = 0;
    }
    addItem(item){
        if(this.inventorySlots.length >= this.inventorySize){
            return false;
        }
        this.inventorySlots.push(item);
        return true;
    }
    removeItem(slotIndex){
        if(slotIndex > this.inventorySlots.length || slotIndex < 0){
            console.log(this.inventorySlots.length);
            return false;
        }
        this.inventorySlots.splice(slotIndex,1);
        return true;
    }

    containsItem(item){
        return this.inventorySlots.findIndex(element => element.itemID === item.itemID);
    }
    toggleShowInventory(){
        this.showInventory = !this.showInventory;
    }
    incrementSelectedItemIndex(){
        this.selectedIndex++;
        this.selectedIndex %= this.inventorySize;
    }
    getSelectedItem(){
        return this.inventorySlots[this.selectedIndex];
    }
    decrementSelectedItemIndex(){
        this.selectedIndex--;
        if(this.selectedIndex < 0){
            this.selectedIndex = this.inventorySize-1;
        }
    }
    draw(){
        if(!this.showInventory){
            return;
        }
        let rows = Math.ceil(this.inventorySize/this.slotsPerRow);
        let inventoryIndex = 0;
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < this.slotsPerRow; j++){
                colorRect(this.x+j*this.slotSize,this.y+i*this.slotSize,this.slotSize,this.slotSize, this.backgroundColor);
                if(inventoryIndex < this.inventorySlots.length){
                    bufferedGameCanvasContext.drawImage(
                        spriteList[this.inventorySlots[inventoryIndex].spriteName], //image
                        this.inventorySlots[inventoryIndex].frameW * this.inventorySlots[inventoryIndex].currentFrameRowIndex, //sx
                        this.inventorySlots[inventoryIndex].frameH * this.inventorySlots[inventoryIndex].currentFrameColIndex, //sy
                        this.inventorySlots[inventoryIndex].frameW, //sw
                        this.inventorySlots[inventoryIndex].frameH, //sh
                        this.x+j*this.slotSize, //dx
                        this.y+i*this.slotSize, //dy
                        this.slotSize, //dw
                        this.slotSize); //dh
                }
                drawRect(this.x+j*this.slotSize,this.y+i*this.slotSize,this.slotSize,this.slotSize, this.borderColor,this.borderSize);
                inventoryIndex++;
            }
        }

        //draw selected
        let selectedItemRow = Math.floor(this.selectedIndex / this.slotsPerRow);
        let selectedItemColumn = this.selectedIndex % this.slotsPerRow;
        drawRect(this.x + selectedItemColumn * this.slotSize, this.y + selectedItemRow * this.slotSize, this.slotSize, this.slotSize, this.selectedColor, this.borderSize);
    }
}