class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
  var Playercountref =database.ref("playerCount")
  Playercountref.on("value",data=>{
    playerCount =data.val();
  })
}
updatecount(count){
  database.ref("/").update({
    playerCount:count
  })
}
 }

