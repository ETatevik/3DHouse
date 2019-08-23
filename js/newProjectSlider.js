$(document).ready(function() {
  	let owl = $('#demos .owl-carousel');
  	owl.owlCarousel({
    	margin: 10,
    	nav: true,
    	loop: true,
    	responsive: {
    	  	0: {
    	    	items: 1
    	 	},
    	  	600: {
    	    	items: 2
    	  	},
    	  	1000: {
    	    	items: 3
    		}
    	}
  	})
    let owl1 = $('#demos2 .owl-carousel');
    owl1.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            
            1000: {
                items: 2
            }
        }
    })
})