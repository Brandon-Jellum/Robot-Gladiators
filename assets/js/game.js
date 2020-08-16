var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    //Alerts users they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.

console.log(
    playerName + " Attacked " + enemyName + ". " + enemyName + " Now has " + enemyHealth + " Health remaining."
    );

    //check enemy health

    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.

  console.log(
      enemyName + " Attacked " + playerName + ". " + playerName + " Now has " + playerHealth + " Health remaining."
  );

  //check player health
  if (playerHealth <=0) {
      window.alert(playerName + " had died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  
};



fight();