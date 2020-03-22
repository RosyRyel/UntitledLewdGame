new Item("TestItem", "Consumable", function(){console.log("This Test Worked!")})
new Clothing("shirt", "normaltorso", 0,0,0,0,0,0,0,0,0,0,[], "Dummy Clothing Description")
new Weapon("knife", "holdoutmelee", function(){return ["HP", 5, "slash", .95]}, [],
function(form, hit, damage, type, area){
    if(hit==1){return "<br />You slash with your knife at the " + Opponent.displayname + "'s " + area + " dealing " + damage + " " + form + " " + type + " damage!"}
    else{return "<br />You try to attack the " + Opponent.displayname + "'s " + area + " with your knife at the, but you miss!"}
    }, 
"Dummy Weapon Description")



AddInventoryEntry("TestItem", "Consumable", 10, "Bag O' Dicks")
AddInventoryEntry("knife", "Weapon", 1, "Pocket Knife")
AddInventoryEntry("shirt", "Clothing", 1, "T-Shirt")