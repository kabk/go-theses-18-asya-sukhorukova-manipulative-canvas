var mydiv1w;
var mydiv1h;



function init() {

	function centerdiv(){
		var halfwidth = $("#mydiv1").width()/2;
		$("#mydiv1").css("left","calc(50% - "+halfwidth+"px)");
	}
	




	$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

	function resizewindow(){
		centerdiv();
		$("#mydiv1").css("width",mydiv1w);
		$("#mydiv1").css("left","calc(50% - " + mydiv1w/2 + "px)");
	}

	function sidesnormal(){
		$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		$("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);
	}

	function animation1(){
		mydiv1w = $("#mydiv1").height()*1.6;
		resizewindow();
		sidesnormal();	
	}

	function animation2(){
		mydiv1w = $("#mydiv1").height()*1.5;
		resizewindow();
		sidesnormal();

	}

	function animation3(){
		$("#left, #right").css("width","100%");
	}

	$(".canvas").css("height",$("#mydiv1").height()*2);

	function copyDiv() {
		var firstDivContent = document.getElementById('mydiv1');
		var secondDivContent = document.getElementById('mydiv2');
		secondDivContent.innerHTML = firstDivContent.innerHTML;
	}

	function scrolltop(){


		var canvas = $("#mydiv1").find("img");
		var canvas2 = $("#mydiv1").find("p");
		var canvas3 = $("#mydiv1").find("#canvas2");
		
		$('#mydiv1').find(".textbody").on('scroll', function () {


			$('#mydiv2').find(".textbody").scrollTop($(this).scrollTop());


			if (canvas.isOnScreen() === true){
				animation1()

			}else if(canvas2.isOnScreen() === true){
				animation2();

			}else if(canvas3.isOnScreen() === true){
				animation3();

			}else{
				sidesnormal();
				
			}

		});

	}


	copyDiv();
	scrolltop();
	setInterval(function(){ 
				// $("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		  //   	$("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);
		}, 1);

}


window.onload = init();


