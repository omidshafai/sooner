$(document).ready(function(){


//------------------------------------- Navigation setup ------------------------------------------------//
	

//--------- Scroll navigation ---------------//
$("#mainNav a,.innerctLink").click(function(event){

	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top;

	$('html,body').animate({scrollTop:target_top -68}, 800);
    
	
});

//-------------Highlight the current section in the navigation bar------------//
var sections = $("section");
	var navigation_links = $("#mainNav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#mainNav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("active");
			active_link.addClass("active");

		},
		offset: '35%'
	})


//-------Show / hide the new srtyled navigation depending of the position of the sections--------//
var menu = $('#mainNav'),
	pos = menu.offset();

	$(window).scroll(function(){
		if($(this).scrollTop() > pos.top+20 && menu.hasClass('default')){
			menu.fadeOut('fast', function(){
				$(this).removeClass('default').addClass('fixed').slideDown(200);
			});
		} else if($(this).scrollTop() <= pos.top+20 && menu.hasClass('fixed')){
			menu.slideUp(200, function(){
				$(this).removeClass('fixed').addClass('default').slideDown(200);
			});
		}
	});
	
	
	
		
//------------------------------------- End navigation setup ------------------------------------------------//


//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//
				
				
				$("div.link").css({ opacity: 0 });
				$('.work, .item').hover( function(){ 
					$(this).children('img').animate({ opacity: 0.80 }, 'fast');
					$(this).children('.link').animate({ opacity: 0.95 }, 'fast');
				}, function(){ 
					$(this).children('img').animate({ opacity: 1 }, 'slow');
					$(this).children('.link').animate({ opacity: 0 }, 'slow'); 
				}); 
				
			

//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//

//-----------------------------------Initilaizing fancybox for the portfolio-------------------------------------------------//

	$('.portfolio a.folio').fancybox({
					'overlayShow'	: true,
					'opacity'		: true,
					'transitionIn'	: 'elastic',
					'transitionOut'	: 'none',
					'overlayOpacity'	:   0.8
				});
				
//-----------------------------------End initilaizing fancybox for the portfolio-------------------------------------------------//

	//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//
	
		var $portfolioClone = $('.portfolio').clone();

		$('.filter a').click(function(e){
			$('.filter li').removeClass('current');	
			var $filterClass = $(this).parent().attr('class');
			if ( $filterClass == 'all' ) {
				var $filteredPortfolio = $portfolioClone.find('li');
			} else {
				var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
			}
			$('.portfolio').quicksand( $filteredPortfolio, { 
				duration: 800,
				easing: 'easeInOutQuad' 
			}, function(){
					$('.item').hover( function(){ 
						$(this).children('img').animate({ opacity: 0.80 }, 'fast');
						$(this).children('.link').animate({ opacity: 0.95 }, 'fast');
					}, function(){ 
						$(this).children('img').animate({ opacity: 1 }, 'slow');
						$(this).children('.link').animate({ opacity: 0 }, 'slow');
					}); 


//------------------------------ Reinitilaizing fancybox for the new cloned elements of the portfolio----------------------------//

				$('.portfolio a.folio').fancybox({
								'overlayShow'	: true,
								'opacity'		: true,
								'transitionIn'	: 'elastic',
								'transitionOut'	: 'none',
								'overlayOpacity'	:   0.8
							});

//-------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//

			});


			$(this).parent().addClass('current');
			e.preventDefault();
		});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//


//--------------------------------- Form validation --------------------------------//
//---------------------------------- Forms validation -----------------------------------------//
	
	/*click handler on the submit button*/
	$('#submit').click(function(){ 
		$('.error').fadeOut('slow'); 
		
		var error = false; 
		var name = $('input#name').val(); 
		if(name == "" || name == " ") {
			$('#err-name').fadeIn('slow'); 
			error = true; 
		}
		
		
			var msg = $('textarea#message').val(); 
			if(msg == "" || msg == " ") {
				$('#err-message').fadeIn('slow'); 
				error = true; 
			}
		
		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; 
		var email = $('input#email').val(); 
		if (email == "" || email == " ") { 
			$('#err-email').fadeIn('slow'); 
			error = true;
		}else if (!email_compare.test(email)) { 
			$('#err-emailvld').fadeIn('slow'); 
			error = true;
		}

		if(error == true) {
			return false;
		}

		var data_string = $('.contactForm').serialize(); 
		

		$.ajax({
			type: "POST",
			url: $('.contactForm').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout').fadeIn('slow');
				}
				else {
					$('#err-state').fadeIn('slow');
					$("#err-state").html('An error occurred: ' + error + '');
				}
			},
			success: function() {
					$('#success').fadeIn('slow');
						}
		});

		return false; 
	}); 
//---------------------------------- End forms validation -----------------------------------------//

//--------------------------------- End form validation--------------------------------//

//---------------------------------- Testimonials-----------------------------------------//
$('#jasvjahshg').slides({
	preload: false,
	generateNextPrev: false,
	play: 4500,
	container: 'testimoniaContainer'
});
//---------------------------------- End testimonials-----------------------------------------//

		
});





