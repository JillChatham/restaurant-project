
$(".showMapClick").on("click", function () {
	console.log("hello");
});

// Drop down mission image when "mission" is clicked
$(".show-mission").hide();

$("#mission").on('click', function () {
	$(".hideForMission").hide();
	$(".show-mission").slideDown();
});





// Show and hides location maps for clicks on "Click to show map"
$(".map").hide();


$('.showMapClick').on('click', function (e) {
	var whichMap = $(this).attr("id");
	console.log(whichMap);
	
	if ($(this).hasClass("showing")) {
		hideMap(whichMap);
		$(this).removeClass("showing");
	} else {
		$(".map").slideUp();
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



