;(function($) {
    "use strict";

    $(document).on('ready', function() {

        var $window = $(window),
            drew = {
                headerFloatingHeight : 60,
            };

        /* Scroll Spy */
        var toggleHeaderFloating = function() {
            // Floating Header
            if ($window.scrollTop() > 80) {
                $('.header-section').addClass('floating');
            } else {
                $('.header-section').removeClass('floating');
            };
        };
        $window.on('scroll', toggleHeaderFloating);

        /* One Page Navigation */
        if ($.fn.onePageNav) {
            $('#header-nav').onePageNav({
                scrollSpeed : 1000,
                begin : function() {
                    $('#navigation').collapse('toggle');
                },
            });
        };

        /* Anchor Link */
        $('body').on('click', 'a.anchor-link', function(e) {
            e.preventDefault();

            var $a = $(this),
                $target = $($a.attr('href'));

            if ($target.length < 1) return;

            $('html, body').animate({ scrollTop: Math.max(0, $target.offset().top - drew.headerFloatingHeight) }, 1000);
        });

    });
})(jQuery);


;(function($) {
    "use strict";

    $(document).on('ready', function() {

        /* Slideshow Background */
        if ($.fn.responsiveSlides) {
            $('body').on('pageStart', function() {
                $('.section-background-slideshow').responsiveSlides({
                    speed : $(this).data('speed') ? $(this).data('speed') : 800,
                    timeout : $(this).data('timeout') ? $(this).data('timeout') : 4000,
                });
            });
        };

        /* Countdown */
        if ($.fn.countdown) {
            $('.countdown').each(function(i, el) {
                var $el = $ (el),
                    date = $el.data('countdown'),
                    format = $el.html();

                $el.countdown(date, function(e) {
                    $(el).html(e.strftime(format));
                });
                $el.show();
            });
        };

    });
})(jQuery);


;(function($) {
    "use strict";
    
    $(document).ready(function() {

        /* SECTION: FEATURED */
        $('.featured-section').each(function () {
            var $this = $(this);
            var myVal = $(this).data("value");

            $this.appear(function() {
                $('.featured-section > .section-header > .section-title').addClass('animated fadeInDown');
                $('.featured-section > .section-header > .description').addClass('animated slideInRight');
                $('.featured-section > .container > .iphone').addClass('animated slideInRight');
                $('.featured-section > .container > .tab-system').addClass('animated slideInLeft');
            });
        });

    });
})(jQuery);



;(function($) {
    "use strict";

    $(document).ready(function() {

        if ($.fn.owlCarousel) {
            $("#about-us-slider").owlCarousel({
                autoPlay: 5000, 
                singleItem : true,
                transitionStyle : "fade"
            });        
        }

    });
})(jQuery);




;(function($) {
    "use strict";

    $(document).ready(function() {

        if ($.fn.carousel) {
            $("#team-carousel-block").carousel();
        };

    });
})(jQuery);


;(function($) {
    "use strict";
    $(document).on('ready', function() {

        /* FAQ */
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find('.panel-title a')
                .toggleClass('active')
                .find("i.fa")
                .toggleClass('fa-plus-square fa-minus-square');
        }
        $('.panel').on('hidden.bs.collapse', toggleIcon);
        $('.panel').on('shown.bs.collapse', toggleIcon);

    });
})(jQuery);


;(function($) {
    "use strict";
    $(document).ready(function() {

        /* Testimonials */
        $('#testimonials-carousel').carousel({
          interval: 8000 
        });

    });
})(jQuery);


;(function($) {
    "use strict";
    $(document).ready(function() {

        /* Testimonials */
        $('#story-carousel').carousel({
          interval: 8000 
        });

    });
})(jQuery);


;(function($) {
    "use strict";

    $(document).on('ready', function() {

        /* Partners list */
        if ($.fn.owlCarousel) {
            $("#partners").owlCarousel({
                autoPlay: 3000, //3 seconds
                items : 4,
                itemsDesktop : [1199,4],
                itemsDesktopSmall : [979,4],
                navigation : false,
                pagination: true
            });
        };

    });
})(jQuery);


;(function($) {
    "use strict";

    $(document).on('ready', function() {

        /* Preloader */
        var $body = $('body');
        if ($.fn.jpreLoader && $body.hasClass('enable-preloader')) {

            $body.jpreLoader({
                showSplash : false,
                // autoClose : false,
            }, function() {
                $body.trigger('pageStart');
            });

            $body.on('pageStart', function() {
                $body.addClass('done-preloader');
            });

        } else {
            $body.trigger('pageStart');
        };

    });
})(jQuery);
        

