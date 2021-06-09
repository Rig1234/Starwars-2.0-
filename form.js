class Form { 
    constructor(){
       
        this.input = createInput("SuperHeroName");
        this.button = createButton("SaveTheWorld");
    }
    display(){
        
        this.input.position(600,250);
        this.button.position(600,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player1.name =this.input.value();

            playerCount+= 1;
            player1.index=playerCount;
            console.log(playerCount);
            player1.update()
            player1.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Get ready to save the World" + player1.name + " waiting for your TeamMate " )
            greeting.position(130, 160) }); 
        
    }

    
    

}