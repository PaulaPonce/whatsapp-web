$(document).ready(function(){
	
	$("#micro").click(function(event) {
		event.preventDefault();
		var mensaje = $("#send-message").val(); //input
		$("#message").append("<div class='row'><div class='col l12 m12'><span class='sent-message right'>" + mensaje + "</span></div></div>");
		$("#send-message").val("");
	});

	$("#send-message").keydown(function(event) {
		$("#message").append("<div class='row'><div class='col l12 m12'><span class='sent-message right'>" + mensaje + "</span></div></div>");
		$("#send-message").val("");
	});
})