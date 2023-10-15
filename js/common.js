$(function(){
            $('.hero-slider').owlCarousel({
                animateOut: 'flipOutX',
                animateIn: 'fadeIn',
                items:1,
                loop:true,
                nav:true,
                dots: true,
                })
    
        });
        $('.projects-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            // center: true,         
            dotsSpeed: 1000,          
            responsive:{
                0:{
                    items:1,
                    autoplay:false,
                },
                600:{
                    items:2,
                    autoplay:false,
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
        $('.testimonials-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            // center: true,         
            dotsSpeed: 1000,          
            responsive:{
                0:{
                    items:1,
                    autoplay:false,
                },
                600:{
                    items:1,
                    autoplay:false,
                },
                1000:{
                    items:2
                }
            }
        });


         $(document).on('click','.infetech-dropdown .infetech-dropdown-toggle', function () {
        if($(window).width() < 992){
            if($(this).parent().children('.infetech-dropdown-menu').hasClass('show')){
                $('.infetech-dropdown-menu').removeClass('show')
                $(this).parent().children('.infetech-dropdown-menu').removeClass('show')
            }else{     
                $('.infetech-dropdown-menu').removeClass('show')                
                $(this).parent().children('.infetech-dropdown-menu').addClass('show');
            }
        }
    }); 