/* Creating a new position */
function createPos() {
  var positionNameInput = document.getElementById("positionName").value;
  var educationInput = document.getElementById("education").value;
  var licenseInput = document.getElementById("license").value;
  var minGPAInput = document.getElementById("minGPA").value;
  
  var existingPositions = JSON.parse(localStorage.getItem("positions"));
  if(existingPositions == null) existingPositions = [];
  var newPosition = {
    "positionName": positionNameInput,
    "education": educationInput,
    "license": licenseInput,
    "minGPA": minGPAInput
  };
  existingPositions.push(newPosition);
  localStorage.setItem("positions", JSON.stringify(existingPositions));
  location.href = "home.html";
}

/*Coloring in like button upon like */
function liked() {
	var x = document.getElementById("thumb");
   console.log(x.src);
  var name = document.getElementById("profilename").innerHTML;
  var likedArray = JSON.parse(localStorage.getItem("likes"));
  if( likedArray == null ) likedArray = [];
	if ( x.src != "https://mguanzon.github.io/RMR-project/blankthumb.jpg") {
		document.getElementById("thumb").src = "blankthumb.jpg";
    localStorage.removeItem("profileName");
    confirm("Candidate has been removed from your favorites.")
    localStorage.setItem(name+"liked", "no" );
    for( var i = 0; i < likedArray.length; i++) {
      if( likedArray[i].candidate == localStorage.getItem("name") ) {
        likedArray.splice(i, 1);
      }
    }
    localStorage.setItem("likes", JSON.stringify(likedArray));
  }
  // What to do when person has been liked
	else  {
   document.getElementById("thumb").src = "filledthumb.jpg";
    localStorage.setItem("profileName",name);  
    confirm("Candidate has been added to your favorites.")
    localStorage.setItem(name+"liked", "yes");
    var newLike = {
      "positionName": localStorage.getItem("currentPos"),
      "candidate": localStorage.getItem("name")
    };
    likedArray.push(newLike);
    localStorage.setItem("likes", JSON.stringify(likedArray));
	}
}

/* Save button on the Edit Company Profile page */
function save() {
  var compNameInput = document.getElementById("companyName").value;
  var descriptionInput = document.getElementById("description").value;
  localStorage.setItem("companyName", compNameInput);
  localStorage.setItem("description", descriptionInput);
  location.href = "home.html"; 
}

function deletePos() {  
  var currentPos = localStorage.getItem("currentPos");
  localStorage.setItem(currentPos, "delete");
  location.href="home.html";
}

function sendEmail() {
  confirm("Email has been sent.");
  javascript:history.back();
}

function addPosBtn() {
  tracker = ga.getAll()[0];
  tracker.send("event", "button", "click");
  location.href="edit.html";
}





