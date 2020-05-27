new Item("TestItem", "Consumable", function(){console.log("This Test Worked!")}, "Bag O' Dicks")
new Clothing("shirt", "normaltorso", 0,-.02,-.01,-.01,-.01,-.01,0,-.02,0,0,[], "A plain white shirt, while it does little more then protect your modesty it definitely is better then nothing.", "Plain Shirt")
new Clothing("briefs", "delicateslegs", 0,-.005,-.005,-.01,-.01,-.005,0,-.01,0,0,[],"Plain white boxer briefs, traditionally thought of as a male undergarment, at least back home. Regardless of what this new world holds, atleast you'll have something familiar covering and protecting your delicates.", "Briefs")
new Clothing("boyshorts", "delicateslegs", 0,-.005,-.005,-.01,-.01,-.005,0,-.01,0,0,[],"A pair of ordinary boyshorts, a nice middle ground between the comfort of more feminine underwear and the utilitarian nature of more masculine garments, perfect for any androgyne.", "Boyshorts")
new Clothing("pantybriefs", "delicateslegs", 0,-.005,-.005,-.01,-.01,-.005,0,-.01,0,0,[],"A typically feminine undergarment back home, although you imagine this world may care a bit less about that. Atleast it'll protect your sensitive bits from the assorted horrors of this new world.", "Briefs")
new Clothing("jeans", "normallegs", 0,-.04,-.025,-.01,-.01,-.005,0,-.02,0,0,[],"Probably the most ubiquitous style of pants back home, it seems this world has a similar sense of everyday fashion. Utilitarian but fashionable, Durable but comfortable, truly a pair of pants that earns it's spot in any closet.", "Jeans")
new Clothing("socks", "feetclose", 0, 0, 0, 0, -.01, 0, 0, 0, 0, 0, [], "Plain white socks, keep your feet comfortable in shoes atleast.", "Ankle Socks")
//Think like a roman Caligae
new Clothing("sandals", "feetnormal", 0, -.005, 0, -.05, .05, -.02, 0, 0, 0, 0, [], "Similar in design to some more ornate work sandals back home, seems like it was made out of a material similar to that of leather. Definitely nicer then a pair of tennis shoes in the local warm climate.", "Shoes")


new Weapon("knife", "holdoutmelee", function(){
    if(FlagMap.get("Techniqueholdoutmelee")=="KnifeStab")
    {return ["HP", 5, "pierce", .95]}
    else
    {return ["HP", 5, "slash", .95]}
},
[new techmaker("KnifeSlash", "Slashing", "Try slashing with your weapon"), new techmaker("KnifeStab", "Stabbing", "Try stabbing with your weapon")] , ["laughable"],
function(form, hit, damage, type, area){
    if(hit==1){
        return "<br />You attack with your knife at the " + Opponent.displayname + "'s " + area + " dealing " + damage + " " + form + " " + type + " damage!"}
    else{
        return "<br />You try to attack the " + Opponent.displayname + "'s " + area + " with your knife at the, but you miss!"}
    }, 
"A rather basic folding pocket knife, the blade can't be more then 5cm in length, less of a weapon and more of a tool, but its better then nothing. Atleast it appears to be sharpened quite well and even the blade's tip looks threatening, meaning it could be used for slashing or stabbing.", "Pocket Knife")

new Weapon("derringer", "holdoutranged", function(){
    if(FlagMap.get("Techniqueholdoutranged")=="Shoot")
    {return ["HP", 15, "pierce", .95]}
    else
    {return ["HP", 2.5, "bludgeon", .95]}
},
[new techmaker("Shoot", "Shooting", "Try shooting with your weapon"), new techmaker("PistolWhip", "Bludgeon", "Try pistolwhipping with your weapon")] , ["laughable"],
function(form, hit, damage, type, area){
    if(hit==1){
        if(FlagMap.get("Techniqueholdoutranged")=="Shoot"){return "<br />You shoot your derringer at the " + Opponent.displayname + "'s " + area + " dealing " + damage + " " + form + " " + type + " damage!"}
        return "<br />You attack with your derringer at the " + Opponent.displayname + "'s " + area + " dealing " + damage + " " + form + " " + type + " damage!"}
    else{
        return "<br />You try to attack the " + Opponent.displayname + "'s " + area + " with your derringer at the, but you miss!"}
    }, 
"A palm sized gun utilizing gunpowder or as the natives call it, a 'powder slinger'. You can only load 2 bullets in it at a time and they're almost comically small. It lacks even the most basic of sights, not like a gun this small could hit anything far enough away to justify using sights anyways. On the plus side, its small form factor means its virtually impossible to notice outside of a complete strip search, and any amount of gun will make most enemies your size or smaller think twice.", "Derringer")


function techmaker(name, displayname, description){
    this.name=name;
    this.displayname=displayname;
    this.description=description;
    return this
}

AddInventoryEntry("derringer", "Weapon", 1)
AddInventoryEntry("TestItem", "Consumable", 10)
AddInventoryEntry("knife", "Weapon", 1,)
AddInventoryEntry("shirt", "Clothing", 1,)
AddInventoryEntry("boyshorts", "Clothing", 1)
AddInventoryEntry("jeans", "Clothing", 1)
AddInventoryEntry("socks", "Clothing", 1)
AddInventoryEntry("sandals", "Clothing", 1)
