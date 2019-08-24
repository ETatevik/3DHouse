// //Loading Page 
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
		let galleryW;
		if($(window).width() > 1200) $('#filterFindHome').css('top', `${$('#menu3D').height()}px`);

		if($(window).width() > 1100){
			galleryW = ($('#bigGalleryHome3d').width() - $('#filterFindHome').width()- 22);
			$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`);
			$('.filt3Dhei').width(`${galleryW}px`).css({marginLeft : '0', marginRight : 'auto'});
			$('#bigGalleryHome3d').width(`${galleryW}px`);
		}
		else{
			galleryW = $('#bigGalleryHome3d').width() - $('.filterHomeBtn').width()*1.1;
			$(".filterHomeBody").width(galleryW);
			$('#bigGalleryHome3d').width(`${0}px`).css('overflow', 'hidden');
			$('.filt3Dhei').css({width:'100%', marginRight: 'auto', marginLeft:'auto'});		
			$('#projecthome3D').css({flexWrap:'wrap', justifyContent:'center'});
			$('#projecthome3D .filterHomeBody').width(`${$(window).width() - $('.filterHomeBtn').width()*2}px`);
			$('#projecthome3D>.container').css('order', '2');
			$('#projecthome3D>#filterFindHome').css('order', '1');

		}


		$("#filterFindHome .findBox .filterHomeBody dl > dd").slideUp();
		$("#filterFindHome .findBox .filterHomeBody dl > dt").on('click', function(event) {
			event.preventDefault();
			$(this).next('dd').slideToggle(500);
			$(this).children(".plus").text() == '+' ? $(this).children(".plus").text('-'):$(this).children(".plus").text('+');
			
		});


		let flagFilterBtn = true;
		$('.filterHomeBtn').children('span').text('Скрыть');
		$('.filterHomeBtn').on('click',  function(event) {
			event.preventDefault();
			if(!flagFilterBtn){
				flagFilterBtn = true;
				$(this).children('span').text('Скрыть');
				if($(window).width() > 1100){
					$('.filt3Dhei').width(`${galleryW}px`).css({marginLeft : '0', marginRight : 'auto'});
					$('#bigGalleryHome3d').width(`${galleryW}px`);
					$(".filterHomeBody").width(`${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()}px`).css('overflow', 'visibility');
				}else{
					$('#home3D').height('auto');
					$('#bigGalleryHome3d').width(`${0}px`).css('overflow', 'hidden');
					$(".filterHomeBody").width(galleryW).css('overflow', 'visibility');
					$('#projecthome3D').css({flexWrap:'wrap', justifyContent:'center'});
					$('#projecthome3D .filterHomeBody').width(`${$(window).width() - $('.filterHomeBtn').width()*2}px`).css('overflow', 'visibility');
					$('#projecthome3D>.container').css('order', '2');
					$('#projecthome3D>#filterFindHome').css('order', '1');
				}

			}else{
				flagFilterBtn = false;
				$(this).children('span').text('Открыть фильтр');
				$('#bigGalleryHome3d').width(`100vw`);
				$(".filterHomeBody").width(0).css('overflow', 'hidden');
				if($(window).width() > 1100){
					$('.filt3Dhei').width(`100%`).css({marginLeft : 'auto', marginRight : 'auto'});
				}else{
					$('#home3D').height(`${$('#home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item, #home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item > img').eq(0).height()}px`);
					$('#projecthome3D').css({flexWrap:'nowrap', justifyContent:'space-between'});
					$('#projecthome3D .filterHomeBody').width(`0`).css('overflow', 'hidden');;
					$('#projecthome3D>.container').css('order', '1');
					$('#projecthome3D>#filterFindHome').css('order', '2');
				}
				if($(window).width() < 800){
					$('#bigGalleryHome3d').css('overflow', 'visibility');
					$('#home3D').height(`${$('#home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item, #home3D section.container-fluid #bigGalleryHome3d .carousel-inner > .carousel-item > img').eq(0).height() + $('#home3D section.container-fluid #bigGalleryHome3d .galleryBtns .container').height()}px`);
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

	// ----------------PROJECTS HTML---------------------- 
	// Select
	{
		var x, i, j, selElmnt, a, b, c;
		/*look for any elements with the class "custom-select":*/
		x = document.getElementsByClassName("project3DFilterSelect");
		for (i = 0; i < x.length; i++) {
		  selElmnt = x[i].getElementsByTagName("select")[0];
		  /*for each element, create a new DIV that will act as the selected item:*/
		  a = document.createElement("DIV");
		  a.setAttribute("class", "select-selected");
		  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		  x[i].appendChild(a);
		  /*for each element, create a new DIV that will contain the option list:*/
		  b = document.createElement("DIV");
		  b.setAttribute("class", "select-items select-hide");
		  for (j = 1; j < selElmnt.length; j++) {
		    /*for each option in the original select element,
		    create a new DIV that will act as an option item:*/
		    c = document.createElement("DIV");
		    c.innerHTML = selElmnt.options[j].innerHTML;
		    c.addEventListener("click", function(e) {
		        /*when an item is clicked, update the original select box,
		        and the selected item:*/
		        var y, i, k, s, h;
		        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		        h = this.parentNode.previousSibling;
		        for (i = 0; i < s.length; i++) {
		          if (s.options[i].innerHTML == this.innerHTML) {
		            s.selectedIndex = i;
		            h.innerHTML = this.innerHTML;
		            y = this.parentNode.getElementsByClassName("same-as-selected");
		            for (k = 0; k < y.length; k++) {
		              y[k].removeAttribute("class");
		            }
		            this.setAttribute("class", "same-as-selected");
		            break;
		          }
		        }
		        h.click();
		    });
		    b.appendChild(c);
		  }
		  x[i].appendChild(b);
		  a.addEventListener("click", function(e) {
		      /*when the select box is clicked, close any other select boxes,
		      and open/close the current select box:*/
		      e.stopPropagation();
		      closeAllSelect(this);
		      this.nextSibling.classList.toggle("select-hide");
		      this.classList.toggle("select-arrow-active");
		    });
		}
		function closeAllSelect(elmnt) {
		  /*a function that will close all select boxes in the document,
		  except the current select box:*/
		  var x, y, i, arrNo = [];
		  x = document.getElementsByClassName("select-items");
		  y = document.getElementsByClassName("select-selected");
		  for (i = 0; i < y.length; i++) {
		    if (elmnt == y[i]) {
		      arrNo.push(i)
		    } else {
		      y[i].classList.remove("select-arrow-active");
		    }
		  }
		  for (i = 0; i < x.length; i++) {
		    if (arrNo.indexOf(i)) {
		      x[i].classList.add("select-hide");
		    }
		  }
		}
		/*if the user clicks anywhere outside the select box,
		then close all select boxes:*/
		document.addEventListener("click", closeAllSelect);
	}

	//Cards Pages
	{

		let cardsOfProjects = `<div class="card mx-auto">
							      	<div class="card-img-top">
							      	  	<div class="stok">Акция</div>
							      	  	  	<img src="img/newPj1.png" class="img-fluid" alt="...">
							      	  	<div class="info">Дом для небольшой семьи</div>
							      	  	<button class="heart" type="button">
							      	  	  	<img src="img/icons/heart.svg" alt="">
							      	  	</button>
							      	</div>
							      	<div class="card-body">
							      	  	<h5 class="card-title">Проект Дома 55-2</h5>
							      	  	<p class="card-text">Проект дома — это документация, в которой указаны все параметры здания... </p>
							      	  	<div class="table-responsive">
							      	    	<table class="mx-0 table table-borderless">
							      	      		<tr>
							      	        		<td>Площадь: 200 м<sup>2</sup></td>
							      	        		<td rowspan="2">
							      	         			15 000 
							      	        			<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							      	        				<path d="M9.59766 	15.293H5.82422V18H2.87109V15.293H0.46875V12.9141H2.87109V11.6602H0.46875V9.28125H2.87109V0.9375H9.39844C11.2812 0.9375 12.7852 	1.42969 13.9102 2.41406C15.0352 3.39062 15.5977 4.69141 15.5977 6.31641C15.5977 7.97266 15.0625 9.27344 13.9922 10.2188C12.9219 	11.1562 11.4336 11.6367 9.52734 11.6602H5.82422V12.9141H9.59766V15.293ZM5.82422 9.28125H9.35156C10.4141 9.28125 11.2266 9.03516 	11.7891 8.54297C12.3516 8.05078 12.6328 7.31641 12.6328 6.33984C12.6328 5.46484 12.3555 4.75 11.8008 4.19531C11.2539 3.64063 	10.4961 3.35156 9.52734 3.32812H5.82422V9.28125Z" fill="#494949"/>
							      	        			</svg>
							      	        		</td>
							      	     		</tr>
							      	      		<tr>
									      	        <td >Этажи: 2</td>
							      	        
												</tr>
							      	    	</table>
							      	  	</div>
							      	  	<div class="cardLinkBtns">
							      	  	  	<div class="row">
							      	  	  	  	<div class="col-6">
							      	  	  	  	  	<a href="#">
							      	  	  	  	  	  	<img src="img/icons/share.svg" alt="">
							      	  	  	  	  	</a>
							      	  	  	  	  	<a href="#">
							      	  	  	  	  		<img src="img/icons/group.svg" alt="">
							      	  	  	  	  	</a>
							      	  	  	  	</div>
							      	  	  	  	<div class="col-6 text-right">
							      	  	  	  	  	<a href="#">Подробнее</a>
							      	  	  	  	</div>
							      	  	  	</div>
					
							      	  	</div>
							      	</div>
						    	</div>`;
		let scriptForHeart = `<script>
							jQuery(document).ready(function($){
								$('.heart').css('backgroundColor','#E9F1F5');
								$('.heart').on({
									'click': function(event) {
										event.preventDefault();
										if($(this).css('backgroundColor') != 'rgb(95, 202, 234)'){
											$(this).css('backgroundColor','rgb(95, 202, 234)');
											$(this).children('img').attr('src','img/icons/heart - anticon.svg');
										}else{
											$(this).css('backgroundColor','#E9F1F5');
											$(this).children('img').attr('src','img/icons/heart.svg');
										}
									}
								});
							});
							</script>`

		for (let i = 0; i < parseInt($('#projecMain3d .projectsShowPageCards.pageActive').text()); i++) {
			let newElementCard = $('<div class="col col-md-6 col-xl-4"></div>').html(cardsOfProjects);
			$('#projectsCardsMainBody3D').append(newElementCard);	
		}

		$('#projecMain3d .projectsShowPageCards').click(function(event) {
			$('#projectsCardsMainBody3D').empty();
			if (!$(this).hasClass('pageActive')) {
				$('#projecMain3d .projectsShowPageCards').not(this).removeClass('pageActive');
				$(this).addClass('pageActive');
			}

			if($(this).text() == '12'){
						
				for (let i = 0; i < parseInt($(this).text()); i++) {
					let newElementCard = $('<div class="col col-md-6 col-xl-4"></div>').html(cardsOfProjects);
					$('#projectsCardsMainBody3D').append(newElementCard);	
				}
			}else{
				for (let i = 0; i < parseInt($(this).text()); i++) {
					let newElementCard = $('<div class="col col-md-6 col-xl-3"></div>').html(cardsOfProjects);
					$('#projectsCardsMainBody3D').append(newElementCard);	
				}
			}
			$('#projectsCardsMainBody3D').append(scriptForHeart)
			
		});
		
	}

	// Video Play
	{
		$('.container-video').one('click', function(event) {
            $(this).children('video').trigger('play').attr('controls', 'true');;
            $(this).children('.play').fadeOut(200);   
        });
	}
	
	// 	Home New Pojectes Section  Heart
	{
		$('.heart').css('backgroundColor','#E9F1F5');
		$('.heart').on({
			'click': function(event) {
				event.preventDefault();
				if($(this).css('backgroundColor') != 'rgb(95, 202, 234)'){
					$(this).css('backgroundColor','rgb(95, 202, 234)');
					$(this).children('img').attr('src','img/icons/heart - anticon.svg');
				}else{
					$(this).css('backgroundColor','#E9F1F5');
					$(this).children('img').attr('src','img/icons/heart.svg');
				}
			}
		});
	}
	

	// --------------Project ID html-----------------------

	{
		$('#projectDescription3D .closeElement').slideUp(0);
		$('#projectDescription3D p > span').click(function(event) {
			$('#projectDescription3D p > span').not('this').css('display', 'inline');
			
			if($(this).hasClass('openJumbotron')){
				$(this).css('display', 'none');
				$('#projectDescription3D .closeElement').slideDown(500);
			}else if($(this).hasClass('closeJumbotron')){
				$(this).css('display', 'none');
				$('#projectDescription3D .closeElement').slideUp(300);
			}
		});
	}

	// ----------homeFooterContact----------------
	{
		$('.homeFooterContact').click(function(event) {
			window.location.replace("contact.html");
		});
	}

	//-----------------------Services Html----------------------------------
	{
		if($(window).width() >= 1200){
			$('#servicesHead3D').css('marginTop', `${$('#menu3D').height()}px`);
			$("#asideCalculator").css('maxWidth', `${$("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()+50}px`);
		}else{
			$('#servicesHead3D').css('marginTop', `0`);
		}

		if($(window).width() <= 1350 && $(window).width() >= 1000){
			$('#bigBodyOfServices #bigContainer.container').css('maxWidth', `${1140 - $("#menu3D > .container-fluid > .navbar > .minMenu3D > .row").width()+50}px`);
		}

	}
});