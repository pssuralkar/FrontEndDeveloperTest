// Complete each of the questions below. You can see the expected result for each of the questions by 

function Question1(inputArray) {
	// DUPLICATE AN ARRAY
	// You should write a function that repeats an array twice and returns it.
	// The original array should not be modified.
	
	
	var a = new Array();

	for(i=0; i<inputArray.length; i++){ 
		a.push(inputArray[i]);
	} 
	
	for(j=0; j<a.length; j++){
		inputArray.push(a[j]);
	}

	return inputArray;
}

function Question2(inputArray) {
	// REVERSE AN ARRAY
	// You should write a function that reverses an array and returns it.
	// The original array should not be modified.
	var a = new Array();
	for(i=inputArray.length-1; i>=0; i--){
		a.push(inputArray[i]);
	}
	return a;
}

function Question3(inputArray, itemToFind) {
	// COUNT THE NUMBER OF ELEMENTS IN AN ARRAY
	// You should write a function that returns a count of the number of 'itemToFind' that exist in 'inputArray'
	//[1,3,6,2,6,3,6,7,3,1], 6
	var count = 0;
	for(i=0; i<inputArray.length; i++){
		if(itemToFind === inputArray[i]){
			count++;
		}
	}
	return count;
}

function Question4(deckOfCardsArray) {
	// SHUFFLE A DECK OF CARDS
	// You should write a function that shuffles the items in 'deckOfCardsArray'
	// The original array should be modified

	function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min));
    }

    for(var i = 0; i < deckOfCardsArray.length-1; i++) {
         var rndNo = getRandom(0, 51);
         var card = deckOfCardsArray[i];
         deckOfCardsArray[i] = deckOfCardsArray[rndNo];
         deckOfCardsArray[rndNo] = card;
    }

	// No return value needed
}

function Question5(inputString) {
	// REVERSE THE WORDS IN A STRING
	// You should write a function that reverses the order of the words in a string. The letters in
	// the words should be unchanged.
	// e.g. "the cat sat on the mat" should become "mat the on sat cat the"
	return inputString.split(/\s/).reverse().join(" ");
	
}