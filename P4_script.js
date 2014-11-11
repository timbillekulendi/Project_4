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
var hasVisitedLoc7 = false;
var hasVisitedLoc8 = false;
var hasVisitedLoc9 = false;
var hasVisitedLoc10 = false; 
var hasVisitedLoc11 = false;            
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
					else {
						if (currentLoc === 9) {
							currentLoc = 1;
							look();
						} 
							else { //Displays the error message when the player goes the wrong way.
								navigationError(); 
							}
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
						else {
							if (currentLoc === 1) {
								currentLoc = 9;
								look();
							} 
								else { //Displays the error message when the player goes the wrong way.
									navigationError(); 
							}
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
					else {
						if (currentLoc === 4) {
							currentLoc = 7;
							look();
						}
							else {
								if (currentLoc === 1) {
									currentLoc = 8;
									look();
								}	
									else { //Displays the error message when the player goes the wrong way.
										navigationError(); 
									}
							}
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
						else {
							if (currentLoc === 7) {
								currentLoc = 4;
								look();
							}
								else {
									if (currentLoc === 8) {
										currentLoc = 1;
										look();
									}	
										else { //Displays the error message when the player goes the wrong way.
											navigationError(); 
										}
								}
						}
				}
		}
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
    	        document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    	        document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
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
    			document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
				break;
	        case 5:  sector5();    
    	        document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
				break;
        	case 6: sector6();
               	document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
				break;	
	        case 7: sector7();
	        	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
	        	break;
	        case 8: sector8();
	        	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
	        	break;
	        case 9: sector9();
	        	document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
	        	break;
	        case 10: sector10();
	        	break;
	        case 11: sector11();
	        	break;
	            default: desc = "You can't go there!! *Evil Laugh*";
    	    }
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
							else if ( (! hasVisitedLoc5) && (currentLoc === 5) ) {            
								score = score + 5;
								hasVisitedLoc5 = true;
							}
								else if ( (! hasVisitedLoc6) && (currentLoc === 6) ) {            
									score = score + 5;
									hasVisitedLoc6 = true;
								} 
									else if ( (! hasVisitedLoc7) && (currentLoc === 7) ) {            
										score = score + 5;
										hasVisitedLoc6 = true;
									} 
										else if ( (! hasVisitedLoc8) && (currentLoc === 8) ) {            
											score = score + 5;
											hasVisitedLoc6 = true;
										} 
											else if ( (! hasVisitedLoc9) && (currentLoc === 9) ) {            
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
//Inventory functions
//


//
// Utility Function(s)
//
		
function displayMessage(msg) {
	var target = document.getElementById("taMain");
	target.value = msg + "\n\n" + target.value;
}

function btnHelp_Click() {
	var helpMsg = "You are currently about to play or playing The Maze Sprinter." + "\n\n" + "In this game you can use the directional buttons to navigate about the maze and find a way out. You can also type in the commands N, S, E, W, n, s, e, w, north, south, east, west into the command bar to navigate around the maze." + "\n\n" + "For every location you visit the first time, you are rewarded 5 points." + "\n\n" + "You can also pick up items in the different locations that would aid you in navigating the maze." + "\n\n" + "If you are still in need of for help, I'm just a hyperlink away! :)"
	var targetTextArea = document.getElementById("taMain");
	targetTextArea.value = helpMsg;
}
