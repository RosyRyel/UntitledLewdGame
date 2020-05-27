//Main calls on all modules, draws UI, and defines stats
document.getElementById("UntitledProjectGame").onload = DrawMenu();
EventMap = new Map();
RoomMap = new Map();
PlaneMap = new Map();
FlagMap = new Map();
EnemyMap = new Map();
BodyPartMap = new Map();
StringMap = new Map();
ClothingMap = new Map();
WeaponMap = new Map();
ItemMap = new Map();
EnemyHitAreaMap = new Map();
StatusMap = new Map();
Inventory = new Map();
DEBUG=3;


function Nonim(){PNarray = FlagMap.get("NominativePN");return PNarray[getRandInt(0 ,PNarray.length)]}
function Accus(){PNarray = FlagMap.get("AccusativePN");return PNarray[getRandInt(0 ,PNarray.length)]}
function Prono(){PNarray = FlagMap.get("PronominalPN");return PNarray[getRandInt(0 ,PNarray.length)]}
function Predi(){PNarray = FlagMap.get("PredicativePN");return PNarray[getRandInt(0 ,PNarray.length)]}
function Refle(){PNarray = FlagMap.get("ReflexivePN");return PNarray[getRandInt(0 ,PNarray.length)]}
function TimeAddSec(sec){FlagMap.set("LastTimeCheck", FlagMap.get("Time"));FlagMap.set("Time", FlagMap.get("Time")+sec)}
function TimeAddMin(min){FlagMap.set("LastTimeCheck", FlagMap.get("Time"));FlagMap.set("Time", FlagMap.get("Time")+(min*60))}
function TimeAddHrs(hrs){FlagMap.set("LastTimeCheck", FlagMap.get("Time"));FlagMap.set("Time", FlagMap.get("Time")+(hrs*3600))}
//not gonna lie, I kinda just flopped around with modulo and division and unit conversions for a while and it looks like it works
//I'm too stupid to be able to perform basic math, why am I attempting this
//Returns a Time object
//Wait what the fuck is this? I made this? I must have been tired, I dont fucking know why the minutes are stored like seconds
//Okay... I think I fixed the problem, uh, not quite sure how it works so its a bit of a black box but there is a reason we just use seconds and this is for display
function TimeReturn(){
    TimeSec = FlagMap.get("Time")%60;
    TimeMin = Math.floor(((FlagMap.get("Time")%3600)-TimeSec)/60);
    TimeHrs = Math.floor(((FlagMap.get("Time")%86400)-TimeMin-TimeSec)/3600);
    TimeDays = Math.floor(((FlagMap.get("Time"))-(TimeHrs+TimeMin+TimeSec))/86400);
    return [TimeDays, TimeHrs, TimeMin, TimeSec];
}

//TODO struggle states, figure some standard to handle them all by
FlagMap.set("StruggleState")

FlagMap.set("LastTimeCheck", FlagMap.get("Time"))


//Call whenever the gamestate or UI needs update 
function StateUpdate(){
UpdateStatDisplay();
PlayerDamage("HP",0,"pierce")
PlayerDamage("LP",0,"pierce")
PlayerDamage("SP",0,"pierce")
print(TimeReturn(), 3)
StatusCheckUp()
}

function ResetButton(id){EditButton(id, "EmptyEvent", "", "")};
function ResetButtons(){for(i=1;i<=21;i++){ResetButton("button"+i);}}
function getString(string){
    try{
        return StringMap.get(string)()
    }catch{
        return StringMap.get(string)
    }
}
function addString(key, string){StringMap.set(key, string)}
//shorthand to not fill up console, level designates how much should print out
function print(text, level){
    if(DEBUG >= level){
        console.log(text)
    }
}

function DrawMenu(){
    Master = document.getElementById("UntitledProjectGame");
    node = document.createElement("DIV"); node.id = "GameHeader"; node.className = "gridobject"; Master.appendChild(node);
    node = document.createElement("DIV"); node.id = "GameLeft"; node.className = "gridobject"; Master.appendChild(node);
    node = document.createElement("DIV"); node.id = "GamePrimary"; node.className = "gridobject"; Master.appendChild(node);
    node = document.createElement("DIV"); node.id = "GameRight"; node.className = "gridobject"; Master.appendChild(node);
    node = document.createElement("DIV"); node.id = "GameFooter"; node.className = "gridobject"; Master.appendChild(node);
    new DrawButtons();
}


function DrawButtons(){
    Master = document.getElementById("GameFooter");
    for(i=1;i<=21;i++){
        node = document.createElement("button");
        node.id = "button"+i;
        node.className = "buttongrid";
        Master.appendChild(node);
        }
    Master = document.getElementById("GameHeader");
    node = document.createElement("button");
    node.id = "SaveButton";
    node.className = "HeaderButton";
    node.onclick = function(){Save()}
    node.innerHTML = "Save"
    Master.appendChild(node);
    node = document.createElement("button");
    node.id = "LoadButton";
    node.className = "HeaderButton";
    node.onclick = function(){document.getElementById('fileloader').click();}
    node.innerHTML ="Load"
    Master.appendChild(node);
    node = document.createElement("input");
    node.id = "fileloader";
    node.type="file";
    node.onchange = function(){LoadFile();}
    node.style = "display: none;";
    Master.appendChild(node)
}

function EraseMainWindow(){document.getElementById("GamePrimary").innerHTML="";}

function WriteToMainWindow(input){
    win = document.getElementById("GamePrimary");
    win.innerHTML += input;
    win.scrollTop = win.scrollHeight;
}

function EditButton(id, event, text, hovertext){
    //print(id + " " + event + " " + text)
    Button = document.getElementById(id);
    if(hovertext==""){
        Button.innerHTML = text + '<span class="tooltip">'+hovertext+'</span>'
    }else{
    Button.innerHTML = text + '<span class="tooltip"><div class="tooltiptext">'+hovertext+'</div></span>'
}
    if(EventMap.get(event) == undefined){
        Button.onclick = event;
    }else{
    Button.onclick = function(){EventMap.get(event)()};
    }
}

function Event(name, func){EventMap.set(name, func);}
new Event("EmptyEvent", function(){});


function Room(name, event, displayname){
    this.name = name;
    this.event = event;
    this.disname = displayname || name
    RoomMap.set(name, this)
}

function Clothing(name, type, bludgeon, slash, pierce, heat, cold, electric, poison, carnal, sensual, psionic, flags, description, displayname, special){
    this.name = name;
    this.displayname= displayname || name;
    this.type = type;
    this.stats = {
        bludgeon: bludgeon,
        slash: slash,
        pierce: pierce,
        heat: heat,
        cold: cold,
        electric: electric,
        poison: poison,
        carnal: carnal,
        sensual: sensual,
        psionic: psionic,
    }
    this.description = description;
    this.special = special;
    this.flags = flags;
    ClothingMap.set(name, this)
}

//attack is a function that outputs a array of 3 things, the damage, the type, and whether it is LP or HP.
//technique is a array of objects made of 3 strings, name, displayname, and description.
function Weapon(name, type, attack, technique, flags, attackdescription, description, displayname, special){
    this.name = name;
    this.displayname= displayname || name;
    this.type = type;
    this.attack = attack;
    this.technique = technique;
    this.special = special;
    this.flags = flags;
    this.attackdescription = attackdescription;
    this.description = description;
    WeaponMap.set(name, this);
}

function Item(name, type, onuse, displayname, description){
    this.name = name;
    this.displayname= displayname || name;
    this.type = type;
    this.onuse = onuse;
    this.description = description
    ItemMap.set(name, this);
}

function AddInventoryEntry(name, type, amount, displayname){
    if(Inventory.get(name)!= undefined){
        if(amount == undefined){Inventory.get(name).amount += 1}
        else{Inventory.get(name).amount += amount}
    }else{
        if(amount == undefined){Inventory.set(name, new InventoryEntry(name, type, 1))}
        else{Inventory.set(name, new InventoryEntry(name, type, amount, displayname))}
    }
}

function InventoryEntry(name, type, amount, displayname){
    this.name = name;
    this.type = type;
    this.amount = amount;
    //this.displayname= displayname || name;
    print(name, 3)
    if(this.type=="Clothing"){this.displayname = ClothingMap.get(this.name).displayname; this.description = ClothingMap.get(this.name).description}
    else if(this.type=="Weapon"){this.displayname = WeaponMap.get(this.name).displayname; this.description = WeaponMap.get(this.name).description} 
    else{this.displayname = ItemMap.get(this.name).displayname; this.description = ItemMap.get(this.name).description}
    this.use = function(){
        if(this.type=="Clothing"){
            if(Player.clothing[ClothingMap.get(this.name).type]!=""){
                new AddInventoryEntry(Player.clothing[ClothingMap.get(this.name).type],"Clothing",Player.clothing[ClothingMap.get(this.name).type])
                
            }
            this.amount -= 1;
            Player.clothing[ClothingMap.get(this.name).type] = ClothingMap.get(this.name).name
        }else if (this.type=="Weapon"){
            if(Player.equips[WeaponMap.get(this.name).type]!=""){
                new AddInventoryEntry(Player.equips[WeaponMap.get(this.name).type],"Weapon")
            }
            this.amount -= 1;
            Player.equips[WeaponMap.get(this.name).type] = WeaponMap.get(this.name).name
        }else{
            this.amount -= 1;
            ItemMap.get(this.name).onuse();
        }
        if(this.amount<=0){
            Inventory.delete(this.name);
        }
    }
    return this;
}

function InventoryButtons(value, key){
    EditButton("button" + inventoryindex, function(){value.use();InventoryMenu()}, value.displayname +" x" +value.amount, value.description)
    inventoryindex++;
}

function InventoryMenu(){
    ResetButtons();
    inventoryindex = 1;
    Inventory.forEach(InventoryButtons);
    EditButton("button21", "CurrentRoomEvent", "Back", "");
}

//stats go like this, VIG, THW, DEX, SEN, ACU, WIL, AUR, LIB
//At some point, implement individual limb damages and sensitivities, as well as the same for enemies.
function CreatePlayer(name, basestats, plane, coords, body){
    this.name = name;
    this.basestats={
        VIG: basestats[0] || 1,
        THW: basestats[1] || 1,
        DEX: basestats[2] || 1,
        SEN: basestats[3] || 1,
        WIL: basestats[4] || 1,
        AUR: basestats[5] || 1,
        ACU: basestats[6] || 1,
        LIB: basestats[7] || 1
    }
    this.skills={
        sensualphysical: 0, //using what you got to tease the enemy visually
        sensualmental: 0, //using cleverness to fluster and tease the enemy
        carnalphysical: 0, //using what you got to get a little bit closer to the enemy for teasing
        carnalmental: 0, //using cleverness to get a bit closer and fluster and tease the enemy
        meleeslash: 0, //using slashing based melee attacks
        meleepierce: 0, //using piercing based melee attacks
        meleebash: 0, //using bash based melee attacks
        rangedtraditional: 0, //using bows, crossbows, slings, mediveal siege weapons
        rangedfirearms: 0, //using chemical based guns, cannons, explosives weapons
        rangedadvanced: 0, //using laser, magnetic, or magic based weapons
        magicdivine: 0, //calling upon faith in something to power magical spells
        magicarcane: 0, //calling upon knowledge of the universe to power magical spells
        magicpsionic: 0, //calling upon strength of will to power magical spells

    }
    this.compstats={
        VIG: basestats[0] || 1,
        THW: basestats[1] || 1,
        DEX: basestats[2] || 1,
        SEN: basestats[3] || 1,
        WIL: basestats[4] || 1,
        AUR: basestats[5] || 1,
        ACU: basestats[6] || 1,
        LIB: basestats[7] || 1
    }
    this.plane = plane;
    this.coords = coords;
    this.HPmax = this.basestats.VIG + 100;
    this.HPcur = this.HPmax
    this.LPmax = this.basestats.WIL + 100;
    this.LPcur = 0;
    this.SPmax = 100;
    this.SPcur = this.SPmax;
    this.body = body;
    this.clothing = {
        hat: "",
        hair: "",
        eyesnormal: "",
        eyesarmor: "",
        mouthcovering: "",
        headarmor: "",
        delicatestorso: "",
        closetorso: "",
        normaltorso: "",
        outertorso: "",
        armortorso: "",
        closearms: "",
        normalarms: "",
        armorarms: "",
        delicateslegs: "",
        closelegs: "",
        normallegs: "",
        outerlegs: "",
        armorlegs: "",
        handsnormal: "",
        handsarmor: "",
        feetclose: "",
        feetnormal: "",
        feetarmor: "",
    }
    this.equips = {
        holdoutmelee: "",
        PDmelee: "",
        assaultmelee: "",
        heavymelee: "",
        holdoutranged: "",
        PDranged: "",
        assaultranged: "",
        heavyranged: ""
    }
    this.status = [];
    this.perks = [];
    return this
}

function ShowWeapons(){
    buttonindex=0;
    for(let [key, value] of Object.entries(Player.equips)){
        buttonindex++;
        WriteToMainWindow(key + " : " + value + "<br />")
        if(value!=""){

        }
    } 
    EditButton("button21", "CurrentRoomEvent", "Back", "");
}

function unequip(){}


function PlayerStatCalc(){
    for(i = 0; i<Player.status.length;i++){
        StatusMap.get(Player.status[i].name).stat()
    }
}

function UpdateStatDisplay(){
    PlayerStatCalc()
    for(i in Player.basestats){
        document.getElementById(i).innerHTML =Player.compstats[i]
    }
}
function PlayerDamage(form, damage, type){
    cur =form+"cur"
    max =form+"max"
    res = Playertyperesistance(type)
    if(res==NaN){res=1}
    Player[cur] -= damage*res
    //console.log(damage*res)
    Player[cur] = (Math.round(Player[cur]*100)/100)
    document.getElementById("Player"+form+"BarCurrent").style.width = ((Player[cur]/Player[max])*100) + "%"
    document.getElementById("Player"+form+"BarCurrent").innerHTML = (Player[cur]+"/"+Player[max])
}

function Playertyperesistance(damagetype){
    resistance = 1
    for (let [key, value] of Object.entries(Player.body))
        {if(key != "Breasts" && key != "Phalli" && key != "Vaginas" && key != "Fat" && key != "Muscle" && key != "Height"){
            resistance += BodyPartMap.get(value.type).stats[damagetype]
        }
    }
      for (let [key, value] of Object.entries(Player.clothing)) 
      {if(value!="")
          {resistance += ClothingMap.get(value).stats[damagetype]}}
    //console.log("Resistance to " + damagetype + " is " + resistance)
    return resistance
}

//modify flag will either create a new flag, or modify a existing flag
function ModifyFlag(name, input){FlagMap.set(name, input);}
function CheckFlag(name){return FlagMap.get(name)}
//No we don't call this much, and when we do we don't provide many if any of the arguments, but this is more of a outline of the Body object then anything
//type attributes are just strings that point to the bodypart on the BodyPartMap
function Body(Hair, Skin, Face, Eyes, Ears, Head, Torso, Arms, Hands, Waist, Hips, Tail, Butt, Legs, Feet, Breasts, Phalli, Vaginas, Fat, Muscle){
    this.Hair = {type: Hair[0], color: Hair[1]};
    this.Skin = {type: Skin[0], color: Skin[1]};
    this.Face = {type: Face[0], score: Face[1], lipscolor:Face[2]};
    this.Eyes = {type: Eyes[0], color: Eyes[1]};
    this.Ears = {type: Ears[0]}
    this.Head = {type: Head[0]};
    this.Torso = {type: Torso[0], muscle:Torso[1]};
    this.Arms = {type: Arms[0], muscle:Arms[1]};
    this.Hands = {type: Hands[0], nailstyle: Hands[1], nailcolor: Hands[2]};
    this.Waist = {type: Waist[0], muscle:Waist[1], fat:Waist[2]};
    this.Hips = {type: Hips[0], size: Hips[1], fat:Hips[2]}
    this.Tail = {type: Tail[0]};
    this.Butt = {type: Butt[0], size: Butt[1], muscle: Butt[2], fat: Butt[3]};
    this.Legs = {type: Legs[0], muscle: Legs[1], fat:Legs[2]};
    this.Feet = {type: Feet[0], nailstyle: Feet[1], nailcolor: Feet[2]};
    //Breasts, Phalli, and Vaginas are all arraries of objects like above, with Breast and Vagina objects having the just the type and size attribute, while phalli have a type, length, and girth, and ball size 
    //Yes the plural of phallus is phalli, yeah I know, it doesn't sound or look right does it?
    this.Breasts = Breasts;
    this.Phalli = Phalli;
    this.Vaginas = Vaginas;
    //Fat and Muscle are just ints that should scale from 0-100, with average numbers resting at 25 for Fat, and about 35 for Muscle
    this.Fat = Fat;
    this.Muscle = Muscle;
    this.Height = 165;

    return this
}
//desciptors is a function that returns a string for a descriptor of that part
function BodyPart(name, description, descriptors, Baseresist, abilities){
    this.name = name;
    this.description = description;
    this.descriptors = descriptors;
    this.abilities = abilities;
    this.stats={
        bludgeon:Baseresist[0],
        slash:Baseresist[1],
        pierce:Baseresist[2],
        heat:Baseresist[3],
        cold:Baseresist[4],
        electric:Baseresist[5],
        poison:Baseresist[6],
        carnal:Baseresist[7],
        sensual:Baseresist[8],
        psionic:Baseresist[9],
    }
    // this.BaseHP = BaseHP;
    // this.Baseaccuracy = Baseaccuracy;
    // this.Basemodifier = Basemodifier;
    BodyPartMap.set(name, this)
}
//arearesist is bludgeon, slash, pierce, heat, cold, electric, carnal resist in that order
function EnemyHitArea(name, HP, bludgeon, slash, pierce, heat, cold, electric, carnal, accuracy, multiplier, displayname, state){
    this.name = name;
    this.displayname= displayname || name;
    this.stats={
        bludgeon:bludgeon,
        slash:slash,
        pierce:pierce,
        heat:heat,
        cold:cold,
        electric:electric,
        carnal:carnal
    }
    this.HP = HP
    this.HPcur = HP
    this.accuracy = accuracy
    this.multiplier = multiplier
    this.state = state || 1
    return this
}

//areas is a object that holds EnemyHitArea objects
function Enemy(name, HP, LP, attackFunction, introEvent, exitEvent, areas, resistance, displayname){
    this.name = name;
    this.displayname= displayname || name;
    this.HPmax = HP;
    this.LPmax = LP;
    this.HPcur = HP
    this.LPcur = 0
    this.Damage = function(form, damage, type){
        cur =form+"cur"
        max =form+"max"
        resis = this.typeresistance(type)
        //console.log(resis)
        this[cur] -= damage*resis
        this[cur] = (Math.round(this[cur]*100)/100)
        document.getElementById("Enemy"+form+"BarCurrent").style.width = ((this[cur]/this[max])*100) + "%"
        document.getElementById("Enemy"+form+"BarCurrent").innerHTML = (this[cur]+"/"+this[max])
    }
    this.PartDamage = function(form, area, basedamage, type){
        focus = this.areas[area];
        partdamage = basedamage * (1+focus.stats[type]);
        if(form=="HP"){
        focus.HPcur = focus.HPcur - partdamage;
        totaldamage = partdamage * focus.multiplier;
        this.Damage("HP", totaldamage, "full")
        dam = totaldamage}
        else if(form=="LP"){
            this.Damage("LP", partdamage, "full")
        dam=partdamage}
        return dam;
        }
    this.typeresistance = function(damagetype){
        resistance=1;
        for (let [key, value] of Object.entries(this.areas)){resistance += value.stats[damagetype]}
        console.log(resistance)
        if(isNaN(resistance)){resistance=1; console.log("res was wrong")}
        return resistance;
    }
    this.attackFunction = attackFunction;
    this.StartingEvent = introEvent;
    this.ExitEvent = exitEvent;
    this.areas = areas;
    this.baseresistances={
            poison: resistance[0],
            sensual: resistance[1],
            psionic: resistance[2]
        }
    EnemyMap.set(name, this);
}

function ChangeEnemyImage(image){document.getElementById("EnemyImage").src = image;}

function EnemyDamage(form, damage, type){
    Opponent.CurHP -= damage
    document.getElementById("EnemyHPBarCurrent").style.width = ((Opponent.CurHP/Opponent.HP)*100) + "%"
    document.getElementById("EnemyHPBarCurrent").innerHTML = (Opponent.CurHP+"/"+Opponent.HP)
}

//period is how long(IN SECONDS) a status is present before its effect is ran, stat is a function that runs whenever stuff is checked for stat calcs
//remove is a function that is ran when the status is removed from the player
function Status(name, period, time, stat, effect, removed){
    this.name = name;
    this.period = period;
    this.time = time;
    this.stat = stat;
    this.effect = effect;
    this.removed = removed;
    StatusMap.set(name, this);
}

//this really is a testament to how fucked this project is getting
function GiveStatus(name, duration){
    Player.status.push(status={name:name,duration:duration})
}

function RemoveStatus(name){
    for(i=0;i<=Player.status;i++){
        if(Player.status[i].name == name){
            StatusMap.get(Player.status[i].name).removed()
            Player.status.splice(i, 1)
            return 0;
        }
    }
    print("Error Status Removal failed... attempted to remove "+ name +" Please Report this error and any relvent info to the devs!",0)
}

function StatusCheckUp(){
    for(i in Player.status){
        NumberOfEffects = Math.floor((FlagMap.get("Time")-FlagMap.get("LastTimeCheck"))/StatusMap.get(Player.status[i].name).period)
        MaxNumberOfEffects = Math.floor(Player.status[i].duration/StatusMap.get(Player.status[i].name).period)
        // print(NumberOfEffects,3)
        // print(MaxNumberOfEffects, 3)
        if(NumberOfEffects>0 && NumberOfEffects<MaxNumberOfEffects){
            for(j=0;j<NumberOfEffects;j++){StatusMap.get(Player.status[i].name).effect()}
            Player.status[i].duration-=FlagMap.get("Time")-FlagMap.get("LastTimeCheck")
        }else if(NumberOfEffects>=MaxNumberOfEffects){
            for(j=0;j<=MaxNumberOfEffects;j++){
                StatusMap.get(Player.status[i].name).effect()
                RemoveStatus(Player.status[i].name)
            }
        }
    }
    print("StatusCheckUp Complete...", 3)
}


new Status("TestStatus", 3, 60, function(){Player.compstats.VIG=Player.basestats.VIG+1}, function(){alert("TestMessage")}, function(){WriteToMainWindow("TestStatus Removed...")})

function CreatePlayerStatBlock(){
    prim = document.getElementById("GameLeft")
    node = document.createElement("div");
    node.id = "PlayerHPBarHolder"
    node.className = "BarHolder"
    prim.appendChild(node)
    node = document.createElement("div");
    node.id = "PlayerHPBarCurrent"
    node.className = "HPBarCurrent"
    document.getElementById("PlayerHPBarHolder").appendChild(node)
    
    node = document.createElement("div");
    node.id = "PlayerLPBarHolder"
    node.className = "BarHolder"
    prim.appendChild(node)
    node = document.createElement("div");
    node.id = "PlayerLPBarCurrent"
    node.className = "LPBarCurrent"
    document.getElementById("PlayerLPBarHolder").appendChild(node)
    
    node = document.createElement("div");
    node.id = "PlayerSPBarHolder"
    node.className = "BarHolder"
    prim.appendChild(node)
    node = document.createElement("div");
    node.id = "PlayerSPBarCurrent"
    node.className = "SPBarCurrent"
    document.getElementById("PlayerSPBarHolder").appendChild(node)

    node = document.createElement("DIV"); node.id = "StatHolder"; node.className = "StatHolder"; document.getElementById("GameLeft").appendChild(node);
    prim = document.getElementById("StatHolder");

    node = document.createElement("DIV"); node.id = "VIGText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("VIGText").innerHTML = 'VIG<span class="tooltip"><span class="tooltip"><div class="tooltiptext">Vigor is the primary stat for your HP, also has a small effect on your LP. Vigor is your physical endurance and fortitude, deciding things like long you can sprint, hold your breath, etc</div></span>'
    node = document.createElement("DIV"); node.id = "VIG"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("VIG").innerHTML = Player.compstats.VIG

    node = document.createElement("DIV"); node.id = "THWText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("THWText").innerHTML = 'THW<span class="tooltip"><div class="tooltiptext">Thew determines how physically strong you are. How much weight can you carry, how hard you can push something, etc. Thew is not muscle tone, one can have muscle tone while also having relatively low thew, although muscle tone tends to come along with thew.</div></span>'
    node = document.createElement("DIV"); node.id = "THW"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("THW").innerHTML = Player.compstats.THW

    node = document.createElement("DIV"); node.id = "DEXText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("DEXText").innerHTML = 'DEX<span class="tooltip"><div class="tooltiptext">Dexterity is a measure of physical reflexes and coordination. How quickly can you move out of the way of something, how smoothly can you grab something hidden, how quickly you can assume a good landing position when falling.</div></span>'
    node = document.createElement("DIV"); node.id = "DEX"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("DEX").innerHTML = Player.compstats.DEX

    node = document.createElement("DIV"); node.id = "SENText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("SENText").innerHTML = 'SEN<span class="tooltip"><div class="tooltiptext">Sensitivity is a measure of how much you feel physically. How distracting is someone touching your erogenous zones, how much willpower will it take to stay standing when hit particularly hard, etc. Being sensitive has its advantages however, it allows you to perceptive more in your enviroment, and negative afflictions will begin to be more obvious quicker </div></span>'
    node = document.createElement("DIV"); node.id = "SEN"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("SEN").innerHTML = Player.compstats.SEN

    node = document.createElement("DIV"); node.id = "WILText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("WILText").innerHTML = 'WIL<span class="tooltip"><div class="tooltiptext">Willpower is your ability to keep control of yourself mentally. How much lust until you give in to the feeling, your defenses against mental assaults, how easily you fall for tempting offers, etc. Willpower is the primary stat for your LP, and also has a affect on your HP.</div></span>'
    node = document.createElement("DIV"); node.id = "WIL"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("WIL").innerHTML = Player.compstats.WIL

    node = document.createElement("DIV"); node.id = "AURText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("AURText").innerHTML = 'AUR<span class="tooltip"><div class="tooltiptext">Aura is the mental presense you have on others. How easily can you shift a conversation topic without being obvious, how much you influence the emotions of those around you, how hard is it to remain heard when many other thoughts fill a topic.</div></span>'
    node = document.createElement("DIV"); node.id = "AUR"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("AUR").innerHTML = Player.compstats.AUR

    node = document.createElement("DIV"); node.id = "ACUText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("ACUText").innerHTML = 'ACU<span class="tooltip"><div class="tooltiptext">Acuity assesss how quick you are mentally and how clearly you can process info. Can you quickly put together that youre walking into a trap, how quickly can you determine the necessary manuver to avoid being hit, can you come up with a convincing lie in time to answer someones question?</div></span>'
    node = document.createElement("DIV"); node.id = "ACU"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("ACU").innerHTML = Player.compstats.ACU

    node = document.createElement("DIV"); node.id = "LIBText"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("LIBText").innerHTML = 'LIB<span class="tooltip"><div class="tooltiptext">Libido determines how horny you get naturally, in addition it effects how easily you get affected by sensual attacks. Its not all bad though, your libido rubs off on others the higher your Aura is.</div></span>'
    node = document.createElement("DIV"); node.id = "LIB"; node.className = "Stat"; prim.appendChild(node);
    document.getElementById("LIB").innerHTML = Player.compstats.LIB


    

    
    
}

function FlagMapToPrimative(){
    PrimativeMap = {}
    FlagMap.forEach(function(key, value){PrimativeMap[value] = key})
    return PrimativeMap
}

function FlagJSONToFlagMap(string){
    Prim = JSON.parse(string)
    FlagMap.clear()
    for (prop in Prim){
        FlagMap.set(prop, Prim[prop])
    }
    console.log("done parsing flags...")
}

function InventoryMapToPrimative(){
    PrimativeMap = {}
    Inventory.forEach(function(key, value){PrimativeMap[value] = key})
    return PrimativeMap
}

function InventoryJSONStringToInventory(string){
    Prim = JSON.parse(string)
    Inventory.clear()
    for (prop in Prim){
        AddInventoryEntry(Prim[prop].name, Prim[prop].type, Prim[prop].amount, Prim[prop].displayname)
    }
    console.log("done parsing save items...")
}

function Save(){
    playerjsonstring=JSON.stringify(Player);
    inventoryjsonstring=JSON.stringify(InventoryMapToPrimative())
    flagjsonstring=JSON.stringify(FlagMapToPrimative())
    download("TestSave.elsf", "Now don't be naughty now and go save editing now, its not like I left the save data open and so vulnerable for messing around or lewd adventures if you wanted to or anything, B-b-baka!\n"+playerjsonstring+"\n"+inventoryjsonstring+"\n"+flagjsonstring);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function LoadFile(){
    selectedFile = document.getElementById('fileloader').files[0];
    fr = new FileReader();
    fr.onload = function() {
        save=fr.result
        console.log(save);
        savearray=save.split("\n")
        console.log(savearray)
        Player = JSON.parse(savearray[1]);
        InventoryJSONStringToInventory(savearray[2])
        FlagJSONToFlagMap(savearray[3])
        alert("Loaded save!")
        EventMap.get("CurrentRoomEvent")()
    }
    fr.readAsText(selectedFile);
}


//Can you seriously believe that the native JS math lib doesn't have this goddamn function? What kind of bullshit is that?
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function assnames(){
    assname= ["butt", "ass", "booty", "bottom", "backside", "rear", "rump", "tush", "pair of buns", "bum", "arse", "hindquarters", "derriere", "tushie", "cheeks", "bootie", "posterior"]
    return assname[getRandInt(0, assname.length)]
}

function StatMultipler(stat){}

