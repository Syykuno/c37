class Game{
    constructor(){
        
    }

    getState(){
 var gameStateref=database.ref('gameState');
 gameStateref.on("value",function(data){
     gameState=data.val()
     })
    }

    update(state){
database.ref('/').update({
    gameState:state
})
    }

    async start(){
        if(gameState===0){

            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form=new Form();
            form.display();
        
        }
        // car1=createSprite(100,200);
        // car2=createSprite(300,200);
        // car3=createSprite(500,200);
        // car4=createSprite(700,200);
        // cars=[car1,car2,car3,car4]
    }

    play(){
        form.hide()
        textSize(30);
        text("game start",120,100)
        Player.getplayerinfo();
        if(allplayers!==undefined){
            var displaypos=130
            for(var plr in allplayers){
                if(plr==="player"+player.index)
                fill("red")
                else
                fill("black")

                displaypos=displaypos+20
                textSize(15)
                text(allplayers[plr].name+": "+allplayers[plr].distance,120,0)
            }
        }
    }

    
}