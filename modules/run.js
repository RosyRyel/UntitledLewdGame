PlayerBody = new Body(["AverageHair","brown"], ["StandardSkin","pale"],["HumanFace", 0, "pink"],["HumanEyes", "green"], ["HumanEars"],["DefaultHead"],["StandardTorso", 0],["HumanArms", 0], ["HumanHands", "unstyled", "natural pale pink"],["StandardWaist", 0, 0],["StandardHips", 1, 0],["NoTail"],["StandardButt",1, 0, 0],["HumanLegs", 0, 0],["HumanFeet","unstyled", "natural pale pink"],[{type:"DefaultBreasts",size:1,niplength:1,niptype:"Normal"}], [{type:"DefaultPhallus",length:1,girth:1,ballsize:1}], [{type:"DefaultVagina",size:1}], 25, 35);
Player = new CreatePlayer("Player", [10,10,10,10,10,10,10,10,10,10,10,10], "Wilds", [0,1], PlayerBody)
X = Player.coords[0];
Y = Player.coords[1];
function Load(){EventMap.get(PlaneMap.get(Player.plane)[X][Y].event)()}
Load()
CreatePlayerStatBlock()
PlayerDamage("HP",0,"pierce")
PlayerDamage("LP",0,"pierce")
PlayerDamage("SP",0,"pierce")
//DrawPlayerStatBars();