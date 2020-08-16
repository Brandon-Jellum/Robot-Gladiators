<<<<<<< HEAD
window.alert("This is an alert! JavaScript is running!");
=======
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function () {
    //Alerts users they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //alert users to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log(promptFight);

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.

console.log(
    playerName + " Attacked " + enemyName + ". " + enemyName + " Now has " + enemyHealth + " Health remaining."
    );

    //if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

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

  //if player chooses to skip
 } else if (promptFight === "skip" || promptFight === "SKIP") {
     //conform user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
   else {
          window.alert("You need to pick a valid option. Try again!");
      }
  
};



fight();
>>>>>>> e618f6ef6f6438ced1883e63487e849dde6195d1
