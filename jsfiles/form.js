class Form {
constructor(){
this.input = createInput("Enter Name")
this.button = createButton("play");
this.title= createElement("h1","Multiplayer Car Racing Game")
}
display (){
this.input.position(455,300)
this.button.position(610,300)
this.title.position(380,170)
this.button.mousePressed(()=>{
    var playername = this.input.value ();
    console.log(playername)
});
}
}