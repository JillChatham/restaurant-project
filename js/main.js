
$(".showMapClick").on("click", function () {
	console.log("hello");
});

// Drop down mission image when "mission" is clicked







// Show and hides location maps for clicks on "Click to show map"
$(".map").hide();


$('.showMapClick').on('click', function (e) {
	var whichMap = $(this).attr("id");
	console.log(whichMap);
	
	if ($(this).hasClass("showing")) {
		hideMap(whichMap);
		$(this).removeClass("showing");
	} else {
		$(".map").hide();
		$(".showMapClick").removeClass("showing");
		showMap(whichMap);
		$(this).addClass("showing");
	}

});

var showMap = function (which) {
	$("." + which).slideDown();
}

var hideMap = function (which) {
	$("." + which).slideUp();
}



