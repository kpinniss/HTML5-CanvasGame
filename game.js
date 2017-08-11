class GameArea{
    constructor(){
         this.canvas = document.createElement("canvas");
        // this.width = this.canvas.width
        // this.height = this.canvas.height;
        // this.color = this.canvas.style.backgroundColor;
        
    }

    createGameArea(w,h,color){
        this.canvas.width = w;
        this.canvas.height = h;
        this.canvas.style.backgroundColor = color;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

class GameObject{
    constructor(width, height, color, x ,y, gameArea){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.ctx = gameArea.context;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

}

function startGame(){
    var game = new GameArea();
    game.createGameArea(700,370,"lightblue");
    var player = new GameObject(50,50,"blue",50,50,game);
    console.log("GameStarted");
    console.log(this.canvas.width);
}

