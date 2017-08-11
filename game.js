class GameArea{
    constructor(w,h,color){
        this.canvas = document.createElement("canvas");
        this.canvas.width = w;
        this.canvas.height = h;
        this.canvas.style.backgroundColor = color;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
    }

    clear(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    playerController(player){
    if (event.keyCode == 37 || event.keyCode == 65) {
        player.x -= 10;
    }
    else if (event.keyCode == 38 || event.keyCode == 87) {
        player.y -= 10;
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
        player.x += 10;
    }
    else if (event.keyCode == 40 || event.keyCode == 83) {
        player.y += 10;
    }
    }
}

class GameObject{
    constructor(width, height, color, x ,y, gameArea){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.gameArea = gameArea;    
    this.ctx = gameArea.context;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

    update(){
        this.ctx = this.gameArea.context;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);    
    }

}


function startGame(){
    //create game object
    var game = new GameArea(500,350,"lightblue",);
    //create and modify canvas 
    //create player object
    var player = new GameObject(50,50,"blue",50,50,game);
    //update game
    //get inputs for user to move gmae obj
    document.addEventListener('keydown',game.playerController(player));
}



