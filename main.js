var cards = [];

var createCard = document.getElementById('createCard');
var newCardName = document.getElementById('newCardName');
var addTheDamnCard = document.getElementById('addTheDamnCard');
// var deleteButton = document.getElementById('deleteButton');


createCard.addEventListener("click", function() {
	writeToArray();
	domString();	
	addListenersToDeleteButton();
	
})

function writeToArray() {
	cards.push({name: newCardName.value})
}


function domString() {
	for (var i = 0; i < cards.length; i++) {
	var cardString = '';
	
	var newCard ="";
	newCard += `<div class="cardClass" id="card_${i}"class="cardAdd">`;
	newCard += `<h1>` + cards[i].name + `</h1>`;
	newCard += `<input id="deleteButton_${i}" type="button" value="Delete" class="del">`;
	newCard += `</div>`;
	cardString += newCard;
	}

	
	writeToDom(cardString);
	
}

function writeToDom(strang) {
	addTheDamnCard.innerHTML += strang;
}

function addListenersToDeleteButton() {
	for(var j=0; j<cards.length; j++){
		var delButtonId = `deleteButton_${j}`;
		console.log("delButtonId", j);
		document.getElementById(delButtonId).addEventListener('click', deleteCard);
	}

}

//work from the button to its parent (div container you want to delete.  then the main div and delete the specific chile )
function deleteCard(e) {
	var divNode = e.currentTarget.parentNode;
	console.log("inDeleteCard", divNode);
	var mainDivParent = document.getElementById("addTheDamnCard");
	console.log("parent", mainDivParent);
	mainDivParent.removeChild(divNode);
console.log("inDelete Card", 	divNode);
	// var elem = document.getElementById($cardIDnumber);
	// elem.parentNode.removeChild(elem);
}

