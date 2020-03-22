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
function(){;WriteToMainWindow("A gnat appears and annoys you");}, 
function(input){
    TrueReset()
    if(input==1){WriteToMainWindow("The gnat explodes");}
    else if(input==2){WriteToMainWindow("The gnat nuts so hard it explodes into semen");}
    else if(input==-1){WriteToMainWindow("The gnat fucking kicks your ass before leaving you be")}
    else if(input==-2){WriteToMainWindow("The gnat makes you cum fuckin buckets somehow?")}
    EditButton("button1", "CurrentRoomEvent", "Continue on...", "")}, GnatAreas, [1,1,1])