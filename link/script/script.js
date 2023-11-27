/*Эффект - из nav меню открыть список ссылок, переворот стрелки */
let rotateLine = 180;
$(".list_of_goods").click(
	function(){
		$(".catalog_of_goods").slideToggle();
		$(".catalog_of_goods").css("display","flex")
		rotateLine +=180;
		$(".nav_item_arrow").css({ transform: "rotate(" + rotateLine + "deg" })
	}
)

/*Автоматический слайдер в шапке сайта на 3 фотографии - переключение каждые 5 сек */
let sliderList = [
	'./link/img/header/slider_header/first_slide.png',
	'./link/img/header/slider_header/second_slide.png',
	'./link/img/header/slider_header/thirt_slide.png'
]

let sliderCounter = 0;

const intervalId = setInterval(function changeSliderPhoto() {
	if (sliderCounter >= -1 && sliderCounter < 2) {
		sliderCounter += 1;
		$('.header_slider_img').attr("src", sliderList[sliderCounter]);
		$(`.slider_indicator:eq(${sliderCounter})`).toggleClass('slider_indicator_orange');
		$(`.slider_indicator:not(:eq(${sliderCounter}))`).removeClass('slider_indicator_orange');
	}
	else return sliderCounter = -1;
}, 5000)
