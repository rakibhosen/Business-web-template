$(document).ready(function($){
	"use strict";
  

	// WOW Js Active
	new WOW().init();

	// ---- Active
  // service owl crsl
    $('.owl-crsl').owlCarousel({
    loop:false,
   nav: false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    // counter js
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

      // our team owl crsl
        $('.team-crsl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

            // testmonial wol crsl
            $('.testmonial-owl').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })


      // logo crsl
        $('.logo-crsl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

        


//     // mixit up section
//   var mixer = mixitup('.project-content');
//   // imgage popup
//  $('.image-link').magnificPopup({type:'image'});

  
}(jQuery));