jQuery(document).ready(function($) {

	// Header of page // Gallery 
	{

		if($(window).width() < 900){
			$('.popoverbigGalleryHome3d').css('display', 'none');
		}else{
			$('.popoverbigGalleryHome3d').fadeOut();
				$('#bigGalleryHome3d').on(
				{
					'mouseenter':function(event) {
						event.preventDefault();
						$('.popoverbigGalleryHome3d').fadeIn('500');
					},
					'mouseleave': function(event){
						event.preventDefault();
						$('.popoverbigGalleryHome3d').fadeOut('200');
					}
				});
		}

	}

	//  Filter Find of Projects
	{
		$("#filterFindHome").css('top', `${$('#menu3D').height()}px`);
		if($(window).width() > 1000){
			$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`);
		}else{
			$(".filterHomeBody").width(`calc(${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width() - 2}px - ${$('.filterHomeBtn').width()}px)`);
		}
		$("#filterFindHome").css('right', `-${$(".filterHomeBody").width()}px`);
		setTimeout(()=>{
			$("#filterFindHome").css('transition', 'right .5s');
		}, 100);

		$("#filterFindHome .findBox .filterHomeBody dl > dd").slideUp();
		$("#filterFindHome .findBox .filterHomeBody dl > dt").on('click', function(event) {
			event.preventDefault();
			$(this).next('dd').slideToggle(500);
			$(this).children(".plus").text() == '+' ? $(this).children(".plus").text('-'):$(this).children(".plus").text('+');
		});


		let flagFilterBtn = false;
		$('.filterHomeBtn').on('click',  function(event) {
			event.preventDefault();
			if(!flagFilterBtn){
				flagFilterBtn = true;
				$("#filterFindHome").css('right', 0);
				$(this).children('span').text('Скрыть');
			}else{
				flagFilterBtn = false;
				$("#filterFindHome").css('right', `-${$(".filterHomeBody").width()}px`);
				$(this).children('span').text('Открыть фильтр');
			}
		});
	}

	// 	Home New Pojectes Section 
	{
		$('.containerNewProjSlider .card .heart').css('backgroundColor','#E9F1F5');
		$('.containerNewProjSlider .card .heart').on({
			'click': function(event) {
				event.preventDefault();
				if($(this).css('backgroundColor') != 'rgb(95, 202, 234)'){
					$(this).css('backgroundColor','rgb(95, 202, 234)');
					$(this).children('img').attr('src','../img/icons/heart - anticon.svg');
				}else{
					$(this).css('backgroundColor','#E9F1F5');
					$(this).children('img').attr('src','../img/icons/heart.svg');
				}
			}
		});
	}

	
});