function init() {
	// $(".line").css("height","100%");

	function copyDiv() {
	    var firstDivContent = document.getElementById('mydiv1');
	    var secondDivContent = document.getElementById('mydiv2');
	    secondDivContent.innerHTML = firstDivContent.innerHTML;
	}
	function scrolltop(){
		    $('#mydiv1').find(".textbody").on('scroll', function () {

	    	// console.log($(this).scrollTop());
		    $('#mydiv2').find(".textbody").scrollTop($(this).scrollTop());

		});

	}
	scrolltop();


	//Call copyDiv on body="onload"
	copyDiv();

}


window.onload = init();

