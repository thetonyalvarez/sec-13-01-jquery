$(function() {
	console.log("DOM is ready!")
});

// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

$("#rating-form").on("click", "button", function(e) {
	e.preventDefault();
	
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

	$("#rating-form")[0].reset()

})

