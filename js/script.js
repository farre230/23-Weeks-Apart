$(document).scroll(function(){

	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y>650) {
    	$(".navbar").css("position", "fixed");
    	$(".navbar").css("top", "0px");
	}

	else {
		$(".navbar").css("position", "absolute");
		$(".navbar").css("top", "850px");
	}
});

// var winHeight = $(window).innerHeight(); // setting winHeight to be the variable for browser height
	
// $(document).ready(function() {


//     $(".panel").height(winHeight);
//     $("body").height(winHeight*$(".panel").length*0.5); // sets height of body based on number of divs on the page

// });

	// window.addEventListener('resize', function (event) {
 //    	$(".panel").height($(window).innerHeight()); // resizes each panel for responsiveness
	// });

	$(window).on('scroll',function(){
    	$(".panel_left").css('bottom',$(window).scrollTop()*-1); // enables reverse scrolling of left side of the screen
	});


	//DELETE CODE BELOW IF YOU WANT TO GET RID OF SNAP
// $(function(){
//     var individualDivHeight = $(".panel").height(); // measures the height of each panel

//     $(window).scroll(function(){
//         var _cur_top = $(window).scrollTop(); // measures how much scrolling was done
//         var totalHeight = $('.panel_left').height(); // measures the height of entire page
//         var posToScroll = Math.round(_cur_top / individualDivHeight) * individualDivHeight; // calculates how much scrolling needs to be done to snap to next or previous panel

//         $('html, body').stop().animate({scrollTop: posToScroll}, 100); // automatically scrolls to next or previous panel based on the results of the previous line of code
//     });
// });