class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getcount();
        form = new Form()
        form.display();
      }
    }
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(players !== undefined){
        var display_position = 130;
       
        for(var i in players){
          if (i === "player" + player.index)
            fill("red")
          else
            fill("black");
  
          display_position=display_position+20;
          textSize(15);
          text(players[i].name + ": " + players[i].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance =player.distance+50
        player.update();
      }
    }
  }
  