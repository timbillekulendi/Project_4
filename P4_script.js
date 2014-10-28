//
// Global Variables
//         
var currentLoc = 0; //Determines the current location of the player. 
var score = 0; //For score of player.
var navigationErrorCount = 0; //Used to count the number of times the player goes in the wrong direction.
var sarcasmThreshold = 5; //Determine the threshold for the number of wrong moves a player makes to activate something.
   	      
var hasVisitedLoc0 = false; //Global variable to determine whether player has been in loc0.
var hasVisitedLoc1 = false; //Global variable to determine whether player has been in loc1.
var hasVisitedLoc2 = false; //Global variable to determine whether player has been in loc2.
var hasVisitedLoc3 = false; //Global variable to determine whether player has been in loc3.
var hasVisitedLoc4 = false; //Global variable to determine whether player has been in loc4.
var hasVisitedLoc5 = false; //Global variable to determine whether player has been in loc5.
var hasVisitedLoc6 = false; //Global variable to determine whether player has been in loc6.
                  
//
// Initialization
//
function init() {
	look();
}
         
//
// Directional Button Event Handlers
//         
		
function btnNorth_click() { //This allows the player to go north when possible.
	if (currentLoc === 0) {
		currentLoc = 4;
		look();               
	} 
		else {
			if (currentLoc === 1) {
				currentLoc = 0;
				look();            
			} 
			else {
				if (currentLoc === 6) {
					currentLoc = 2;
					look();      	               
				} 
					else { //Displays the error message when the player goes the wrong way.
						navigationError(); 
					}
    	    }		            
        }
}

function btnSouth_click() { //This allows the player to go south when possible.
	if (currentLoc === 0) { //If the players current location is loc0, moving north would change their location to loc1.
		currentLoc = 1;
		look();
	}
		else {
			if (currentLoc === 2) { //If the players current location is loc2, moving north would change their location to loc6.
				currentLoc = 6;
				look();
			} 
				else {
					if (currentLoc === 4) { //If the players current location is loc4, moving north would change their location to loc0.
						currentLoc = 0;
						look();           
					} 
					else { //Displays the error message when the player goes the wrong way.
						navigationError(); 
					}
            	}
	        }
}

function btnEast_click() { //This allows the player to go east when possible.
	if (currentLoc === 0) { //If the players current location is loc0, moving north would change their location to loc3.
		currentLoc = 3;
		look();
	} 
		else {
			if (currentLoc === 2) { //If the players current location is loc2, moving north would change their location to loc3.
				currentLoc = 3;
				look();
			}
			else {
				if (currentLoc === 5) { //If the players current location is loc5, moving north would change their location to loc4.
					currentLoc = 4;
					look();
				} 
					else { //Displays the error message when the player goes the wrong way.
						navigationError(); 
	              	}
			}
		}
}

function btnWest_click() { //This allows the player to go west when possible.
	if (currentLoc === 0) { //If the players current location is loc0, moving north would change their location to loc2.
		currentLoc = 2;
		look();
	}
		else {
			if (currentLoc === 3) { //If the players current location is loc3, moving north would change their location to loc0.
				currentLoc = 0;
				look();
			}
				else {
					if (currentLoc === 4) { //If the players current location is loc4, moving north would change their location to loc5.
						currentLoc = 5;
						look();
					} 
						else { //Displays the error message when the player goes the wrong way.
							navigationError(); 
						}
				}
		}
}
//
//Event handlers for each location
//
//Functions here will handle the various locations of the game.
//displayMessage(Message) enables message variables to be declared in the text area. 
         	
function theGlades() { 
	var message = "0. You're in the glade, a small square shaped living space in the middle of the maze. Is there any hope of ever escaping?";
	displayMessage(message);
}
		
function sector1() {
	var message = "1. You've been going through the maze for hours and end up in Thornhill, an enormous unkept plantation full of venomous plants.";
	displayMessage(message);		
	}
		
function sector2() {
	var message = "2. The night sky begins to dawn, you begin to hear the long doleful cry of the Grievers fill the air. You don't want to end up one on one with a Griever. You still have time to save yourself!";
	displayMessage(message);
	}
			
function sector3() {
	var message = "3. You are moving quickly towards what appears to be a opening to a whole new sector which could lead to the exit point of the maze. There is a sudden force restraining you from moving any further, You realise you are stuck in quick sand and need to work something out fast before you are completely submerged. Luckily you grab hold of some vines and pull yourself to safety. Luck seems to be on your side.";
	displayMessage(message);		
	}
		
function sector4() {
	var message = "Certain you had found a way out, you go down an unusual path till you meet a dead-end. I advice you hed back before something *evil* has you trapped in!";
	displayMessage(message);
	}
		
function sector5() {
	var message = "You make your your to a room within the walls of the maze. it just might seem you could escape. But guess what? You would never know until the next project! *Evil Laugh*"; 
	displayMessage(message);
}
		
function sector6() {
	var message = "Desperate to get out of this maze of misery, you run deeper into the maze in search for an exit. May this have been a wrong call?";
	displayMessage(message);
}
                  
//
// Story / Locale Functions
//
		
function look() {
	var desc= "";
	document.getElementById("North").disabled = true; //These disable all the buttons.
	document.getElementById("South").disabled = true;
    document.getElementById("East").disabled = true;
    document.getElementById("West").disabled = true;
				
		switch(currentLoc) { //This handles switching the text in the text area based on the position of the player.
			case 0: theGlades();
				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
       			document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
               	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
               	break;
			case 1: sector1();
    	        document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
				break; 
            case 2: sector2();
               	document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
               	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
				break;
	        case 3: sector3();
       			document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
				break;
      		case 4: sector4();
               	document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    			document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
				break;
	            case 5:  sector5();    
    	        document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
				break;
            	case 6: sector6();
               	document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
				break;	
	            default: "You can't go there!! *Evil Laugh*";
    	    }
	checkScore(); //Calls the function responsible for calculating the score and displays it in the text area.
		desc = desc + "\n" + "Score: " + score
		displayMessage(desc);
}
			

function navigationError() { //Handle error message in the case that the user goes the wrong way.
	navigationErrorCount = navigationErrorCount + 1;
	if (navigationErrorCount < sarcasmThreshold) {
		displayMessage("You can't go there!! *Evil Laugh*"); //Default erro message.
	}
		else {
			displayMessage("You really want to die mate! WTF"); //If the user error movements are greater than the error threshold, this message is displayed.
        }            
}
	
function checkScore() { // This function is responsible for calculating the score of the player.
	if (! hasVisitedLoc0) {            
		if (currentLoc === 0) {
			score = score + 5; //Adds a score of 5 points if the room is being visited for the first time.
			hasVisitedLoc0 = true; //Changes the boolean of the location to "True" telling the script that the location has been visited already after adding 5 points.
		}
	} 
			else if ( (! hasVisitedLoc1) && (currentLoc === 1) ) {            
				score = score + 5;
				hasVisitedLoc1 = true;
			} 
				else if ( (! hasVisitedLoc2) && (currentLoc === 2) ) {            
					score = score + 5;
					hasVisitedLoc2 = true;
				}
					else if ( (! hasVisitedLoc3) && (currentLoc === 3) ) {            
						score = score + 5;
						hasVisitedLoc3 = true;
					}
						else if ( (! hasVisitedLoc4) && (currentLoc === 4) ) {            
							score = score + 5;
							hasVisitedLoc4 = true;
						} 
							else if ( (! hasVisitedLoc5) && (currentLoc === 3) ) {            
								score = score + 5;
								hasVisitedLoc5 = true;
							}
								else if ( (! hasVisitedLoc6) && (currentLoc === 4) ) {            
									score = score + 5;
									hasVisitedLoc6 = true;
								} 
}
				
         
function btnGo_click () { //Handles the logic to the text input box that allows users to input movement commands
	var playerInput = document.getElementById("txtCommand").value;
  	  if (playerInput === "n"|| playerInput==="N" || playerInput === "north") {
			btnNorth_click();
    	} 
          else if (playerInput === "s"|| playerInput==="S" || playerInput === "south") {
          	btnSouth_click();
	        } 
    	      else if (playerInput === "e"|| playerInput==="E" || playerInput === "east") {
        	  	btnEast_click();
          	} 
          		else if (playerInput === "w"|| playerInput==="W" || playerInput === "west") {
          		btnWest_click();
          		}
}

//
// Utility Function(s)
//
		
function displayMessage(msg) {
var target = document.getElementById("taMain");
target.value = msg + "\n\n" + target.value;
}