
var database
var gameState = 0
var playerCount = 0
var form
var player
var game 
var allPlayers

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
}

function draw() {
   
    if(playerCount==4){
        gameState = 1;
    }

    if(gameState===1) {
        clear()
        game.play()
    }


 }






