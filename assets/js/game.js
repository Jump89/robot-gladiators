// Game States 
//"win" - player robot has defeated all enemy-robots
// * fight all enemy-robots
// * defeat each enemy robot
//"Lose " - player robot's health is zero or less
// ** PLayer has zero heath



// this creates a function named "fight"
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multipe values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {

    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt ("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'Skip' to choose.");

    // if player chose to fight , then fight
    if ( promptFight ==="fight" || promptFight ==="FIGHT") {
        // remove enemy's health by
// Alert players that they are starting the round.

// Subtract the Value of playerAttack from the value of enemyHealth and use the result tp u[date the value in tge enemyHealth variable
enemyHealth = enemyHealth - playerAttack;
// log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth  + " health remaining. "
);
// check enemy's health 
if (enemyHealth <=0) {
    window.alert(enemyNames = " has died!");
}
else {
    window.alert(enemyNames + " still has " + enemyHealth + "health left.");
}

//Subtract the value of enemyAttack from the value of playerHealth and use the result to update the value in the playerHealth variable.
playerHealth = playerHealth - enemyAttack;

// log a resulting message to the console so we know that it worked. 
console.log(
    enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
);
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}
// if player choses to skip 
}
else if (promptFight === "skip" || promptFight === "SKIP"){
// confirm player wants to skip 
var confirmSkip = window.confirm("Are you sure you'd like to quit?")

// if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight.  GoodBye!");
    // Subtract money from playerMoney for skipping 
    playerMoney = playerMoney - 2
}

// if no (false), ask question again by running fight() again
else {
    fight();
}
window.alert(playerName + " has chosen to skip the fight!");
}
// if player does not chose ether 1 or 2 in promt
else {
    window.alert("You need to chose a valid option. Try Again!")
}
//if yes (true), leave fight
};
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

//fight();



// Note the lack of quotation marks around playerName window. alert(playerName)
// what is this ?
//console.log("This logs a string, good for leaving yourself a message");
//this will do math and log 20
//console.log(10+10);

/*function fight() {
    window.alert ("The fight has begun!");
}

var playerName = "Jump the robot";
// Jump the robot is ready to battle!
console.log("Jump the robot" + " is ready for battle!")

// " Jump the Robot is ready for battle!"
console.log(playerName + " is ready for battle!");

//" Your robot , Jump  the robot , has won!"
console.log("Your robot," + playerName +", has won!");*/









//fight();

