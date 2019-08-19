jQuery(document).ready(function($) {


	{
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

	//  Filter Find of Projects
	{
		if($(window).width() > 1000){
			$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`);
			$("#filterFindHome").css('top', `${$('#menu3D').height()}px`);
		}else{
			$(".filterHomeBody").width(`calc(98vw - ${$('.filterHomeBtn').width()}px)`);
			$("#filterFindHome").css('top',0);
		}

		$("#filterFindHome").css('right', `-${$(".filterHomeBody").width()}px`);
		setTimeout(()=>{
			$("#filterFindHome").css('transition', 'right .5s');
		}, 100);

		$("#filterFindHome .findBox .filterHomeBody dl > dd").slideUp();
		$("#filterFindHome .findBox .filterHomeBody dl > dt").on('click', function(event) {
			event.preventDefault();
			$(this).next('dd').slideToggle(500);
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



	
});