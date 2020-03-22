new BodyPart("DefaultHair", function(){return "You have exceptionally average looking "  + this.descriptors() + " hair. "}, function(){return Player.body.Hair.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultSkin", function(){return "Average looking " + this.descriptors() + " skin. "}, function(){return Player.body.Skin.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultFace", function(){return "Average looking face. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultEyes", function(){return "Average looking " + this.descriptors() + " eyes. "}, function(){return Player.body.Eyes.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultHead", function(){return "Average looking head. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultTorso", function(){return "Average looking torso. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultArms", function(){return "Average looking arms. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultHands", function(){return "Average looking hands. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultWaist", function(){return "Average looking waist. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultHips", function(){return "Average looking hips. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultTail", function(){return ""}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultButt", function(){return "Average looking butt. "}, function(){return ""},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultLegs", function(){return "Average looking legs. "}, function(){return ""},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultFeet", function(){return "Average looking feet. "}, function(){return ""},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultBreasts", function(){return "Average looking breasts. "}, function(){return "perky"},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultVagina", function(){return "Average looking vagina. "}, function(){return "tight"},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("DefaultPhallus", function(){return "Average looking dick. "}, function(){return "impressive"},[0,0,0,0,0,0,0,0,0,0])

new BodyPart("Bald", function(){return "Your scalp is devoid of hair in any large amount, showing the top of your dome. " }, function(){return "bald"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("ShortHair", function(){return "You have a head of short hair that barely goes past your ears " }, function(){return "short"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("AverageHair", function(){return "You have a longer mane of " + this.descriptors() +" hair going down past your ears. " }, function(){return Player.body.Hair.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("LongHair", function(){return "You have a very full head of hair, going all the way down to your shoulders. "}, function(){return "long"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("StandardSkin", function(){return "Your body is covered with " + this.descriptors() + " skin. "}, function(){return Player.body.Skin.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanEyes", function(){return "A pair of " + this.descriptors() + " eyes watches the world around you. They have a distinct human charm about them. "}, function(){return Player.body.Eyes.color}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanHead", function(){return ""}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanFace", function(){return "Your face is clearly human with kissable " + Player.body.Face.lipscolor + " lips and the characteristic charm of the young race. "}, function(){return "human"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("StandardTorso", function(){return "Your torso is humanoid in form. "}, function(){return "human"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanArms", function(){return "Two everyday human arms are attached to your torso. "}, function(){return "human"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanHands", function(){return "Dexterous humanoid hands extend from your arms and 5 nimble digits from those. Your fingernails are " + Player.body.Hands.nailstyle + " and have a " + Player.body.Hands.nailcolor + " colour to them. "}, function(){return "human"}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanEars", function(){return "A pair of ears attached to the side of your head allow you to hear the world around you."}, function(){return "human"}, [0,0,0,0,0,0,0,0,0,0])
//Standard Waist Hip and Butt are probably gonna be our first real complex descriptions, so their functions are gonna get some love and have more then one line
new BodyPart("StandardWaist", function(){return "Below your torso extends your humaniod waist. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("StandardHips", function(){return STDhipdescription(Player.body.Hips.fat)}, function(){return STDhipdescriptors(Player.body.Hips.fat)}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("StandardButt", function(){return "You have a nice " + assnames() + " that looks even nicer when not covered up by your clothing. "}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("NoTail", function(){return ""}, function(){return ""}, [0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanLegs", function(){return "Two plantigrade legs extend below you, ending in "}, function(){return ""},[0,0,0,0,0,0,0,0,0,0])
new BodyPart("HumanFeet", function(){return "a pair of a human feet with " + Player.body.Feet.nailstyle + " toenails and are a " + Player.body.Feet.nailcolor + " color."}, function(){return ""},[0,0,0,0,0,0,0,0,0,0])


//TODO

// function STDwaistdescription(Muscle, Fat){
//     musc= Math.floor(Muscle)
//     fat= Math.floor(Fat)
//     waistdescription=new Array(7)
//     for (var i = 0; i < 10; i++) { 
//         waistdescription[i] = new Array(); 
//     }
//     //waistdescription[0,0]="Your waistline is untoned, but with any lacking of fat it is almost inhumanly thin. almost physics defying how thin it is, your stomach is in the same boat with how little there is. ";
//     //waistdescription[0,1]="Your waistline is lacking any real muscle tone, but its still "
//     //waistdescription[1,1]="Your waist is rather that of a super model, untoned but also thin.";
//     //waistdescription[2,2]="Your midriff is as average as average could be. It remains fairly flat when standing straight, but when you slouch it pops out a little.";
//     waistdescription[4,2]=""
//     waistdescription[3,3]="";
//     waistdescription[4,4]="";
//     waistdescription[5,5]="";
//     waistdescription[6,6]="";
//     return waistdescription[musc, fat]


// }


function STDhipdescriptors(Fat){
    fat= Math.floor(Fat)
    hipsdescriptors=new Array(7)
    hipsdescriptors[0]=["narrow", ""]
    hipsdescriptors[1]=["boyish", ""]
    hipsdescriptors[2]=["average", ""]
    hipsdescriptors[3]=["girly", ""]
    hipsdescriptors[4]=["plump", ""]
    hipsdescriptors[5]=["voluptuous", ""]
    hipsdescriptors[6]=["broodmother-like", ""]
    return hipsdescriptors[fat][getRandInt(0,hipsdescriptors[fat].length)]
}

function STDhipdescription(Fat){
    fat= Math.floor(Fat)
    hipdescription=new Array(7)
    hipdescription[0]=""
    hipdescription[1]=""
    hipdescription[2]=""
    hipdescription[3]=""
    hipdescription[4]=""
    hipdescription[5]=""
    hipdescription[6]=""
    //return hipdescription[fat]
        return ("Below your midriff rest a pair of "+ STDhipdescriptors(fat) + " hips. ")


}





// function STDwaistdescriptionmuscle(Muscle){
//     switch(Math.floor(Muscle)){
//     case 0:
//         return "Your tummy is completely untoned and smooth, its clear you don't exercise your core muscles very much, on the plus side its very soft. "
//     case 1:
//         return "Your midriff is lacking any real tone, even when you try to flex your core it barely changes, making its flesh supple and silky. "
//     case 2:
//         return "Your abdomen is just toned enough to show through when it flexes, even then, its rather smooth and pliable to the touch. "
//     case 3:
//         return "Your midriff is about average in tone, not enough to see at a glance, but a closer inspection reveals you work your core enough to be respectable. "
//     case 4:
//         return ""
//     }
// }

// function STDwaistdescriptionfat(Fat){
//     switch(Math.floor(Fat)){
//     case 0:
//         return "In addition you have nothing short of a pencil midriff, almost physics defying how thin it is, your stomach is in the same boat with how little there is. "
//     case 1:
//         return "In addition you have a rather thin stomach, either you work out quite a bit, or haven't eaten in a while. "
//     case 2:
//         return "Your tummy is rather small, being close to flush with the rest of your body even when you try to push it out, the efforts of working out and a good diet are very evident. "
//     case 3:
//         return "Your stomach is fairly average, its clear you lead a healthy life and have a balanced diet and workout regularly. "
//     case 4:
//         return "Your stomach is a little pudgy, nothing out of the ordinary"
//     }
// }

// //TODO
// function STDtorsodescriptionmuscle(Muscle){
//     switch(Muscle){
//         case 0:
//             return "with no muscle to speak of your pectorals lack any definition. "
//     }

// }