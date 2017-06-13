$(document).ready(function() {

/*SCROL TO THE TOP*/
$(".scroll").click(function(event){		
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});


$(function() {
				var pull 		= $('#pull');
					menu 		= $('nav ul');
					menuHeight	= menu.height();
				$(pull).on('click', function(e) {
					e.preventDefault();
					menu.slideToggle();
				});
				$(window).resize(function(){
	        		var w = $(window).width();
	        		if(w > 320 && menu.is(':hidden')) {
	        			menu.removeAttr('style');
	        		}
	    		});
			});
$().UItoTop({ easingType: 'easeOutQuart' });

$('.skill1').percentcircle({
coverBg: '#fff',
bgColor: '#d9d9d9',
fillColor: '#1da1f4',			
percentWeight: 'normal'
});

$('.skill2').percentcircle({						
coverBg: '#fff',
bgColor: '#d9d9d9',
fillColor: '#00948B',
percentSize: '15px',
percentWeight: 'normal'
});

$('.skill3').percentcircle({							
coverBg: '#fff',
bgColor: '#d9d9d9',
fillColor: '#E64608',
percentSize: '18px',
percentWeight: 'normal'
});


$('.skill4').percentcircle({							
coverBg: '#fff',
bgColor: '#d9d9d9',
fillColor: '#2E3041',
percentSize: '18px',
percentWeight: 'normal'
});		


var year=new Date();
	
$("span.year").text(year.getFullYear());

$('.typed').typeIt({
     strings: ["Hello there", "I am Mustapha Oyeleye", "A Web Developer based in Ibadan."],
     speed: 50,
     autoStart: false,
     callback: function() {
     $(".top-header-info .btn").fadeIn(500);
} 
}); 
});