$(document).ready(function() {
	// Activates functions
	sideNav (); // Activates Side Navigation Menu
	setBindings (); // Activates Scroll Page
});

/* FUNCTIONS */
function sideNav() {
	$("#sidenav_btn").click(function() {
		$("#sidenav").toggleClass("visible");
	});

	if ($("#sidenav").hasClass('visible')) {
		$('window').click(function() {
			$('#sidenav').removeClass("visible");
		});
	}
} // End of SideNav

function setBindings() {
	$("#sidenav a").click(function(e) {
		e.preventDefault ();
		var sectionID = e.currentTarget.id + "Sec";

		$("html body").animate ({
			scrollTop: $("#" + sectionID).offset().top},
			1000);
	});

	$(".go-down i").click(function(e) {
		e.preventDefault ();
		var portfolioID = "folioSec";

		$("html body").animate ({
			scrollTop: $("#" + portfolioID).offset().top},
			1000);
	});
} // End of setBindings
