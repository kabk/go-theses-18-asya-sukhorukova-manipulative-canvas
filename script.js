 function init() {
// 	function printpage(){
//     var originalContents = document.body.innerHTML;
//     var printReport= document.getElementById('mydiv1').innerHTML;
//     document.body.innerHTML = printReport;
//     window.print();
//     document.body.innerHTML = originalContents;
// }
// printpage();
// function printpage()
//    {
//         var originalContents = document.body.innerHTML;
//         var printReport= document.getElementById('results').innerHTML;
//         document.body.innerHTML = printReport;
//         window.print();
//         document.body.innerHTML = originalContents;
//     }
//     $(".print").click(function(){
//     	printpage();
//     });

	// $(".line").css("height","100%");

	function copyDiv() {
	    var firstDivContent = document.getElementById('mydiv1');
	    var secondDivContent = document.getElementById('mydiv2');
	    secondDivContent.innerHTML = firstDivContent.innerHTML;
	}
	function scrolltop(){
		var change1;
		var change2;
		var changewidth;
		
		    $('#mydiv1').find(".textbody").on('scroll', function () {
		    change1 = $("#mydiv1").find("h2").offset().top;
		    change2 = $("anchor").offset().top;
		    var change3;
		    console.log(change1);
		    $('#mydiv2').find(".textbody").scrollTop($(this).scrollTop());
            
            

		
			if($("#mydiv1").find(".textbody").scrollTop() < change1/10){
				// changewidth = $("#mydiv1").height()*1.8;
				$("#mydiv1").css("width","65%");
				$("#mydiv1").css("left","17.5%");
				$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		    	$("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);

				
				// $("#mydiv1").css("border-radius","100%");
				// $("#mydiv1").find(".textbody").css("border-radius","100%");
				// $("#textbody").find("img").css("margin-left"," - "+ $("img").width()/1 +"px")
				// changewidth = $("#mydiv1").height();
				
			}else if($("#mydiv1").find(".textbody").scrollTop() > change1/10 && $("#mydiv1").find(".textbody").scrollTop() < change2/10){
				$("#mydiv1").css("width",changewidth);
			    $("#mydiv1").css("left","calc(50% - "+changewidth/2+"px)");
				$("#mydiv1").css("border-radius","0%");
				$("#mydiv1").find(".textbody").css("border-radius","0%");
				changewidth = $("#mydiv1").height()*1.5;
				$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		    	$("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);
			}else{
				console.log("olaaa");
				// $(".circle").css("left","calc(-50% - "+39+"px)")
			}

			});

	}
	function changeshape(){
			$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		    $("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);

	}
	changeshape()
	

	copyDiv();
	scrolltop();
	setInterval(function(){ 
				$("#top, #bottom").css("height",($(window).height() - $("#mydiv1").height())/2);
		    	$("#left, #right").css("width",($(window).width() - $("#mydiv1").width())/2);
	 }, 1);

}


window.onload = init();


