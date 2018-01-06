$(window).on("resize", function(){
	if($(window).width()<749){
		$(".glyphicon-user").css("font-size", "30px");
	}
	else{
		$(".glyphicon-user").css("font-size", "40px");
	}
});
$(".navbar-toggle").on("click", function(){
	$(".nav-pills").addClass("nav-stacked");
});
$(window).on("resize", function(){
	if($(window).width()>749){
		$(".nav-pills").removeClass("nav-stacked");
	}
	else{
		$(".nav-pills").addClass("nav-stacked");
	}
});
$(".nav-pills").on("click", function(){
	$(".navbar-collapse").collapse("hide");
});