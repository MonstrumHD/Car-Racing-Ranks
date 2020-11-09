class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  ranksListen() {
    var rankInfo = database.ref('rankTaken');
    rankInfo.on("value",(data)=>{
      rankS = data.val();
    })
  }

  static ranksUpdate(rank) {
    database.ref('/').update({
      rankTaken: rank
    });
  }
}
