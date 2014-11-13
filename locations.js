//
//Event handlers for each location
//
//Functions here will handle the various locations of the game.
//displayMessage(Message) enables message variables to be declared in the text area. 
         	
function theGlades() { 
	var desc = "(The Glades) You're in the glade, a small square shaped living space in the middle of the maze. Is there any hope of ever escaping?";
	checkScore(); //To check score when this location 
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area."; //Allocates the item to the location.
	displayMessage(desc);
}
		
function sector1() {
	var desc = "(Sector 1) You've been going through the maze for hours and end up in Thornhill, an enormous unkept plantation full of venomous plants.";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);		
	}
		
function sector2() {
	var desc = "(sector 2) The night sky begins to dawn, you begin to hear the long doleful cry of the Grievers fill the air. You don't want to end up one on one with a Griever. You still have time to save yourself!";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "machete";
	displayMessage(desc);
	}
			
function sector3() {
	var desc = "(Sector 3) You are moving quickly towards what appears to be a opening to a whole new sector which could lead to the exit point of the maze. There is a sudden force restraining you from moving any further, You realise you are stuck in quick sand and need to work something out fast before you are completely submerged. Luckily you grab hold of some vines and pull yourself to safety. Luck seems to be on your side.";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);		
	}
		
function sector4() {
	var desc = "(Sector 4) Certain you had found a way out, you go down an unusual path till you meet a dead-end. I advice you hed back before something *evil* has you trapped in!";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}
		
function sector5() {
	var desc = "(Sector 5) You make your your to a room within the walls of the maze. it just might seem you could escape. But guess what? You would never know until the next project! *Evil Laugh*"; 
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}
		
function sector6() {
	var desc = "(Sector 6) You seem to have found something; the base area for the grievers. The hopes of finding a way out are much brighter now.";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "food";
	displayMessage(desc);
}

function sector7() {
	var desc = "(Sector 7) Desperate to get out of this maze of misery, you run deeper into the maze in search for an exit. May this have been a wrong call?";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}

function sector8() {
	var desc = "(Sector 8) You encounter the body of a dead griever and have taken its transmission unit. This could be the key out.";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}

function sector9() {
	var desc = "(Sector 9) I really don't think you're getting out of the this maze. The folks in the movie were way to lucky! *BOOM, in your face*";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}
/*
function sector10() {
	var desc = "";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}

function sector11() {
	var desc = "";
	checkScore();
	desc = desc + "\n" + "Score:" + " " + score ;
	this.contents = "There's nothing in the area.";
	displayMessage(desc);
}	
*/
                  