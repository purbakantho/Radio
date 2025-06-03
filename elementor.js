(function ($, elementor) {
	"use strict";

	var Gpt = {

		init: function () {

			var widgets = {
				'gpt-audio-player.default': Gpt.CircleAudioPlayer,
				'tt-portfolio-slider.default': Gpt.Slider,
				'tt-tab.default': Gpt.Tabs,
				'tt-tab-two.default': Gpt.Tabs,
				'gpt-content-tabs.default': Gpt.TabsHistory,
				'tt-countdown.default': Gpt.Counting,

			};
			$.each(widgets, function (widget, callback) {
				elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
			});
		},

		CircleAudioPlayer: function ($scope) {
			var element = $scope.find('#jquery_jplayer_1')
			var audiolink = $('#jp_audio_0').attr('src');

			new CirclePlayer(
				'#jquery_jplayer_1',
				{
					mp3: audiolink,
				},
				{
					cssSelectorAncestor: "#cp_container_1",
					swfPath: "js/jplayer",
					supplied: "oga, mp3",
					wmode: "window",
					smoothPlayBar: false,
					keyEnabled: true,
					preload: "auto",
				},
			);
		},


		Tabs: function ($scope) {
			var tabnav = $scope.find('#tt-tabs-nav li');

			$('#tt-tabs-nav li:nth-child(1)').addClass('active');
			$('#tt-tabs-content .content').hide();
			$('#tt-tabs-content .content:nth-child(1)').show();

			// Tab Click function
			tabnav.on('click', function () {
				$('#tt-tabs-nav li').removeClass('active');
				$(this).addClass('active');
				$('#tt-tabs-content .content').hide();

				var activeTab = $(this).find('a').attr('href');
				$(activeTab).fadeIn(600);
				return false;
			});
		},

		TabsHistory: function ($scope) {

			var tabnav = $scope.find('#content-tabs-nav li');

			$('#content-tabs-nav li:nth-child(1)').addClass('active');
			$('#gpt-content-tabs-content .content').hide();
			$('#gpt-content-tabs-content .content:nth-child(1)').show();

			// Tab Click function
			tabnav.on('click', function () {
				$('#content-tabs-nav li').removeClass('active');
				$(this).addClass('active');
				$('#gpt-content-tabs-content .content').hide();

				var activeTab = $(this).find('a').attr('href');
				$(activeTab).fadeIn(400);
				return false;
			});
		},

		Pricing: function ($scope) {
			var pricing = $scope.find('.pricing_wrapper');

			if ($(".pricing_wrapper").length > 0) {
				pricing.each(function () {
					if ($(window).width() < 991) {
						return;
					}

					$(this).find(".row").append('<div class="indicator"></div>');

					var leftPos = $(this)
							.find(".grid")
							.eq(1)
							.position().left,
						column = $(this).find(".grid"),
						indicator = ".indicator";

					column.siblings(indicator).css("width", column.outerWidth());
					column.siblings(indicator).css("left", leftPos);

					column.on("mouseenter mouseleave", function (event) {
						if (event.type === "mouseenter") {
							$(this)
								.siblings(indicator)
								.css("left", $(this).position().left);
						}
						if (event.type === "mouseleave") {
							$(this)
								.siblings(indicator)
								.css("left", leftPos);
						}
					});
				});
			}
		},

		Counting: function ($scope) {

			var counting = $scope.find('.countdown');

			counting.each(function (index, value) {
				var count_year = $(this).attr("data-count-year");
				var count_month = $(this).attr("data-count-month");
				var count_day = $(this).attr("data-count-day");
				var count_date = count_year + '/' + count_month + '/' + count_day;
				$(this).countdown(count_date, function (event) {
					$(this).html(
						event.strftime('<div class="counting"><span class="CountdownContent">%D<span class="CountdownLabel">Days</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%H <span class="CountdownLabel">Hours</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%M <span class="CountdownLabel">Minutes</span></span><span class="CountdownSeparator">:</span></div><div class="counting"><span class="CountdownContent">%S <span class="CountdownLabel">Seconds</span></span></div>')
					);
				});
			});

		},

		Slider: function ($scope) {
			var slideInit = $scope.find('[data-swiper]');

			slideInit.each(function () {
				var swps = document.querySelectorAll('[data-swiper]');

				if (swps.length > 0) {
					swps.forEach(function (swp) {
						var config = JSON.parse(swp.getAttribute('data-swiper'));
						var mySwiper = new Swiper(swp, config);

						$('.swiper-slide').on('mouseover', function () {
							mySwiper.autoplay.stop();
						});

						$('.swiper-slide').on('mouseout', function () {
							mySwiper.autoplay.start();
						});
					});

				}


			});
		},

		Testimonial: function ($scope) {

			var slideInit = $scope.find('[data-testi]');

			slideInit.each(function () {
				var swps = document.querySelectorAll('[data-testi]');

				if (swps.length > 0) {
					swps.forEach(function (swp) {
						var config = JSON.parse(swp.getAttribute('data-testi'));
						var mySwiper = new Swiper(swp, config);

						$('.swiper-slide').on('mouseover', function () {
							mySwiper.autoplay.stop();
						});

						$('.swiper-slide').on('mouseout', function () {
							mySwiper.autoplay.start();
						});
					});

				}
			});
		},


		Logo: function ($scope) {

			var slideInit = $scope.find('[data-logo]');

			slideInit.each(function () {
				var swps = document.querySelectorAll('[data-logo]');

				if (swps.length > 0) {
					swps.forEach(function (swp) {
						var config = JSON.parse(swp.getAttribute('data-logo'));
						var mySwiper = new Swiper(swp, config);

						$('.swiper-slide').on('mouseover', function () {
							mySwiper.autoplay.stop();
						});

						$('.swiper-slide').on('mouseout', function () {
							mySwiper.autoplay.start();
						});
					});

				}


			});
		},

	};
	$(window).on('elementor/frontend/init', Gpt.init);
}(jQuery, window.elementorFrontend));