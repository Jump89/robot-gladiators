// this creates a function named "fight"
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multipe values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

// Alert players that they are starting the round.
window.alert("Welcome to Robot Gladiators!");
// Subtract the Value of playerAttack from the value of enemyHealth and use the result tp u[date the value in tge enemyHealth variable
enemyHealth = enemyHealth - playerAttack;
// log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth  + " health remaining. "
);

//Subtract the value of enemyAttack from the value of playerHealth and use the result to update the value in the playerHealth variable.
playerHealth = playerHealth - enemyAttack;

// log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
);
};

fight();



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

