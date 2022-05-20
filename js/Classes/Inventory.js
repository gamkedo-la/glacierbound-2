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
                    bufferedGameCanvasContext.drawImage(spriteList[this.inventorySlots[inventoryIndex].spriteName],this.x+j*this.slotSize,this.y+i*this.slotSize,this.slotSize,this.slotSize);
                }
                drawRect(this.x+j*this.slotSize,this.y+i*this.slotSize,this.slotSize,this.slotSize, this.borderColor,this.borderSize);
                inventoryIndex++;
            }
        }
    }
}