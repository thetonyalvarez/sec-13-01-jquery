$(function() {
	console.log("DOM is ready!")

	// TODO: Ensure that the rating of a movie can only be between 0 and 10.
	$("#title-check").hide();
	let titleError = false;
	
	function validateTitle() {
		let titleValue = $("#title").val();
		if (titleValue.length < 2 || titleValue === '') {
			$("#title-check").show();
			titleError = true;
			return false;
		} else {
			return true;
		}
	}
		
	// TODO: Ensure that a title has at least 2 characters in it.
	$("#rating-check").hide();
	let ratingError = false;

	function validateRating() {
		let ratingValue = $("#rating").val();
		if (ratingValue < 0 || ratingValue > 10 || ratingValue === '') {
			$("#rating-check").show();
			ratingError = true;
			return false;
		} else {
			return true;
		}
	}

	// TODO: Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

	
	// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
	
	$("#rating-form").on("click", "button", function(e) {
		e.preventDefault();

		validateTitle();
		validateRating();

		if ((titleError === false) && (ratingError === false)) {
			
			let title = $("input#title").val()
			let rating = $("input#rating").val()
			let titleWrapper = $("<div class='title-wrapper'>")
				.append("<div class='title'>Title: " + title)
				.append("<div class='rating'>Rating: " + rating)
				.append("<button class='btn btn-danger delete-title'>Delete</button>")
		
			$("#all-titles")
				.append(titleWrapper)
		
			// When the button to remove is clicked, remove each title and rating from the DOM.
		
			$(".delete-title").on("click", function(e) {
				e.target.parentNode.remove();
				console.log("removed!")
			})
		
		} else {
			return;
		}
		
		$("#rating-form")[0].reset()
	
	})
});

