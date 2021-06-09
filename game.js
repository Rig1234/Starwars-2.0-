class Game { 
    constructor(){

    }
    getState() {
        var gameStateRef;
        gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })  
 }
     updateState(state){
       database.ref("/").set({
           gameState:state
       })
      }
     async start(){
        if(gameState === 0){  
        player1 = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player1.getCount();
        }
        background(bgStart)
        form1 = new Form();
        form1.display();
        }
    }
    play(){
        background(bgPlay);
        console.log("Hey i am in PLAY ")
    }


}