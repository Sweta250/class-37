class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getcount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updatecount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerinfo = database.ref('players');
    playerinfo.on("value",function(data){
      players = data.val();
    })
  }
}
