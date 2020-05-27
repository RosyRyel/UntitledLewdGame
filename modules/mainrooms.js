function HomeTentfunc(){
    TrueReset();
    WriteToMainWindow(getString("IntroTent"))
    MovementDirections(0,0,0,0,1,0,0,0)
    StandardButtons();
}

function BaseCampfunc(){
    TrueReset();
    WriteToMainWindow(getString("BaseCamp"))
    EditButton("button21", "GnatHunting", "Hunt for Gnats", "Hunt for some gnats to clap cheeks with");
    MovementDirections(1,0,0,0,0,0,0,0)
    StandardButtons();
}
new Event("HomeTentEvent", HomeTentfunc)
new Event("BaseCampEvent", BaseCampfunc)
new Room("HomeTent", "HomeTentEvent")
new Room("BaseCamp", "BaseCampEvent")
PlaneMap.set("Wilds", [[RoomMap.get("BaseCamp"), RoomMap.get("HomeTent")]])