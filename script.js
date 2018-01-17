var mydiv1w;
var mydiv1h;








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

function isOnScreenBla(elem) {

	var win = $(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};

	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = elem.offset();
	bounds.right = bounds.left + elem.outerWidth();
	bounds.bottom = bounds.top + elem.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}









function init() {

	if (window.confirm("Please, use Chrome for this page")) { 
		// window.open("index.html");
	}
	animation1();
	sidesnormal();


	//mydiv1 - position & size

	function centerdiv(){
		$("#mydiv1").css("left","calc(50% - " + mydiv1w/2 + "px)");
	}
	function rightdiv(){
		$("#mydiv1").css("left","calc(60% - " + mydiv1w/2 + "px)");
	}
	function leftdiv(){
		$("#mydiv1").css("left","calc(40% - " + mydiv1w/2 + "px)");
	}
	function veryleftdiv(){
		$("#mydiv1").css("left","calc(0%)");
		// $(".rect").hide();
		$("#mydiv1").css("height","80%");
	}
	function resizewindow(){
		$("#mydiv1").css("width",mydiv1w);
		$("#mydiv1").css("height",mydiv1h);
		// centerdiv();
		sidesnormal();
		chaptersnormal();
	}



	function resize_right(){
		rightdiv();
		resizewindow();
	}
	function resize_very_left(){
		veryleftdiv();
		resizewindow();
		rect_to_circle();
		rect_to_middle();
	}
	function resize_center(){
		centerdiv();
		resizewindow();
		rect_to_rect();
		p_width_medium();
	}
	function resize_left(){
		leftdiv();
		resizewindow();
		
	}


	//mydiv2-copy

	$(".canvas").css("height",$("#mydiv1").height()*2);

	function copyDiv() {
		var firstDivContent = document.getElementById('mydiv1');
		var secondDivContent = document.getElementById('mydiv2');
		secondDivContent.innerHTML = firstDivContent.innerHTML;
	}



	//text inside mydiv1

	function center_p(){
		var w = $("#mydiv1").find("p").width();
		$("#mydiv1").find("p").css("left","calc(50% - " + w + ")");
	}
	function left_p(){
		var w = $("#mydiv1").find("p").width();
		$("#mydiv1").find("p").css("left","5%");
	}
	function p_width_medium(){
		$("#mydiv1").find("p").css("width","70%");
		center_p();
	}
	function p_width_wide(){
		$("#mydiv1").find("p").css("width","90%");
		center_p();
	}
	function p_width_narrow(){
		$("#mydiv1").find("p").css("width","50%");
		center_p();
	}



	//rect - position & shape
	var rectw;
	var recth;

	function sizerect(size){
		rectw = size;
		recth = size;
		$(".rect").css("width",rectw);
		$(".rect").css("height",recth);

	}

	function rect_to_circle(){
		// $(".rect").css("transition","0.2s all");
		rect_to_middle();
		$(".rect").css('background-image','none');
		$(".rect").css("border","4px solid black");
		

		$(".rect").css("border-radius","100%");
		// $(".rect").css("transition","1s all");
	}
	function rect_to_rect(){
		// $(".rect").css("transition","0.2s all");
		$(".rect").css('background-image','none');
		$(".rect").css("border","4px solid black");
		$(".rect").css("border-radius","0%");
		// $(".rect").css("transition","1s all");
	}
	
	function rect_to_middle(){
		$(".rect").css('background-image','none');
		sizerect(80);
		$(".rect").css("top","calc(50% - "+recth/2+"px)");
		$(".rect").css("left","calc(50% - "+rectw/2+"px)");

	}

	function rect_to_top(){
		$(".rect").css('background-image','none');
		$(".rect").css("top","15%");
	}

	function rect_to_bottom(){
		$(".rect").css('background-image','none');
		$(".rect").css("bottom","15%");
	}

	function rect_hide(){
		$(".rect").css('background-image','none');
		$(".rect").css("left","-100px");
	}	

	// function rect_direction(){
	// 	$(".rect").css("transition","1s all");
	// 	rect_to_rect();
	// 	rect_to_middle();
	// 	$(".rect").css("border","none");
	// 	$(".rect").css('background-image','url("img/directionpart.png")');

	// }
	function rect_direction(){
		// $(".rect").css("transition","0.8s all");
		rect_to_rect();
		rect_to_middle();
		$(".rect").css('background-image','url("img/directionpart.png")');
		$(".rect").css('background-size','70%');
		$(".rect").css("border","none");
	}
	function rect_direction2(){
		// $(".rect").css("transition","0.8s all");
		rect_to_rect();
		rect_to_middle();
		$(".rect").css('background-image','url("img/directionpart.png")');
		$(".rect").css('background-size','70%');
		$(".rect").css("border","none");
	}
	function rect_wave(){
		// $(".rect").css("transition","0.8s all");
		rect_to_rect();
		rect_to_middle();
		$(".rect").css('background-image','url("img/wavepart.png")');
		$(".rect").css('background-size','80%');
		$(".rect").css("border","none");
	}
	function rect_arrow(){
		// $(".rect").css("transition","1s all");
		rect_to_rect();
		rect_to_middle();
		$(".rect").css('background-image','url("img/arrowpart.png")');
		$(".rect").css('background-size','60%');
		$(".rect").css("border","none");
	}
	function rect_spiral(){
		// $(".rect").css("transition","1s all");
		rect_to_rect();
		rect_to_middle();
		$(".rect").css('background-image','url("img/spiralpart.png")');
		$(".rect").css('background-size','60%');
		$(".rect").css("border","none");
	}
	function rect_to_canvas(){
		$(".rect").css('background-image','none');
		// $(".rect").css("transition","0.2s all");
		$(".rect").css("width",$("#left").width()*0.82);
		$(".rect").css("height",$("#left").height()*0.75);
		// rect_to_middle();
		$(".rect").css("top","calc(50% - "+ $(".rect").height()/2 +"px - 4px)");
		$(".rect").css("left","calc(50% - "+ $(".rect").width()/2 +"px - 4px)");
		// $(".rect").css("transition","0.8s all");
	}

	function rect_to_horizontal_line(){
		// $(".rect").css("transition","0.2s all");
		$(".rect").css('background-image','none');
		$(".rect").css("border-radius","0%");
		$(".rect").css("top","50%");
		$(".rect").css("width","0px");
		$(".rect").css("left","0px");
		$(".rect").css("height","0px");
		$(".rect").css("border","2px solid black");
		$(".rect").css("width","calc(100% - 4px)");
		// $(".rect").css("transition","0.8s all");
	}

	function rect_to_vertical_line(){
		// $(".rect").css("transition","0.2s all");
		$(".rect").css('background-image','none');
		$(".rect").css("border-radius","0%");
		$(".rect").css("left","50%");
		$(".rect").css("width","0px");
		$(".rect").css("top",$("#top").height());
		
		$(".rect").css("border","2px solid black");
		$(".rect").css("height","calc(" + $("#mydiv1").height() + "px - 4px)");
		// $(".rect").css("transition","0.8s all");
	}

	//sides

	function sidesnormal(){
		
		$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		// $("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);

		var left = $("#mydiv1").css("left");
		var right = $("#mydiv1").css("right");
		var top = $("#mydiv1").css("top");
		var bottom = $("#mydiv1").css("bottom");

		$("#left").css("width",left);
		$("#right").css("width",right);
		$("#top").css("height",top);
		$("#bottom").css("height",bottom);
	}

	function footnotesnormal(){
		var chapheight = $("#mydiv1").height();
		var chapwidth = $("#right").width();
		$(".footnotes").css("right","0%");
		$(".footnotes").css("bottom",$("#bottom").height());
		$(".footnotes").css("height",chapheight);
		$(".footnote").css("margin","auto");
		$(".footnotes").css("width",chapwidth);
	}


	function subchaptersnormal(){
		var chapheight = $("#bottom").height();
		var chapwidth = $("#mydiv1").width();
		$(".navsubchap").css("margin","auto");
		$(".subchapterscontainer").css("left",$("#mydiv1").css("left"));
		$(".subchapterscontainer").css("height",chapheight);
		$(".subchapterscontainer").css("width",chapwidth);
		$(".subchapters").css("margin","auto");
		footnotesnormal();	
	}

	function chaptersnormal(){
		var chapheight = $("#top").height();
		var chapwidth = $("#mydiv1").width();

		$(".chapterscontainer").css("left",$("#mydiv1").css("left"));
		$(".chapterscontainer").css("height",chapheight);
		$(".chapterscontainer").css("width",chapwidth);
		$(".chapters").css("margin","auto");
		subchaptersnormal();
	}

	function swapsides(){


		var left = $("#mydiv1").css("left");
		var right = $("#mydiv1").css("right");
		var top = $("#mydiv1").css("top");
		var bottom = $("#mydiv1").css("bottom");

		$("#left").css("width",right);
		$("#right").css("width",left );
		$("#top").css("height",top);
		$("#bottom").css("height",bottom );

		$("#left").css("right","0%");
		$("#right").css("left","0%");
		$("#left").css("border-left","4px solid black");
		$("#right").css("border-right","4px solid black");
	} 





	//ANIMATIONS



	function animation1(){

		// $("#left, #right").css("transition","0s all");
// sidesnormal();
		// $(".sides").css("transition","0.5s all");
		mydiv1w = $(window).width()*0.645;


		resize_center();
		sidesnormal();
		chaptersnormal();
		

		// resizewindow();


	}

	function animation2(){
		$(".rect").css("top",$("#top").height()*2);
		mydiv1w = $(window).width()*0.8;
		// rightdiv();

		resize_very_left();
		rect_hide();
		// rect_to_horizontal_line();
		// rect_to_vertical_line()
		// swapsides();


	}


	function anim_chap_2(){

		// $(".rect").css("top",$("#top").height()*4);
		mydiv1w = $("#mydiv1").height()*1.3;
		// resize_center();
		// rect_to_horizontal_line();
		sidesnormal();
		chaptersnormal();
		p_width_wide();
	}
	function anim_chap_3(){

		$(".rect").css("top",$("#top").height()*4);
		mydiv1w = $("#mydiv1").height()*1.3;
		resize_center();
		rect_to_horizontal_line();
		sidesnormal();
		chaptersnormal();
		p_width_wide();
	}

	function anim_chap_2_vert(){

		rect_to_vertical_line();
	}

	function anim_chap_2_circle(){

		rect_to_circle();
	}


	function anim_last_chapter(){
		rect_hide();
		mydiv1w = $(window).width() * 1;
		// rect_to_vertical_line();
		resize_center();
		sidesnormal();
		chaptersnormal();
		p_width_narrow();
		$(".footnotes").css("width","17%");
		$(".footnotes").css("right","2%");
	}






	function scrolltop(){


		var canvas = $("#mydiv1").find("img");
		var canvas2 = $("#mydiv1").find("p");
		var canvas3 = $("#mydiv1").find("#canvas2");
		var chapter1= $("#mydiv1").find("#chapter1");
		var chapter2= $("#mydiv1").find("#chapter2");
		var chapter3= $("#mydiv1").find("#chapter3");
		var chapter4= $("#mydiv1").find("#chapter4");
		var chapter5= $("#mydiv1").find("#chapter5");
		var abstract= $("#mydiv1").find("#abstract");
		var animationtrigger1 = $("#mydiv1").find(".trigger1");
		var animationtrigger2 = $("#mydiv1").find(".vert");
		var animationtrigger3 = $("#mydiv1").find(".circle");
		var animationtrigger4 = $("#mydiv1").find(".trigger4");
		var animationtrigger5 = $("#mydiv1").find(".trigger5");
		var directiontrigger = $("#mydiv1").find(".directiontrigger");
		var directiontrigger2 = $("#mydiv1").find(".directiontrigger2");
		var wavetrigger = $("#mydiv1").find(".wavetrigger");
		var spiraltrigger = $("#mydiv1").find(".spiraltrigger");
		var arrowtrigger = $("#mydiv1").find(".arrowtrigger");
		var img = $("#mydiv1").find("img");


		var footnotes = $("#mydiv1").find(".fn_marker");
		var subchapters = $("#mydiv1").find(".sub");
		var chapters = $("#mydiv1").find(".chapters");




		



		$(".chapters").each(function(){
			$(this).click(function(){
				var scrollchapter = $("#mydiv1").find("#" + $(this).attr("data-id")).offset().top;
				var scrollmydiv1 = -1 * $("#mydiv1").find(".textbody").first().scrollTop() + $("#mydiv1").find(".textbody").first().offset().top;
				var scrollgoal = scrollchapter - scrollmydiv1;
				// $("#mydiv1").css("transition","0s all");
				
				$("#mydiv1").find('.textbody').stop().animate({
					scrollTop: scrollgoal 
				}, 0);
				// $("#mydiv1").css("transition","0s all");


				console.log(scrollgoal, scrollchapter, scrollmydiv1);

			});
		});



		
		$(".subchapters").each(function(){
			$(this).click(function(){
				$(".subchapters").removeClass("underline");
				$(this).addClass("underline");

				var scrollmychapter;
				
				if($("#number1").hasClass("underline")){
					console.log("undeline");
					scrollmychapter = "#chapter1";
				}else if($("#number2").hasClass("underline")){
					scrollmychapter = "#chapter2";
				}else if($("#number3").hasClass("underline")){
					scrollmychapter = "#chapter3";
				}else if($("#number4").hasClass("underline")){
					scrollmychapter = "#chapter4";
				}else if($("#number5").hasClass("underline")){
					scrollmychapter = "#chapter5";
				}

				console.log(scrollmychapter);

				var scrollsub = $("#mydiv1").find(scrollmychapter).find("." + $(this).attr("data-id")).first().offset().top;
				var scrollmydiv1 = -1 * $("#mydiv1").find(".textbody").first().scrollTop() + $("#mydiv1").find(".textbody").first().offset().top;
				var scrollgoal = scrollsub - scrollmydiv1;
				
				console.log("scrollsub : " + scrollsub);
				console.log("data-id : " + $(this).attr('data-id'));



				// console.log($(this).parent().find(".chapter").attr("id"));
				// $("#mydiv1").css("transition","0s all");
				
				$("#mydiv1").find('.textbody').stop().animate({
					scrollTop: scrollgoal 
				}, 0);
				$("#mydiv1").css("transition","0s all");


				// for(i=0;i<7;i++){
				// 	if()
				// }


				// console.log(scrollgoal, scrollchapter, scrollmydiv1);

			});
		});




		function animations(){
			if (animationtrigger1.isOnScreen()===true){
				// rect_to_horizontal_line();
				anim_chap_3();

			}else if(animationtrigger2.isOnScreen()===true){
				anim_chap_2_vert();
			}else if(animationtrigger3.isOnScreen()===true){
				anim_chap_2_circle();
			}else if(animationtrigger4.isOnScreen()=== true){
				anim_last_chapter();
			}else if (directiontrigger.isOnScreen()=== true){
				rect_direction();
			}else if (wavetrigger.isOnScreen()=== true){
				rect_wave();
			}else if (spiraltrigger.isOnScreen()=== true){
				rect_spiral();
			}else if (arrowtrigger.isOnScreen()=== true){
				rect_arrow();
			}else if (directiontrigger2.isOnScreen()=== true){
				rect_direction2();
			}
		}


		
		$('#mydiv1').find(".textbody").on('scroll', function () {

			


			// animations();
			$(img).each(function(){
				$(this).css("left","calc(50% - " + $(this).width()/2 + "px)");
			});


			$('#mydiv2').find(".textbody").scrollTop($(this).scrollTop());
			
			footnotes.each(function(i,e) {
				if(isOnScreenBla($(e))) {
					// $(e).css('color','red');
					$("#" + $(e).attr('data-id')).css("display","inline-block");
				} else {
					$(e).css('color','black');
					$("#" + $(e).attr('data-id')).css("display","none");
				}
			});

			var maxpix = 700;



			if (chapter1.isOnScreen() === true ){
				// anim_last_chapter();
				if($( window ).width() > maxpix){
					animation2();
				}else{
					animation2();
					p_width_wide();
				}
				
				$(".chapters").show();
				$(".chapters").removeClass("underline");
				$("#number1").addClass("underline");
				subchapters.each(function(i,e) {
					if(isOnScreenBla($(e))) {
						$(".subchapters").hide();
						$(".ch1").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
				animations();
			}else if(chapter2.isOnScreen() === true ){
				if($( window ).width() > maxpix){
					animation1();
				// rect_to_rect();
				rect_to_vertical_line();
				// p_width_medium();
			}else{
				animation2();
				p_width_wide();
			}

			$(".chapters").removeClass("underline");
			$("#number2").addClass("underline");
			subchapters.each(function(i,e) {
				if(isOnScreenBla($(e))) {
					$(".subchapters").hide();
					$(".ch2").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
			animations();
				// $(".ch1").hide();
				console.log("hi");
				
			}else if(chapter3.isOnScreen() === true ){
				if($( window ).width() > maxpix){
					anim_chap_3();}else{
						animation2();
						p_width_wide();
					}

					$(".chapters").removeClass("underline");
					$("#number3").addClass("underline");
					subchapters.each(function(i,e) {
						if(isOnScreenBla($(e))) {
							$(".subchapters").hide();
							$(".ch3").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
					animations();

				}else if(chapter4.isOnScreen() === true){
					if($( window ).width() > maxpix){
						animation1();
						rect_to_circle();
						rect_to_middle();
					}else{
						animation2();
						p_width_wide();
					}

					$(".chapters").removeClass("underline");
					$("#number4").addClass("underline");
					subchapters.each(function(i,e) {
						if(isOnScreenBla($(e))) {
							$(".subchapters").hide();
							$(".ch4").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
					animations();

				}else if(chapter5.isOnScreen() === true){
					if($( window ).width() > maxpix){
						anim_last_chapter();
					}else{
						animation2();
						p_width_wide();
					}
					$(".chapters").removeClass("underline");
					$("#number5").addClass("underline");
					subchapters.each(function(i,e) {
						if(isOnScreenBla($(e))) {
							$(".subchapters").hide();
							$(".ch5").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
					animations();
				}else if(abstract.isOnScreen() === true){
					if($( window ).width() > maxpix){
						animation1();
						animations();
					}else{
						animation2();
						p_width_wide();
					}
					$(".chapters").show();
					$(".chapters").removeClass("underline");
					$("#number1").addClass("underline");
					subchapters.each(function(i,e) {
						if(isOnScreenBla($(e))) {
							$(".subchapters").hide();
							$(".ch1").show();

						// $(e).css('color','red');
						$(".subchapters").removeClass("underline");
						$("#" + $(e).attr('data-id')).addClass("underline");
					}
				});
				}else{
					if($( window ).width() > maxpix){
						$(".chapters").removeClass("underline");
						$(".subchapters").hide();
				// rect_hide();
			}else{
				animation2();
				p_width_wide();
			}
		}


	});

}


copyDiv();
scrolltop();

setInterval(function(){ 

	$(".toprint").css("width",$("#right").width()+"px");
	$(".hidepr").css("width",$("#left").width()+"px");
	if($(".hidepr").width()<1){
		$(".hidepr").hide()
	}else{
		$(".hidepr").show()
	};
}, 1);

}


window.onload = init();

$(".toprint").click(function(){
	window.print();
});


(function() {
	var beforePrint = function() {
		$("#mydiv1").find(".textbody").scrollTop($("#mydiv1").find(".textbody").offset().top);
		var img = $(".maintext").find("p");
		var footnotes = $(".footnote");
		var maintext = $("mydiv1").find(".maintext");
		var img2 = $(".maintext").find(".imgs");
		var mydiv1 = $("#mydiv1");
		var randomborder = ["-bottom","-right","-left","-top"];


		console.log('Functionality to run before printing.');
		$("#mydiv1").css("width","100%");
		$("#mydiv1").css("left","0%");
		$(".footim").css("width","400px");
		img.each(function(){
			$(this).css("padding-left",Math.random()*150 +"px");
			$(this).css("padding-right",Math.random()*150 +"px");
			$(this).css("padding-top",(Math.random() * (40-10) + 10) +"px");
			$(this).css("padding-bottom",(Math.random() * (40-10) + 10) +"px");
			$(this).css("margin-left", Math.random()*350 +"px");
			$(this).css("margin-right", Math.random()*350 +"px");
			$(this).css("margin-top", Math.random()*100 +"px");
			$(this).css("margin-bottom", Math.random()*100 +"px");
			$(this).css("min-height","100px");
			$(this).css("min-width","150px");
			$(this).css("max-width","500px");
			$(this).css("-webkit-transform","scale("+  (Math.random() * (1-0.9) + 0.9)  +")");
			$(this).css("border"+randomborder[Math.floor(Math.random() * (4-0) + 0)],"4px solid black");
		});

		img2.each(function(){
			$(this).css("border","4px solid black");
			$(this).css("padding","20px");
			// $(this).css("padding-left",Math.random()*50 +"px");
			// $(this).css("padding-right",Math.random()*50 +"px");
			// $(this).css("padding-top",Math.random()*50 +"px");
			// $(this).css("padding-bottom",Math.random()*50 +"px");
			$(this).css("margin", (Math.random() * (150-(10)) + (10)) +"px");
			$(this).css("-webkit-transform","scale("+  (Math.random() * (1.1-1) + 1)  +")");
		});


		footnotes.each(function(){
			$(this).css("position","absolute");
			$(this).css("padding-left",Math.random()*50 +"px");
			$(this).css("padding-right",Math.random()*50 +"px");
			$(this).css("padding-top",Math.random()*50 +"px");
			$(this).css("padding-bottom",Math.random()*50 +"px");
			$(this).css("margin-left", Math.random()*200 +"px");
			$(this).css("margin-right", Math.random()*100 +"px");
			$(this).css("margin-top", Math.random()*250 +"px");
			$(this).css("margin-bottom", Math.random()*150 +"px");
		});
		maintext.css("width","100px" +Math.random()*70 +"px");
		$(".underimg").css("padding-top","10px");
		$(".underimg").css("padding","0px");
		// $(".underimg").css("background-color","grey");
		$(".underimg").css("border","none");
		$(".imgs").css("margin-bottom","0px");
		$("h2").css("left","30px");
		$("h3").css("max-width","97%");
		$("textbody").css("left","0%");
		$("textbody").css("margin","0%");
		$(".notopmargin").css("margin-top","0px");
		$(".nobottommargin").css("margin-bottom","0px");
		$(".small").css("line-height","3px");
		$(".footim").css("margin-top","0px");

	};
	var afterPrint = function() {
		location.reload();

	};

	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
}());
