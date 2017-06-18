$(document).ready(function() {
	svg4everybody();
	
	(function range($range, $from, $to) {
		var $parent = $range.closest(".range__parent"),
				$from = $parent.find(".range__from"),
				$to = $parent.find(".range__to");

		$range.ionRangeSlider({
			type: "double",
			hide_from_to: true,
			onChange: function (data) {
				$from.val(data.from);
				$to.val(data.to);
			}
		});

		$to.change(function () {
			$range.data("ionRangeSlider").update({
				to: $(this).val()
			});
		})

		$from.change(function () {
			$range.data("ionRangeSlider").update({
				from: $(this).val()
			});
		})
	})($(".range"));

	$(".checkbox").styler();

	$(".sort__criteria").click(function() {
		if($(this).hasClass("sort__criteria_active")) {
			$(this).toggleClass("sort__criteria_order_desc");
		} else {
			$(this).parent().find(".sort__criteria_active").removeClass("sort__criteria_active");
			$(this).addClass("sort__criteria_active");
		}
	});

	$(".item-gallery__slider").slick({
		arrows: false,
		infinite: false
	})

	$(".item-gallery__prs").slick({
		slidesToShow: 4,
		prevArrow: "<button class=\"slick-prev\">" +
							 "<svg class=\"icon-svg slick-icon\" width=\"14\" height=\"28\">" +
							 "<use xlink:href=\"images/sprite/arrows.svg#svg-prs-prev\"></use>" +
							 "</svg>" +
							 "<svg class=\"icon-svg slick-icon-disabled\" width=\"15\" height=\"28\">" +
							 "<use xlink:href=\"images/sprite/arrows.svg#svg-prs-prev-disable\"></use>" +
							 "</svg>" +
							 "</button>",

 		nextArrow: "<button class=\"slick-next\">" +
 							 "<svg class=\"icon-svg slick-icon\" width=\"14\" height=\"28\">" +
 							 "<use xlink:href=\"images/sprite/arrows.svg#svg-prs-next\"></use>" +
 							 "</svg>" +
 							 "<svg class=\"icon-svg slick-icon-disabled\" width=\"15\" height=\"28\">" +
 							 "<use xlink:href=\"images/sprite/arrows.svg#svg-prs-next-disable\"></use>" +
 							 "</svg>" +
 							 "</button>",
		infinite: false,
		focusOnSelect: true
	})

	$(".item-gallery__pr").click(function() {
		var $prs = $(this).closest(".item-gallery__prs"),
				$slider = $(this).closest(".item-gallery").find(".item-gallery__slider");

		$prs.find(".item-gallery__pr_active").removeClass("item-gallery__pr_active");
		$(this).addClass("item-gallery__pr_active");


		$slider.slick('slickGoTo', $(this).index());
	});


	$(".item-info-tabs").slick({
		slidesToShow: 4,
		arrows: false,
		prevArrow: "<button class=\"slick-prev\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-prev\"></use></svg></button>",
		nextArrow: "<button class=\"slick-next\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-next\"></use></svg></button>",
		infinite: false,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3,
				arrows: true
			}
		},{
			breakpoint: 1012,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}]
	});

	$(".item-info-tabs__link").click(function() {
		$(this).closest(".item-info-tabs").find(".item-info-tabs__link_active").removeClass("item-info-tabs__link_active");
		$(this).addClass("item-info-tabs__link_active");
		$(this).parent().removeClass("active")
		$(this).tab('show');

		return false;
	});

	$(".item-info-video__slider").slick({
		slidesToShow: 3,
		arrows: false,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$(".burger_main").click(function () {
		$(this).toggleClass("burger_open");
		$(".nav__container").toggleClass("nav__container_open");
	});

	$(".aside-catalog__container").slick({
		arrows: false,
		rows: 2,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".main-slider").slick({
		prevArrow: "<button class=\"slick-prev\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-prev\"></use></svg></button>",
		nextArrow: "<button class=\"slick-next\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-next\"></use></svg></button>",
		dots: true
	});

	$(".main-tabs").slick({
		variableWidth: true,
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		prevArrow: "<button class=\"slick-prev\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-prev\"></use></svg></button>",
		nextArrow: "<button class=\"slick-next\"><svg class=\"svg-icon\" width=\"6\" height=\"11\"><use xlink:href=\"images/sprite/arrows.svg#svg-page-next\"></use></svg></button>",

		responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			arrows: true,
			centerMode: true
		}},{
		breakpoint: 640,
		settings: {
			slidesToShow: 2,
			variableWidth: false,
			arrows: true
		}},{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			variableWidth: false,
			arrows: true
		}}]
	});

	$(".main-tabs__link").click(function() {
		$(this).closest(".main-tabs").find(".main-tabs__item_active").removeClass("main-tabs__item_active");
		$(this).closest(".main-tabs__item").addClass("main-tabs__item_active");
		$(this).closest(".main-tabs__item").removeClass("active")
		$(this).tab('show');

		console.log($(this).closest(".main-tabs__item"))
		return false;
	});

	$(".news__container").slick({
		slidesToShow: 4,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3
			}
		},{
			breakpoint: 1012,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".like").click(function() {
		$(this).toggleClass("like_active");
	});

	$(".main-catalog-item-overlay__like").click(function() {
		$(this).closest(".main-catalog-item").find(".main-catalog-item__like").click();
	});

	(function($spinner) {
		var	$btn = $(".count__btn"),
				plus = function ($field, $val) { if(isNaN($val) || $val < 1) $val = 1; $field.val(++$val)} ,
				minus = function ($field, $val) { if(isNaN($val) || $val < 2) $val = 2; $field.val(--$val)} ;

		$btn.click(function () {
			var $field = $(this).closest(".count").find(".count__field"),
					$val = Number($field.val());

			if($(this).hasClass("count__btn_plus"))
				return plus($field, $val);
			else if($(this).hasClass("count__btn_minus"))
				return minus($field, $val);
		});

	})();

	$(".fancy").fancybox();
	$(".field_type_phone").mask("999-999-99-99");

	$(".collapse").on('shown.bs.collapse', function () {
		$(this).find(".slick-slider").slick('next');
	})
});
