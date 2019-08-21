//Loading Page 
window.onload = function (){
	setTimeout(()=>{
		$('#loading').fadeOut(800, function() {
			$(this).css('display', 'none');
		});		
	}, 500);

}

jQuery(document).ready(function($) {
	//Load Page if change Width Window
	{
		let startWid = $(window).width();

		$(window).resize(function(event) {
			if(startWid != $(this).width()) location.reload();
		});
	}

	// Header of page // Gallery 
	{

		if($(window).width() < 900){
			$('.popoverbigGalleryHome3d').css('display', 'none');
		}

	}

	//  Filter Find of Projects
	{
		// $("#filterFindHome").css('top', `${$('#menu3D').height()}px`);
		let galleryW;
		if($(window).width() > 1200) $('#filterFindHome').css('top', `${$('#menu3D').height()}px`);

		if($(window).width() > 1100){
			galleryW = ($('#bigGalleryHome3d').width() - $('#filterFindHome').width()- 22);
			$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`);
			$('.filt3Dhei').width(`${galleryW}px`).css({marginLeft : '0', marginRight : 'auto'});
			$('#bigGalleryHome3d').width(`${galleryW}px`);
		}
		// else if($(window).width() < 1000 && $(window).width() > 800){
		// 	$(".filterHomeBody").width(`calc(${2*$('#bigGalleryHome3d').width()/3}px - ${$('.filterHomeBtn').width()}px`);
		// 	$('#bigGalleryHome3d').width(`${galleryW}px`);
		// 	$('.filt3Dhei').css({width:'100%', marginRight: 'auto', marginLeft:'auto'});
		// }
		else{
			galleryW = $('#bigGalleryHome3d').width() - $('.filterHomeBtn').width()*1.1;
			$(".filterHomeBody").width(galleryW);
			$('#bigGalleryHome3d').width(`${0}px`).css('overflow', 'hidden');
			$('.filt3Dhei').css({width:'100%', marginRight: 'auto', marginLeft:'auto'});		
		}


		// let pageHeight = 0;
		// let startHei =  $('.filt3Dhei').eq(0).width() + $('.filt3Dhei').eq(1).width();
		// let filterStartHei = $('#filterFindHome .findBox .filterHomeBody ').height() + $('#menu3D').height();

		// if(filterStartHei >= $('.filt3Dhei').eq(0).width()+$('#menu3D').height() && filterStartHei <= startHei){
		// 	$('.filt3Dhei').eq(1).children('.container').width(`${galleryW - 100}px`).css({marginLeft : '40px', marginRight : 'auto'});
		// }


		$("#filterFindHome .findBox .filterHomeBody dl > dd").slideUp();
		$("#filterFindHome .findBox .filterHomeBody dl > dt").on('click', function(event) {
			event.preventDefault();
			$(this).next('dd').slideToggle(500);
			$(this).children(".plus").text() == '+' ? $(this).children(".plus").text('-'):$(this).children(".plus").text('+');
			// filterStartHei = $('#filterFindHome .findBox .filterHomeBody ').height() + $('#menu3D').height();

			// pageHeight = 0;
			// startHei = 0;
			// $('.filt3Dhei').each(function(index, el) {
			// 		startHei += pageHeight;
			// 		pageHeight += $(this).width();
			// 		console.log(pageHeight);

			// 		if(filterStartHei >= startHei + $('#menu3D').height() && filterStartHei <= pageHeight){
			// 			$(this).children('.container').width(`${galleryW - 100}px`).css({marginLeft : '40px', marginRight : 'auto'});
			// 			console.log('aaa');
			// 		}
			// });
			
		});


		let flagFilterBtn = true;
		$('.filterHomeBtn').children('span').text('Скрыть');
		$('.filterHomeBtn').on('click',  function(event) {
			event.preventDefault();
			if(!flagFilterBtn){
				flagFilterBtn = true;
				// $("#filterFindHome").css('right', 0);
				$(this).children('span').text('Скрыть');
				if($(window).width() > 1100){
					$('.filt3Dhei').width(`${galleryW}px`).css({marginLeft : '0', marginRight : 'auto'});
					$('#bigGalleryHome3d').width(`${galleryW}px`);
					$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`).css('overflow', 'visibility');
				}else
				// else if($(window).width() < 800)
				{
					$('#home3D').height('auto');
					$('#bigGalleryHome3d').width(`${0}px`).css('overflow', 'hidden');
					$(".filterHomeBody").width(galleryW).css('overflow', 'visibility');
				}

			}else{
				flagFilterBtn = false;
				// $("#filterFindHome").css('right', `-${$(".filterHomeBody").width()}px`);
				$(this).children('span').text('Открыть фильтр');
				$('#bigGalleryHome3d').width(`100vw`);
				$(".filterHomeBody").width(0).css('overflow', 'hidden');
				if($(window).width() > 1100){
					$('.filt3Dhei').width(`100%`).css({marginLeft : 'auto', marginRight : 'auto'});
				}else{
					$('#home3D').height(`${$('#home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item, #home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item > img').eq(0).height()}px`);
				}
				if($(window).width() < 800){
					$('#bigGalleryHome3d').css('overflow', 'visibility');
					$('#home3D').height(`${$('#home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item, #home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item > img').eq(0).height() + $('#home3D section.container-fluid #bigGalleryHome3d .galleryBtns .container').height()}px`);
					// $('#home3D section.container-fluid #bigGalleryHome3d .galleryBtns .container').css('flexWrap', 'wrap');
				}
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

	// range3Dmultirange section
	{
		$('input[type="range"]').width(`${$('.range3Dmultirange').width()}px`);

		$('#multirangeTotalArea.range3Dmultirange input[type="range"].multirange').change(function(event) {
			let text = parseInt($(this).val());

			if($(this).hasClass('ghost')){
				if (text == 500 ){
					$('input[name="maxTotalArea"]').val(text+'+');
					$('#maxRange').text(text+'+')
				}else{
					$('#maxRange').text(text);
					$('input[name="maxTotalArea"]').val(text);
				} 
			}else{
				$('#minRange').text(text);	
				$('input[name="minTotalArea"]').val(text);
			}
		
		});
		$('#multirangeBreadth3D.range3Dmultirange input[type="range"].multirange').change(function(event) {
			let text = parseInt($(this).val());

			if($(this).hasClass('ghost')){
				if (text == 500 ){
					$('input[name="maxBreadth3D"]').val(text+'+');
					$('#maxRange2').text(text+'+')
				}else{
					$('#maxRange2').text(text);
					$('input[name="maxBreadth3D"]').val(text);
				} 
			}else{
				$('#minRange2').text(text);	
				$('input[name="minBreadth3D"]').val(text);
			}
		
		});
		$('#multirangeLength3D.range3Dmultirange input[type="range"].multirange').change(function(event) {
			let text = parseInt($(this).val());

			if($(this).hasClass('ghost')){
				if (text == 500 ){
					$('input[name="maxLength3D"]').val(text+'+');
					$('#maxRange3').text(text+'+')
				}else{
					$('#maxRange3').text(text);
					$('input[name="maxLength3D"]').val(text);
				} 
			}else{
				$('#minRange3').text(text);	
				$('input[name="minLength3D"]').val(text);
			}
		
		});
	}
		
});