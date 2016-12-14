
$('document').ready(function() {
	

	var topics = ["christmas tree", "christmas gifts", "Griswalds", "wrapping paper", "christmas ornaments", "the elf", "eggnog"];

	function renderButton() {
		// empty christmasButton container
		$("#christmasButtons").empty();
		// for loop to load array topics into christmasButtons div
		for (i=0; i <topics.length; i++) {
			var topicWord = topics[i]; 
			var newBtn = $("<button>").text(topicWord);
			newBtn.addClass("arrayButton");
			newBtn.attr("data-word", topics[i]);
			newBtn.appendTo($("#christmasButtons"));
			console.log("this=", topicWord);
		};
	};
	renderButton();


	// on click to add new christmas words 
	$("#giphySubmit").on("click", function() {
		 	
			// create button for the favorite christmas input
			var christmasWord = ($("#giphyWord").val().trim());
			topics.push(christmasWord);
			renderButton();

			console.log("line 30=",christmasWord);
	});
		 	

	// on click 
	$(document).on("click", ".arrayButton", function() {
		
		var christmasWord = $(this).data("word");
		console.log("this=", christmasWord);
		 	// create var for giphy api
		    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + christmasWord + "&api_key=dc6zaTOxFJmzC&limit=10";
		 	
		    //ajax object
		    $.ajax({
		       url: giphyURL,
		       method: "GET"
		    }).done(function(query) {
		    	console.log(query.data);
			    var results = query.data;
			        
			    for (var i = 0; i < results.length; i++) {

		            var giphDiv = $("<div class='item'>");

		            var rating = results[i].rating;

		            var p = $("<p>").text("Rating: " + rating);
		            console.log(p);

		            var animated = results[i].images.fixed_height.url;
		            var still = results[i].images.fixed_height_still.url;

		            var christmasImage = $("<img>");
		            christmasImage.attr("data-still", still);
		            christmasImage.attr("data-animate", animated);
		            christmasImage.attr("src", still);
		            christmasImage.attr("data-state", "still");
		            christmasImage.addClass("christmasImage");

		            giphDiv.prepend(p);
		            giphDiv.prepend(christmasImage);

		            $("#giphyResults").prepend(giphDiv);

	            	
        		};

		
	
			});

		   
	});

	$(document).on("click", ".christmasImage", function() {
		var state = $(this).attr("data-state");
		console.log(this)
		if ( state == "still") {
			$(this).attr("src", $(this).data("animate"));
			$(this).attr("data-state", "animate");
		}else {
			$(this).attr("src", $(this).data("still"));
			$(this).attr("data-state", "still");
		}
	});

	return false;

});