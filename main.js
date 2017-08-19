var cards = [{
	// newCardName
}];

var createCard = document.getElementById('createCard');
var newCardName = document.getElementById('newCardName');
var addTheDamnCard = document.getElementById('addTheDamnCard');
var cardIDnumber = 0;
var deleteButton = document.getElementById('deleteButton');
createCard.addEventListener("click", function() {
	
	domString();	
	
})

function domString() {
	for (var i = 0; i < cards.length; i++) {
	var cardString = '';
	
	var newCard ="";
	newCard += `<div id="card_${cardIDnumber}"class="cardAdd">`;
	newCard += `<h1>` + newCardName.value + `</h1>`;
	newCard += `<input id="deleteButton" type="submit" value="Delete">`;
	newCard += `</div>`;
	cardString += newCard;
	cardIDnumber++;
	}

	
	writeToDom(cardString);
}

function writeToDom(strang) {
	addTheDamnCard.innerHTML += strang;
}

function addListenersToDeleteButton() {
	var delButtonId = `card_${cardIDnumber}`; 
	document.getElementById(delButtonId).addEventListener('click', function(e){ deleteCard(e)});

}

//work from the button to its parent (div container you want to delete.  then the main div and delete the specific chile )
function deleteCard(e) {
	var divNode = e.currentTarget.parentNode;
	var mainDivParent = document.getElementById("card_${cardIDnumber}");
	mainDivParent = removeChild(divNode);

	// var elem = document.getElementById($cardIDnumber);
	// elem.parentNode.removeChild(elem);
}

