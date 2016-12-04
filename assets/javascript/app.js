
$('document').ready(function() {
	console.log("beforeOnClick");

	var topics = ["christmas tree", "christmas gifts", "Griswalds", "wrapping paper", "christmas ornaments", "the elf", "eggnog"];

	// for loop to load array topics into christmasButtons div
	for (i=0; i <topics.length; i++) {
		var topicWord = topics[i]; 
		var newBtn = $("<button>").text(topicWord);
		newBtn.addClass("arrayButton");
		newBtn.appendTo($("#christmasButtons"));
		console.log(topicWord);
	};

	// on click to ajax pre-existing array words
	$(document).on("click", "arrayButton", function() {
		var christmasWord = ($(this).val());
		console.log(christmasWord);
	});



	// on click to add new christmas words 
	$("#giphySubmit").on("click", function() {
	 		
			// create button for the favorite christmas input
			var christmasWord = ($("#giphyWord").val().trim());
			console.log(christmasWord);
			console.log("working");

	 		// create var for giphy api
	       var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + christmasWord + "&api_key=dc6zaTOxFJmzC&limit=10";
	 	
	       //ajax object
	       $.ajax({
	         url: giphyURL,
	         method: "GET"
	       }).done(function(query) {
	       		var results = query.data;
	       		console.log(results);
	       		// for loop to display all images in christmasButtons div

	       });

	   
	});
});