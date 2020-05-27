function TestEnemyAttackFunc(){
    if(Math.random()>=.5){
        damage= Math.round(Math.random() * 10);
        PlayerDamage("HP", damage, "psionic");
        WriteToMainWindow("<br />Ah fuck that thing is annoying and does " + damage + " damage to you.")
    }else{
        damage= Math.round(Math.random() * 10);
        PlayerDamage("LP", -damage, "sensual");
        WriteToMainWindow("<br />It just kinda buzzes, and thats kinda hot... dealing " + damage + " lust damage")
    }
}

GnatAreas= {
    head:new EnemyHitArea("head", 25, 0,0,0,0,0,0,0,.5,1.5,"head"),
    torso:new EnemyHitArea("torso", 75, 0,0,0,0,0,0,0,0,1,"thorax")
}


new Enemy("Aggressive Gnat", 100, 100, 
function(){TestEnemyAttackFunc();}, 
function(){WriteToMainWindow("A gnat appears and annoys you");}, 
function(input){
    TrueReset()
    if(input==1){WriteToMainWindow("The gnat explodes");}
    else if(input==2){WriteToMainWindow("The gnat nuts so hard it explodes into semen");}
    else if(input==-1){WriteToMainWindow("The gnat fucking kicks your ass before leaving you be")}
    else if(input==-2){WriteToMainWindow("The gnat makes you cum fuckin buckets somehow?")}
    EditButton("button1", "CurrentRoomEvent", "Continue on...", "")}, GnatAreas, [1,1,1])





    
// function ClearSlimeAttackFunc(){
//     if(Math.random()>=.5){
//         damage= Math.round(Math.random() * 10);
//         PlayerDamage("HP", damage, "bludgeon");
//         WriteToMainWindow("<br />The " + damage + " damage to you.")
//     }else{
//         damage= Math.round(Math.random() * 10);
//         PlayerDamage("LP", -damage, "sensual");
//         WriteToMainWindow("<br />It just kinda buzzes, and thats kinda hot... dealing " + damage + " lust damage")
//     }
// }


// new Enemy("Clear Slime Blob", 100, 100, 
//     function(){FeralFoxAttackFunc();},
//     function(){
//         textselect = GetWeaponName(0)
//         if(textselect!="NULL"){
//             texts=""
//         }else{
//             texts=" and put your hand on your " + textselect + ", ready to draw it at a moment's notice"
//         }
//         WriteToMainWindow(`Out of the corner of your vision you see movement and you hear a sloshing coming from the bushes. You prepare yourself for a fight` + texts 
//         + `. You swivel as you hear the watery disturbance grow louder before you spot its culprit, a small half sphere made of a clear and almost bubbly looking goo slithering on by.
//         For a second, you let your guard down, it doesn't even look like a animal, let alone a threat. That is until it stops its locomoting as it passes by you.
//         Despite not having any eyes, you can feel it peering at you, sizing you up silently and sightlessly. During this time you cautiously investigate the blob yourself.
//          It doesn't look much larger then a medium sized dog, although it appears much heavier then one based on the way the light seems to shine through it, making it seem very dense for such a size. Probably heavy enough to pin you if it wanted too.
//           With such a thought it occurs to you that it may be in your best interests to avoid such a scenario, as you begin to backpedal the creature seems to have finally made up its mind about you, quickly you see the slime contract into itself, 
//           before the middle quickly extends and the newly formed thin appendage lashes out at you like a whip attempting to grab you, only missing you due to a instinctual dodge. You draw your weapons and prepare for combat...`);})