var playerName= window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 50;

//You can also long multiple values at once like this console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;



var fight = function() {
    window.alert("Welcome to Robot Gladiators");   

enemyHealth = enemyHealth - playerAttack;

console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "
);

playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " +  playerHealth  + " health remaining. "
);

console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has" + enemyHealth + " health remaining. "
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ")
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ")
}
};

fight();
