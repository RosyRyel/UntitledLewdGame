function TrueReset(){ResetButtons();EraseMainWindow();}
function ChangeRoom(X,Y){
    StateUpdate();
    PrevX= Player.coords[0];
    PrevY= Player.coords[1];
    try{
    Player.coords = [X,Y];
    EventMap.get(PlaneMap.get(Player.plane)[X][Y].event)();
    }catch{
        Player.coords = [PrevX,PrevY];
        alert("Movement Error, coordinate does not correspond to a valid room, rolling back event...")
    }
}

function MoveDirection(xoffset,yoffset){
    X = Player.coords[0];
    Y = Player.coords[1];
    TimeAddSec(6);
    ChangeRoom(X+xoffset,Y+yoffset)
}

function ChangePlane(plane, X, Y){
    StateUpdate();
    PreviousPlane = Player.plane;
    PrevX= Player.coords[0];
    PrevY= Player.coords[1];
    try{
        Player.plane = plane
        Player.coords = [X,Y]
        EventMap.get(PlaneMap.get(Player.plane)[X][Y].event)();
    }catch{
        Player.plane = PreviousPlane
        Player.coords = [PrevX,PrevY];
        alert("Plane change error, plane or coords on plane do not exist, rolling back event...")
    }
}

new Event("CurrentRoomEvent", function(){StateUpdate();document.getElementById("GameRight").innerHTML ="";EventMap.get(PlaneMap.get(Player.plane)[Player.coords[0]][Player.coords[1]].event)();})
new Event("MoveNorthwest", function(){MoveDirection(-1,1)})
new Event( "MoveNorth", function(){MoveDirection(0,1)})
new Event("MoveNortheast", function(){MoveDirection(1,1)})
new Event("MoveWest", function(){MoveDirection(-1,0)})
new Event("MoveEast", function(){MoveDirection(1,0)})
new Event("MoveSouthwest", function(){MoveDirection(-1,-1)})
new Event("MoveSouth", function(){MoveDirection(0,-1)})
new Event("MoveSoutheast", function(){MoveDirection(1,-1)})
new Event("Room1TestEvent", function(){Room1Test()})
//BadPractice to reference these, always use MovementDirections function instead
function NorthwestButton(){EditButton("button1", "MoveNorthwest", "Northwest", "Move to the Northwest")}
function NorthButton(){EditButton("button2", "MoveNorth", "North", "Move to the North")}
function NortheastButton(){EditButton("button3", "MoveNortheast", "Northeast", "Move to the Northeast")}
function WestButton(){EditButton("button8", "MoveWest", "West", "Move to the West")}
function EastButton(){EditButton("button10", "MoveEast", "East", "Move to the East")}
function SouthwestButton(){EditButton("button15", "MoveSouthwest", "Southwest", "Move to the Southwest")}
function SouthButton(){EditButton("button16", "MoveSouth", "South", "Move to the South")}
function SoutheastButton(){EditButton("button17", "MoveSoutheast", "Southeast", "Move to the Southeast")}

function MovementDirections(north, northeast,east,southeast,south,southwest,west,northwest){
if (northwest){NorthwestButton()}; if (north){NorthButton()}; if (northeast){NortheastButton()};
if (west){WestButton()}; if (east){EastButton()};
if (southwest){SouthwestButton()}; if (south){SouthButton()}; if (southeast){SoutheastButton()};
}

new Event("InventoryMenuButton", InventoryMenu);
function InventoryButton(){EditButton("button7", "InventoryMenuButton", "Look in inventory", "Browse what you have on your person")}

function StandardButtons(){
    InventoryButton();
    LookSelfButton();
}

function GetWeaponName(nam){
    switch(nam){
        case 0:
            ranarray = [];
            if(Player.equips.holdoutmelee!=""){ranarray.push(Player.equips.holdoutmelee)}
            if(Player.equips.PDmelee!=""){ranarray.push(Player.equips.PDmelee)}
            if(Player.equips.assaultmelee!=""){ranarray.push(Player.equips.assaultmelee)}
            if(Player.equips.heavymelee!=""){ranarray.push(Player.equips.heavymelee)}
            if(Player.equips.holdoutranged!=""){ranarray.push(Player.equips.holdoutranged)}
            if(Player.equips.PDranged!=""){ranarray.push(Player.equips.PDranged)}
            if(Player.equips.assaultranged!=""){ranarray.push(Player.equips.assaultranged)}
            if(Player.equips.heavyranged!=""){ranarray.push(Player.equips.heavyranged)}
            if(ranarray.length==0){return "NULL"}
            return ranarray[getRandInt(0,ranarray.length)]
        case 1:
            return Player.equips.holdoutmelee
        case 2:
            return Player.equips.PDmelee
        case 3:
            return Player.equips.assaultmelee
        case 4:
            return Player.equips.heavymelee
        case 5:
            return Player.equips.holdoutranged
        case 6:
            return Player.equips.PDranged
        case 7:
            return Player.equips.assaultranged
        case 8:
            return Player.equips.heavyranged
        default:
            return "NULL"
        }
}

function AttackWeaponChoice(){
    ResetButtons();
    if(Player.equips.holdoutmelee!=""){
        EditButton("button1", function(){
            ResetButtons();
            choosePartAttack(Player.equips.holdoutmelee,WeaponMap.get(Player.equips.holdoutmelee).attack(),WeaponMap.get(Player.equips.holdoutmelee).attackdescription)
        },Player.equips.holdoutmelee, "Dummy Hovertext");
    }
    if(Player.equips.PDmelee!=""){
        EditButton("button2", function(){ResetButtons();
            choosePartAttack(Player.equips.PDmelee,WeaponMap.get(Player.equips.PDmelee).attack(),WeaponMap.get(Player.equips.PDmelee).attackdescription)
        },Player.equips.PDmelee, "Dummy Hovertext");
    }
    if(Player.equips.assaultmelee!=""){
        EditButton("button3", function(){ResetButtons();
            choosePartAttack(Player.equips.assaultmelee,WeaponMap.get(Player.equips.assaultmelee).attack(),WeaponMap.get(Player.equips.assaultmelee).attackdescription)
        },Player.equips.assaultmelee, "Dummy Hovertext");
    }
    if(Player.equips.heavymelee!=""){
        EditButton("button4", function(){ResetButtons();
            choosePartAttack(Player.equips.heavymelee,WeaponMap.get(Player.equips.heavymelee).attack(),WeaponMap.get(Player.equips.heavymelee).attackdescription)
        },Player.equips.heavymelee, "Dummy Hovertext");
    }
    if(Player.equips.holdoutranged!=""){
        EditButton("button8", function(){ResetButtons();
            choosePartAttack(Player.equips.holdoutranged,WeaponMap.get(Player.equips.holdoutranged).attack(),WeaponMap.get(Player.equips.holdoutranged).attackdescription)
        },Player.equips.holdoutranged, "Dummy Hovertext");
    }
    if(Player.equips.PDranged!=""){
        EditButton("button9", function(){ResetButtons();
            choosePartAttack(Player.equips.PDranged,WeaponMap.get(Player.equips.PDranged).attack(),WeaponMap.get(Player.equips.PDranged).attackdescription)
        },Player.equips.PDranged, "Dummy Hovertext");
    }
    if(Player.equips.assaultranged!=""){
        EditButton("button10", function(){ResetButtons();
            choosePartAttack(Player.equips.assaultranged,WeaponMap.get(Player.equips.assaultranged).attack(),WeaponMap.get(Player.equips.assaultranged).attackdescription)
        },Player.equips.assaultranged, "Dummy Hovertext");
    }
    if(Player.equips.heavyranged!=""){
        EditButton("button11", function(){ResetButtons();
            choosePartAttack(Player.equips.heavyranged,WeaponMap.get(Player.equips.heavyranged).attack(),WeaponMap.get(Player.equips.heavyranged).attackdescription)
        },Player.equips.heavyranged, "Dummy Hovertext");
    }
    EditButton("button21", function(){ResetButtons();PlayerTurn()}, "Back", "")
}

function chooseTechnique(weapon){
    buttonindex=0;
    for(let [key, value] of Object.entries(weapon.technique)){
        buttonindex+=1;
        EditButton("button"+buttonindex, function(){
            ResetButtons();
            FlagMap.set("Technique"+weapon.type, value.name)
            AttackWeaponChoice();
        }, value.displayname, value.description)
        }
}

function choosePartAttack(weapon, aa, output){
    buttonindex=0;
    for(let [key, value] of Object.entries(Opponent.areas)){
        buttonindex+=1;
        EditButton("button"+buttonindex, function(){ResetButtons();
            hitchance = aa[3]-value.accuracy
            if(hitchance>=Math.random()){
                da = Opponent.PartDamage(aa[0], value.name, aa[1], aa[2]); 
                WriteToMainWindow(output(aa[0], 1, da, aa[2], value.displayname));
            }else{
                WriteToMainWindow(output(aa[0], 0, 0, aa[2], value.displayname));
            }EnemyTurn();}, value.displayname, "")
        }
        EditButton("button20", function(){chooseTechnique(WeaponMap.get(weapon))}, "Switch Techniques", "")
        EditButton("button21", function(){ResetButtons();PlayerTurn()}, "Back", "")
}


function TestAttackFunc(attackarray, output){
    damage = Opponent.Damage(attackarray[0], attackarray[1], attackarray[2])

    WriteToMainWindow("<br />Deck the enemy right in its stupid face.")
    EnemyTurn();}
new Event("TestAttack", function(){TestAttackFunc()})
function TestTeaseFunc(){
    Opponent.Damage("LP", -15, "sensual")
    WriteToMainWindow("<br />You shake your ass to tease the enemy into clapping your checks.")
    EnemyTurn();
}
new Event("TestTease", function(){TestTeaseFunc()})



function CreateEnemyStatBlock(){
    prim = document.getElementById("GameRight")

    node = document.createElement("div");
    node.id = "EnemyHolder"
    node.className = "EnemyHolder"
    prim.appendChild(node)
    prim = document.getElementById("EnemyHolder")
    node = document.createElement("div");
    node.id = "EnemyHPBarHolder"
    node.className = "BarHolder"
    prim.appendChild(node)
    node = document.createElement("div");
    node.id = "EnemyHPBarCurrent"
    node.className = "HPBarCurrent"
    document.getElementById("EnemyHPBarHolder").appendChild(node)
    
    node = document.createElement("div");
    node.id = "EnemyLPBarHolder"
    node.className = "BarHolder"
    prim.appendChild(node)
    node = document.createElement("div");
    node.id = "EnemyLPBarCurrent"
    node.className = "LPBarCurrent"
    document.getElementById("EnemyLPBarHolder").appendChild(node)

    node = document.createElement("img");
    node.id = "EnemyImage"
    node.className = "EnemyImageClass"
    prim.appendChild(node)
    
}

function BeginFight(Oppo){
TimeAddSec(1)
TrueReset();
Opponent = EnemyMap.get(Oppo)
Opponent.HPcur = Opponent.HPmax
Opponent.LPcur = 0
// Opponent.areas.forEach(function(value, key, map){Opponent.areas.get(key).CurHP = Opponent.areas.get(key).HP})
Opponent.StartingEvent()
CreateEnemyStatBlock()
Opponent.Damage("HP",0,"")
Opponent.Damage("LP",0,"")
PlayerTurn()
}



function PlayerTurn(){
    EditButton("button1", AttackWeaponChoice, "Attack", "")
    EditButton("button2", "TestTease", "Tease", "")
}
function EnemyTurn(){
    TimeAddSec(1)
    if(Opponent.HPcur <= 0){Opponent.ExitEvent(1);}
    else if(Opponent.LPcur >= Opponent.LPmax){Opponent.ExitEvent(2);}
    else if(Player.HPcur <= 0){Opponent.ExitEvent(-1);}
    else if(Player.LPcur >= Player.LPmax){Opponent.ExitEvent(-2);}
    else{Opponent.attackFunction();PlayerTurn()}
}

function gnathuntinfunc(){if(Math.random()>=0){BeginFight("Aggressive Gnat")}else{EraseMainWindow();WriteToMainWindow("Damn, no gnats around to clap your cheeks.")}}
new Event("GnatHunting", function(){gnathuntinfunc()})

new Event("BodyDescription", function(){WriteToMainWindow("<br /><br />");WriteToMainWindow(PlayerBodyDescription())})

function LookSelfButton(){EditButton("button6", "BodyDescription", "Look at yourself", "Have a look at yourself.")}

function FemVMascFacial(score){
    switch (true){
        //-100--90
        case (score<=-90):
            return "Pouty lips, round cheeks, and arched brows, your face is the epitome of femininity. Marking you undeniably and distinctly female."
        //-90--50
        case(score<=-50):
            return "A certain charm and strong feminine countenance is clear across your face, soft curves and gentle lips. "
        //-50--15
        case(score<=-15):
            return "While still remaining androgynous your visage has a touch of femininity, softening and lightening your overall visage. "
        //-15-15
        case(score<=15):
            return "Overall, your visage is androgynous, features that would look feminine or masculine based on the viewers desires, with charm that would attract just about anyone. "
        //15-50
        case(score<=50):
            return "Androgynous but somewhat strong angular facial features mark your face, strengthing and masculinizing your overall visage. "
        //50-90
        case(score<=90):
            return "A certain charm and strong masculine countenance is clear across your face, prominent cheeks and strong jaw. "
        //91-100
        case(score>90):
            return "Prominent forehead, angular cheeks, and strong jaw, your face is the epitome of masculinity. Marking you undeniably and distinctly male. "
        }

}

function PlayerBodyDescription(){

    BreastsString = ""
    PhalliString = ""
    VaginasString = ""
    for(i=0;i<Player.body.Breasts.length;i++){
        BreastsString += BodyPartMap.get(Player.body.Breasts[i].type).description()
    }
    for(i=0;i<Player.body.Phalli.length;i++){
        BreastsString += BodyPartMap.get(Player.body.Phalli[i].type).description()
    }
    for(i=0;i<Player.body.Vaginas.length;i++){
        BreastsString += BodyPartMap.get(Player.body.Vaginas[i].type).description()
    }

    // return ("You look at yourself. " +
    // BodyPartMap.get(Player.body.Hair.type).description() +  
    // BodyPartMap.get(Player.body.Skin.type).description() + 
    // BodyPartMap.get(Player.body.Head.type).description() + 
    // BodyPartMap.get(Player.body.Eyes.type).description() + 
    // BodyPartMap.get(Player.body.Head.type).description() + 
    // BodyPartMap.get(Player.body.Arms.type).description() + 
    // BodyPartMap.get(Player.body.Hands.type).description() + 
    // BodyPartMap.get(Player.body.Waist.type).description() + 
    // BodyPartMap.get(Player.body.Tail.type).description() + 
    // BodyPartMap.get(Player.body.Butt.type).description() + 
    // BodyPartMap.get(Player.body.Legs.type).description() + 
    // BodyPartMap.get(Player.body.Feet.type).description() +
    // BreastsString + PhalliString + VaginasString)

    return(BodyPartMap.get(Player.body.Hair.type).description()+
    BodyPartMap.get(Player.body.Face.type).description() + FemVMascFacial(Player.body.Face.score) +
    BodyPartMap.get(Player.body.Eyes.type).description() + BodyPartMap.get(Player.body.Ears.type).description()+ "<br /><br />" 
    +BodyPartMap.get(Player.body.Torso.type).description()+BodyPartMap.get(Player.body.Arms.type).description()+BodyPartMap.get(Player.body.Hands.type).description()
    +BodyPartMap.get(Player.body.Waist.type).description()+BodyPartMap.get(Player.body.Hips.type).description()+BodyPartMap.get(Player.body.Tail.type).description()
    +BodyPartMap.get(Player.body.Butt.type).description()+BodyPartMap.get(Player.body.Legs.type).description()+ BodyPartMap.get(Player.body.Feet.type).description())





}