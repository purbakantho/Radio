var GpTheme = GpTheme || {};

(function ($) {

    /*!----------------------------------------------
        # This beautiful code written with heart
        # by Mominul Islam <hello@mominul.me>
        # In Dhaka, BD at the GpTheme workstation.
        ---------------------------------------------*/

    // USE STRICT
    "use strict";

    window.TT = {
        init: function () {
            // Header
            this.header = $('.site-header');
            this.body = $('body');
            this.wpadminbar = $('#wpadminbar');

            this.headerFixed = {
                initialOffset: parseInt(this.header.attr('data-fixed-initial-offset')) || 100,

                enabled: $('[data-header-fixed]').length,
                value: false,

                mobileEnabled: $('[data-mobile-header-fixed]').length,
                mobileValue: false,
            };

            // Logos
            this.siteTitle = this.header.find('.site-title');
            this.logo = this.header.find('.main-logo');
            this.logoForOnepage = this.header.find('.for-onepage');
            this.logoForOnepageLight = this.logoForOnepage.find('.light');

            // Menus
            this.megaMenu = this.header.find('#mega-menu-wrap');
            this.mobileMenu = $('[data-mobile-menu-resolution]').data('mobile-menu-resolution');

            this.resize();
        },

        resize: function () {
            this.isDesktop = $(window).width() >= 991;
            this.isMobile = $(window).width() <= 991;
            this.isPad = $(window).width() <= 1024;
            this.isMobileMenu = $(window).width() <= TT.mobileMenu
        },
    };

    GpTheme.initialize = {
        init: function () {
            GpTheme.initialize.general();
            GpTheme.initialize.swiperSlider();
            GpTheme.initialize.countUp();
            GpTheme.initialize.sectionSwitch();
            GpTheme.initialize.contactFrom();
            GpTheme.initialize.handleMobileHeader();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function () {

            // $('.tt-content-filter li a').on('click', function () {
            //     var categoryValue = $(this).attr('data-filter');
            //     $(this).addClass('active').siblings().removeClass('active');
            //     if (categoryValue == "*") {
            //         $('.tt-support-item').fadeIn('1000');
            //     } else {
            //         $(".tt-support-item").not('.' + categoryValue).hide();
            //         $('.tt-support-item').filter('.' + categoryValue).fadeIn('1000');
            //     }
            // })

            //Popup Search
            $('#search-menu-wrapper').removeClass('toggled');

            $('#search-icon').on('click', function (e) {
                e.stopPropagation();
                $('#search-menu-wrapper').toggleClass('toggled');
                $("#popup-search").focus();
            });

            $('#search-menu-wrapper input').on('click', function (e) {
                e.stopPropagation();
            });

            $('#search-menu-wrapper, body').on('click', function () {
                $('#search-menu-wrapper').removeClass('toggled');
            });

            if ($('body').hasClass("admin-bar")) {
                $('body').addClass('header-position');
            }

            var $body = $('body');
            var $popup = $('.canvas-menu-wrapper');

            $("#page-open-main-menu").on('click', function (e) {
                e.preventDefault();
                var mask = '<div class="mask-overlay">';
                $(mask).hide().appendTo('body').fadeIn('fast');
                $popup.addClass('open');
                $(".gpt-hamburger").addClass('active');
                $body.addClass('page-popup-open');
                $("html").addClass("no-scroll sidebar-open").height(window.innerHeight + "px");
            });

            $("#page-close-main-menu, .mask-overlay").on('click', function (e) {
                e.preventDefault();
                $('.mask-overlay').remove();
                $body.removeClass('page-popup-open');
                $popup.removeClass('open');
                $('.sub-menu, .sub-menu-wide').removeAttr('style');
                $("html").removeClass("no-scroll sidebar-open").height("auto");
                $(".gpt-hamburger").removeClass('active');
                $('.sub-menu, .sub-menu-wide').removeAttr('style');
                $('.has-submenu .menu-link').removeClass('active');
            });

            // var wow = new WOW({
            //     boxClass: 'wow',
            //     animateClass: 'animated',
            //     offset: 0,
            //     mobile: false,
            //     live: true,
            //     scrollContainer: null,
            // });
            // wow.init();

            if ($("#wpadminbar").length && $(window).width() < 768) {
                $("#wpadminbar").css({
                    position: "fixed",
                    top: "0",
                })
            }

            /* Magnefic Popup */
            // $('.play-button, .popup-play-btn').each(function () {
            //     $('.play-button, .popup-play-btn').magnificPopup({
            //         type: 'iframe',
            //     });
            // });

            // $('.some-link').magnificPopup({
            //     // main options
            //     disableOn: 400,
            //     key: 'some-key',
            //
            //     gallery: {
            //         // options for gallery
            //         enabled: true
            //     },
            //     image: {
            //         // options for image content type
            //         titleSrc: 'title'
            //     }
            // });


            // $('.gallery-image-wrapper').each(function() { // the containers for all your galleries
            //     $(this).magnificPopup({
            //         delegate: 'a', // the selector for gallery item
            //         type: 'image',
            //         gallery: {
            //             enabled:true
            //         }
            //     });
            // });


            if ($('.sticky-sidebar').length) {
                $('body').addClass('sticky-sidebar_init');
                $('.sticky-sidebar').each(function () {
                    $(this).theiaStickySidebar({
                        additionalMarginTop: 140,
                        additionalMarginBottom: 30,
                    });
                });
            }

            if ($('.sticky_layout .info-wrapper').length) {
                $('.sticky_layout .info-wrapper').each(function () {
                    $(this).theiaStickySidebar({
                        additionalMarginTop: 120,
                        additionalMarginBottom: 120,
                    });
                });
            }


            const myaudio = document.getElementById('myaudio');


            myaudio.addEventListener('loadeddata', function (e) {
                const ctrl = document.getElementById('audioControl');
                const ctrlBtn = document.getElementById('audio-controll-btn');

                ctrlBtn.onclick = function () {
                    const stage = ctrl.innerHTML;
                    if (stage === '<i class="fa fa-play"></i>') {
                        ctrl.innerHTML = '<i class="fa fa-pause"></i>';
                        myaudio.play();
                    } else {
                        ctrl.innerHTML = '<i class="fa fa-play"></i>';
                        myaudio.pause();
                    }
                }
            }, false);


            $('.gallery-image-wrapper').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    // navigateByImgClick: true,
                    // preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        },

        /*===========================================*/
        /*=           handle Mobile Header          =*/
        /*===========================================*/

        handleMobileHeader: function () {

            if (TT.header && TT.header.length) {

                if (TT.isMobileMenu) {
                    TT.header.addClass('mobile-header');
                    TT.body.addClass('is-mobile-menu');
                    setTimeout(function () {
                        $('.main-nav').addClass('unhidden');
                    }, 300);
                } else {
                    TT.header.removeClass('mobile-header');
                    TT.body.removeClass('is-mobile-menu');
                    $('.main-nav').addClass('visible');
                }
            }
        },

        /*==========================================*/
        /*=           handle Fixed Header          =*/
        /*==========================================*/

        handleFixedHeader: function () {

            TT.init();
            var fixed = TT.headerFixed;

            if ($(document).scrollTop() > fixed.initialOffset) {

                if ((!TT.isMobileMenu && fixed.enabled && !fixed.value) ||
                    (TT.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue)) {

                    if (TT.isMobileMenu) {
                        fixed.mobileValue = true;
                    } else {
                        fixed.value = true;
                    }

                    TT.header.addClass('header-fixed no-transition');

                }

            } else if (fixed.value || fixed.mobileValue) {

                fixed.value = false;
                fixed.mobileValue = false;

                TT.header.removeClass('header-fixed');

            }

            // Effect appearance
            if ($(document).scrollTop() > fixed.initialOffset + 50) {
                TT.header.removeClass('no-transition').addClass('showed');
            } else {
                TT.header.removeClass('showed').addClass('no-transition');
            }
        },

        /*==================================*/
        /*=           Progressbar          =*/
        /*==================================*/

        progressBar: function () {
            if ($('.skill-wrapper').length) {
                $('.skills').not('.active').each(function () {
                    if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
                        $(this).addClass('active');
                        $(this).find('.skill').each(function () {
                            var procent = $(this).attr('data-value');
                            $(this).find('.active-line').css('width', procent + '%');
                        });
                    }
                });
            }
        },

        /*==================================*/
        /*=           Portfolio          =*/
        /*==================================*/
        portfolio: function () {
            if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {

                $(".portfolio-items").imagesLoaded(function () {
                    var container = $(".portfolio-items");

                    container.isotope({
                        itemSelector: '.radiopadma-portfolio-item',
                        layoutMode: 'masonry',
                    });

                    $('.portfolio-filter a').on('click', function () {
                        $('.portfolio-filter').find('.current').removeClass('current');
                        $(this).parent().addClass('current');

                        var selector = $(this).attr("data-filter");

                        container.isotope({
                            filter: selector,
                        });

                        return false;
                    });
                });
            }
        },

        /*====================================*/
        /*=           Swiper Slider          =*/
        /*====================================*/

        swiperSlider: function () {
            $('.tt-portfolio-related').each(function () {
                var swiper = new Swiper('.tt-portfolio-related', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    speed: 800,
                    autoplay: {
                        delay: 2000,
                    },
                    pagination: {
                        el: '.portfolio-pagination',
                        clickable: true,
                    },
                });
            });
        },

        /*=====================================*/
        /*=           Section Switch          =*/
        /*=====================================*/

        sectionSwitch: function () {
            $('.page-scroll, .site-header .menu li a').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target.length > 0) {

                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        $('html,body').animate({
                            scrollTop: target.offset().top - 130,
                        }, 1000);
                        return false;
                    }
                }
            });
        },

        /*==============================*/
        /*=           Countup          =*/
        /*==============================*/

        countUp: function () {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '',
            };

            var counteEl = $('[data-counter]');

            if (counteEl) {
                counteEl.each(function () {
                    var val = $(this).data('counter');

                    var countup = new CountUp(this, 0, val, 0, 2.5, options);
                    $(this).appear(function () {
                        countup.start();
                    }, {
                        accX: 0,
                        accY: 0,
                    })
                });
            }
        },

        /*=================================*/
        /*=           Contact Form         =*/
        /*=================================*/

        contactFrom: function () {
            $('[data-tt-form]').each(function () {
                var $this = $(this);
                $('.form-result', $this).css('display', 'none');

                $this.submit(function () {
                    $('button[type="submit"]', $this).addClass('clicked');
                    // Create a object and assign all fields name and value.
                    var values = {};

                    $('[name]', $this).each(function () {
                        var $this  = $(this),
                            $name  = $this.attr('name'),
                            $value = $this.val();
                        values[$name] = $value;
                    });

                    // Make Request
                    $.ajax({
                        url: $this.attr('action'),
                        type: 'POST',
                        data: values,
                        success: function success(data) {

                            if (data.error == true) {
                                $('.form-result', $this)
                                    .addClass('alert-warning')
                                    .removeClass('alert-success alert-danger')
                                    .css('display', 'block');
                            } else {
                                $('.form-result', $this)
                                    .addClass('alert-success')
                                    .removeClass('alert-warning alert-danger')
                                    .css('display', 'block');
                            }
                            $('.form-result > .content', $this).html(data.message);
                            $('button[type="submit"]', $this).removeClass('clicked');
                        },
                        error: function error() {
                            $('.form-result', $this)
                                .addClass('alert-danger')
                                .removeClass('alert-warning alert-success')
                                .css('display', 'block');
                            $('.form-result > .content', $this).html('Sorry, an error occurred.');
                            $('button[type="submit"]', $this).removeClass('clicked');
                        },
                    });
                    return false;
                });

            });
        },
    };

    GpTheme.documentOnReady = {
        init: function () {
            GpTheme.initialize.init();

            // const liveAudio = document.getElementById("myaudio");
            //
            // const ctrl = document.getElementById('audioControl');
            // const ctrlBtn = document.getElementById('audio-controll-btn');
            //
            // liveAudio.addEventListener('loadeddata', function () {
            //     ctrl.style.display = 'block';
            //
            //     ctrlBtn.addEventListener('click', function () {
            //
            //         if (liveAudio.paused) {
            //             liveAudio.play();
            //             ctrlBtn.classList.remove('fa-play');
            //             ctrlBtn.classList.add('fa-pause');
            //         } else {
            //             liveAudio.pause();
            //             ctrlBtn.classList.remove('fa-pause');
            //             ctrlBtn.classList.add('fa-play');
            //         }
            //     });
            // });

            // liveAudio.addEventListener("loadeddata", function () {
            //
            //     ctrlBtn.onclick = function () {
            //         var stage = ctrl.innerHTML;
            //         if (stage == '<i class="fa fa-play"></i>') {
            //             ctrl.innerHTML = '<i class="fa fa-pause"></i>';
            //             liveAudio.play();
            //
            //         } else {
            //             ctrl.innerHTML = '<i class="fa fa-play"></i>';
            //             liveAudio.pause();
            //         }
            //     }
            // });


        },
    };

    GpTheme.documentOnLoad = {
        init: function () {
            TT.init();
            GpTheme.initialize.handleMobileHeader();
            $("#preloader").fadeOut("slow");
        },
    };

    GpTheme.documentOnResize = {
        init: function () {
            if ($("#wpadminbar").length && $(window).width() < 768) {
                $("#wpadminbar").css({
                    position: "fixed",
                    top: "0",
                })
            }
            TT.resize();
            GpTheme.initialize.handleMobileHeader();
            GpTheme.initialize.handleFixedHeader();
        },
    };

    GpTheme.documentOnScroll = {
        init: function () {
            GpTheme.initialize.handleFixedHeader();
            // GpTheme.initialize.progressBar();
        },
    };

    // Initialize Functions
    $(document).ready(GpTheme.documentOnReady.init);
    $(window).on('load', GpTheme.documentOnLoad.init);
    $(window).on('resize', GpTheme.documentOnResize.init);
    $(window).on('scroll', GpTheme.documentOnScroll.init);

})(jQuery);

