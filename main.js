var cards = [{
	// newCardName
}];

var createCard = document.getElementById('createCard');
var newCardName = document.getElementById('newCardName');
var addTheDamnCard = document.getElementById('addTheDamnCard');
var cardIDnumber = 0;
createCard.addEventListener("click", function() {
	
	domString();	
	
})

function domString() {
	for (var i = 0; i < cards.length; i++) {
	var cardString = '';
	
	var newCard ="";
	newCard += `<div id="card_${cardIDnumber}"class="cardAdd">`;
	newCard += `<h1>` + newCardName.value + `</h1>`;
	newCard += `<input id="deleteButton" type="submit" value="Delete" onclick="deleteCard()">`;
	newCard += `</div>`;
	cardString += newCard;
	cardIDnumber++;
	}

	
	writeToDom(cardString);
}

function writeToDom(strang) {
	addTheDamnCard.innerHTML += strang;



	
}

//work from the button to its parent (div container you want to delete.  then the main div and delete the specific chile )
function deleteCard() {
	var elem = document.getElementById(cardAdd);
	elem.parentNode.removeChild(elem);
}

