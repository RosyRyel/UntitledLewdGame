//TODO include a easy way to add in custom pronouns for people with uncommon neopronouns or multiple pronoun sets
FlagMap.set("NominativePN", ["They"]) //other common ones "She", "He", "Xe", "Ze"
FlagMap.set("AccusativePN", ["Them"])
FlagMap.set("PronominalPN", ["Their"])
FlagMap.set("PredicativePN", ["Their's"])
FlagMap.set("ReflexivePN", ["Theirself"]) //not gonna lie chief, there are like 4 spellings of this and it kinda scares me to look into 

FlagMap.set("Techniqueholdoutmelee", "")
FlagMap.set("TechniquePDmelee", "")
FlagMap.set("Techniqueassaultmelee", "")
FlagMap.set("Techniqueheavymelee", "")
FlagMap.set("Techniqueholdoutranged", "")
FlagMap.set("TechniquePDranged", "")
FlagMap.set("Techniqueassaultranged", "")
FlagMap.set("Techniqueheavyranged", "")
FlagMap.set("Time", 0)


//Fetish flags are set to 0 for hard on(Allowed and player is not always explicitly aware ahead of time), 1 is set to soft on (Allowed but make player aware ahead of time), 2 is neutral (Only allowed from active player action), 3 is soft off (Disallowed aside from when player explicitly okays it), 4 hard off (Disallowed completely)
FlagMap.set("FeminizingFetish", 0)
FlagMap.set("MasculizingFetish", 0) //No im not looking up the spelling for that, im far to lazy to do that
FlagMap.set("WeightGainFetish", 0)
FlagMap.set("MuscleGainFetish", 0)
FlagMap.set("ExpansionFetish", 0)

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