//Page one submit function. Not secure at all, but still acts in the place of a password for the time being.
function nextPage(){

var username = document.getElementById("userName").value;
var pass = document.getElementById('pass').value;

if(username == "Ryan" && pass == "Woo"){
window.open("page2.html");

}
else{
window.alert("wrong!!");
}
};


//Adding a new goal to the left column list of goals.
function addGoal(){
	var goal = document.getElementById("add_goal").value;
	
	if(goal.length<2){
		window.alert("You need to type something before you can add it!");
	} else if(goal.length>200){
		window.alert("Woah.. 150 characters or less");
	}
	else{
	
	var abc = document.createElement("div");
	var del = document.createElement("div");
	abc.className = "goal_box";
	del.className= "del_box";
	var goal2 = document.createTextNode(goal);
	var del2 = document.createTextNode('Delete');
	abc.appendChild(goal2);
	del.appendChild(del2);
	abc.appendChild(del);

	document.getElementById("goals").appendChild(abc);
	document.getElementById("add_goal").value = "";
	console.log("Added a new Goal");
	}
}

var add_butt = document.getElementById("add_butt");
add_butt.addEventListener('click', addGoal, false);

	

function addConvo(){
	
	var noteVal = document.getElementById("add_note").value;
	
	if(noteVal.length<2){
		window.alert("You need to type something before you can add it!");
	} else if(noteVal.length>500){
		window.alert("Woah.. 500 characters or less");
	}
	else{
	
	//var outBox = document.createElement("div");
	var newNote = document.createElement("div");
	var del = document.createElement("div");
	//Outboxes are commented out for the time being. The plan is to create a Div box of equal side on the opposite side of the added box. This will later
	//allow the implementation of a reply box that will generate text right next to the orginal comment. Also, there will be a comment option to add a
	//quick comment directly to the original note.
	
	newNote.className = "note_box";
	del.className= "del_box";
	//outBox.className = "out_box";
	
	var noteContent = document.createTextNode(noteVal);
	var del2 = document.createTextNode('Delete');
	
	//outBox.appendChild(newNote)
	newNote.appendChild(noteContent);
	del.appendChild(del2);
	newNote.appendChild(del);
	
	var placer = document.getElementById('text_flow');
	placer.insertBefore(newNote, placer.firstChild);
	document.getElementById("add_note").value = "";
	
	}
}

var add_button = document.getElementById('add_conv');
add_button.addEventListener('click', addConvo, false);

//Deleting a goal from the left column ///////////////////////////////////////////////////////////////////////////////////

function goalDelete(e){
	
	var target = e.target;
	
	var del_check = target.getAttribute('class');
	if(del_check == 'del_box'){
	var tParent = target.parentNode;
	var tGrandparent = target.parentNode.parentNode;
	
	tGrandparent.removeChild(tParent);
	};
	
}
	
	var del_butt = document.getElementById('goals');
	var del_butt2 = document.getElementById('text_flow');
	del_butt.addEventListener('click', goalDelete, false);
	del_butt2.addEventListener('click', goalDelete, false);


