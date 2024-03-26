/*Эффект - из nav меню открыть список ссылок, переворот стрелки - открыть список категорий в мобильном меню */
let rotateLine = 180;
let statusMobileMenuList = [
	'close',
	'open',
];
let statusMobileMenu = statusMobileMenuList[0];
$(".list_of_goods").click(
	
	function(){
		if (statusMobileMenu != 'open'){
			$('.list_of_category').css('display','block');
			rotateLine +=180;
			$(".nav_item_arrow").css({ transform: "rotate(" + rotateLine + "deg" })
			statusMobileMenu = statusMobileMenuList[1];
		}
		else if (statusMobileMenu != 'close') {
			$('.list_of_category').css('display', 'none');
			rotateLine += 180;
			$(".nav_item_arrow").css({ transform: "rotate(" + rotateLine + "deg" })
			statusMobileMenu = statusMobileMenuList[0];
		}
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


/*Загрузка и смена img - кнопка ссылка на корзину при смене ширины экрана */
$(document).ready(function () {
	if (window.innerWidth > 576) {
	$('.cart_img').attr('src','./link/img/header/cart.svg')}
	else if (window.innerWidth <= 576) {
		$('.cart_img').attr('src', './link/img/header/cart_white.svg')
	}
	})

let imgSelect = [
	'./link/img/header/cart.svg',
	'./link/img/header/cart_white.svg',
];

$(window).resize(function (){
	if (window.innerWidth > 576) {
		$('.cart_img').attr('src', './link/img/header/cart.svg')
	}
	else if (window.innerWidth <= 576) {
		$('.cart_img').attr('src', './link/img/header/cart_white.svg')
	}
})

/*Открыть закрыть мобильное меню*/

	let statusMenuList = ['close','open'];
	let statusMenu = statusMenuList[0];

	let statusFormList = ['close', 'open'];
	let statusForm = statusFormList[0];

$('.nav_menu').on('click', function openMenu(e){
		//открываем
	if (statusMenu != 'open'){
		statusMenu = statusMenuList[1];
		
		$('.block_logo').css('padding-top',60+'px');
		$('.nav_menu_img').attr('src','./link/img/header/ic-close-menu.svg');
		$('.photo_slider_block').css('visibility', 'hidden');
		$('.nav_block_data').css('visibility', 'visible');

		//По умолчанию скрываем форму поиска - даже если она не открыта и ставим статус - закрыто
		statusForm = statusFormList[0];
		$('.form_seach_site').css('visibility', 'hidden')
	}
	//закрываем
	else if ( statusMenu == 'open') {
		statusMenu = statusMenuList[0];
		
		$('.block_logo').css('padding-top', 11 + 'px');
		$('.nav_menu_img').attr('src', './link/img/header/nav_menu_open.svg');
		$('.photo_slider_block').css('visibility', 'visible');
		$('.nav_block_data').css('visibility', 'hidden')

		//По умолчанию скрываем форму поиска - даже если она не открыта и ставим статус - закрыто
		statusForm = statusFormList[0];
		$('.form_seach_site').css('visibility', 'hidden')
	}
})


/*Открываем форму поиска - мобильный дисплей - data_seach_btn_2 */
	
$(".data_seach_btn_2").on('click', function(e){
	if (statusForm != 'open') {
		statusForm = statusFormList[1];
		$('.block_logo').css('padding-top', 11 + 'px');
		$('.photo_slider_block').css('visibility', 'hidden')
		$('.form_seach_site').css('visibility', 'visible')

		//По умолчанию скрываем мобильное меню - даже если она не открыта и ставим статус - закрыто
		statusMenu = statusMenuList[0];
		$('.nav_block_data').css('visibility', 'hidden')
	}
	else if (statusForm == 'open') {
		statusForm = statusFormList[0];
		$('.form_seach_site').css('visibility', 'hidden')
		$('.nav_menu_img').attr('src', './link/img/header/nav_menu_open.svg');
		$('.photo_slider_block').css('visibility', 'visible');

		//По умолчанию скрываем мобильное меню - даже если она не открыта и ставим статус - закрыто
		statusMenu = statusMenuList[0];
		$('.nav_block_data').css('visibility', 'hidden')
	}
});
//Закрываем форму по кнопке отмена в форме
$('.btn_close_form').on('click', function(e){
	if (statusForm == 'open') {
		statusForm = statusFormList[0];
		$('.form_seach_site').css('visibility', 'hidden')
		$('.nav_menu_img').attr('src', './link/img/header/nav_menu_open.svg');
		$('.photo_slider_block').css('visibility', 'visible');

		//По умолчанию скрываем мобильное меню - даже если она не открыта и ставим статус - закрыто
		statusMenu = statusMenuList[0];
		$('.nav_block_data').css('visibility', 'hidden')
	}
})

/*Открываем форму поиска - desctop дисплей - data_seach_btn - через toggleclass */
$('.data_seach_btn').on('click', function(e){
	$('.form_seach_site').toggleClass('form_seach_site_desc');
	$('.form_seach').toggleClass('form_seach_desc');
	$('.form_header').toggleClass('form_header_desc');
	$('.form_seach_buttons').toggleClass('form_seach_buttons_desc');
	$('.btn_close_form').toggleClass('btn_close_form_desc');
	$('.seach').toggleClass('seach_desc');
	$('main').toggleClass('main_opasity')
})


/*Скрипты для страницы - Catalog of Goods------------------------*/
//Открыть/скрыть панель меню - catalog_of_goods

let listCatalogVisible = ['close', 'open',];
let catalogVisibleStatus = listCatalogVisible[0];

$(".nav_item_btn_big").on('click', function(e){
	$('.nav_item_arrow_big').css('rotate','+=180deg')
	if (catalogVisibleStatus != 'open'){
		catalogVisibleStatus = listCatalogVisible[1]
		$('.catalog_of_goods').css('display','flex');
		$('main').addClass('main_opasity')
	}
	else if (catalogVisibleStatus == 'open') {
		catalogVisibleStatus = listCatalogVisible[0]
		$('.catalog_of_goods').css('display', 'none')
		$('main').removeClass('main_opasity')
	}
})

/*Загрузка списка коллекций в фильтрации товаров (6 колекций) */

let list_collection = [
	'Alfi', 'Archi', 'Aristo', 'Astin', 'Berti','Boni',
	'Brueno','Verona','Oreo'
];//Список коллекций
let list_collection_len = list_collection.length;

//Загружаем 

$(document).ready(function () {
	//Мапим список из 6 коллекций в инпуты чекбоксы
	list_collection.slice(0,6).map((e)=> {
		
		$('.collection_goods_checkbox').append(
			`<div class="checkbox_container">
				<input type="checkbox" name=${e} id="collection_name1_${e}">
				<label for="collection_name1_${e}" class="p16_Sans">${e}</label>
			</div>`
		)
	});
	//Кнопку показать все коллекции + кол-во всех коллекций
	$('.show_all_collection').text(`Все коллекции ( ${list_collection_len} )`)
});

//Событие клика на кнопку - отображаем все коллекции
$('.show_all_collection').on('click', function(e){
	list_collection.slice(6).map((e) => {
		$('.collection_goods_checkbox').append(
			`<div class="checkbox_container">
				<input type="checkbox" name=${e} id="collection_name1_${e}">
				<label for="collection_name1_${e}" class="p16_Sans">${e}</label>
			</div>`
		)
	});
	$('.show_all_collection').css('display','none');
	$('.show_six_collection').css('display', 'block');
	$('.show_six_collection').text(`Скрыть часть коллекций`)
})

//Событие клика на кнопку - убираем лишние коллекции - делаем список из 6
$('.show_six_collection').on('click', function (e) {
	$('.collection_goods_checkbox').empty();
	$('.collection_goods_checkbox').append(`<p class="p16_bold">Коллекция</p>`)
	list_collection.slice(0,6).map((e) => {
		$('.collection_goods_checkbox').append(
			`<div class="checkbox_container">
				<input type="checkbox" name=${e} id="collection_name1_${e}">
				<label for="collection_name1_${e}" class="p16_Sans">${e}</label>
			</div>`
		)
	});

	$('.show_all_collection').css('display', 'block');
	$('.show_six_collection').css('display', 'none');
})

/*Открыть/закрыть - benefits_list - описание преимущества */

const rotation = (x) => {
	$(x).children('.benefits_vector').css({ 'transform': 'rotate(' + 180 + 'deg)' })
}
$('.benefits_list').on('click', function(){
	console.log(`${this}`)
	$(this).children('.benefits_description').slideToggle()
	$(this).children('.benefits_vector').toggleClass('rotated')
})

//Счетчик кол-ва товаров + или -

//минус
$('.product_counter_minus').on('click', function (e) {
	let elem = e.target;
	let nextElem = elem.nextElementSibling;
	let nextElemVal = nextElem.innerText;
	if (Number(nextElemVal)>1){
		let counter = Number(nextElemVal) - 1 ;
		nextElem.innerText = counter
	}
})

//плюс
$('.product_counter_plus').on('click', function (e) {
	let elem = e.target;
	let prevElem = elem.previousElementSibling;
	let prevElemVal = prevElem.innerText;
	let counter = Number(prevElemVal) + 1;
	prevElem.innerText = counter
})


/*Кнопка  show_cupon_form - показать форму для промокода */
let promo_code = 'ORANGELOVE'

//Отобразить или скрыть форму
$('.show_cupon_form').on('click', function(){
	$(".cupon_form_block").toggle("easing");
})

//Добавляем стили к форме - форма активная
$('.cupon_form').bind('click blur',function(e){
	if (e.type == 'click' || e.type == 'blur' && e.target.id == 'promo_code') {
		$('.promo_code_disable').addClass('promo_code_active');
		$('.cupon_form').addClass("cupon_form_active");
		$('.send_promo_code').addClass('send_promo_code_active').attr('disabled', false)

	}
})
//Убираем активные стили у формы по условию если есть элемент с id = promo_code на страница, т.к. тогда ошибки на других страницах при отсутствии элемента
let p_c = $('#promo_code')
if (p_c==true){
	$('*').bind('click', function (e) {
			let promo_code_text = $('#promo_code').val()
			if (promo_code_text.length == 0 && e.target.id != 'promo_code') {
				$('.promo_code_disable').removeClass('promo_code_active');
				$('.cupon_form').removeClass("cupon_form_active");
				$('.send_promo_code').removeClass('send_promo_code_active').attr('disabled', true)
		}
	})
}

//Обработчик промокода
$('.send_promo_code ').on('click', function(e){
	
	let code_val = $('#promo_code').val()
	console.log(code_val)
	if (code_val == promo_code) {
		$('.message_block_promo_code').empty()
		$('.message_block_promo_code').append("<p class='message_success_promo'>У вас скидка 5 120 ₽ (20%)</p>")
	}
	else if (code_val != promo_code) {
		$('.message_block_promo_code').empty()
		$('.message_block_promo_code').append("<p class='message_warning_promo'>Промо-код недействителен </p>")
	}
})

//Стилизация инпут - фотография пользователя - редактирование пользователя
$('.input-file input[type=file]').on('change', function () {
	let file = this.files[0];
	$(this).closest('.input-file').find('.input-file-text').html(file.name);
});

/*Работа с формой заказа */

//открываем-скрываем  инпут (поле, кнопки, радио или чек боксы)
$('.header_form_item').on('click', function (e) {
	let a = $(this).siblings('.item_body')
	a.slideToggle()
})

//Делаем radio - checked - для блок с чекбоксом
$('.item_body').on('click', function(e){
	//ищем радио , очищаем от чекед а затем делаем чекед тому на кого клик
	let radioList = $(this).find('.radio_data')
	radioList.map((r) => $(radioList[r]).removeAttr('checked'))
	if (e.target.className == 'radio_data') {
		$(e.target).attr('checked','true')
	}
	//ищем родителя для смены стиля
	let e_target_parent = $(this).parent('.order_form_item')
	let radioData = $(e_target_parent).find('.radio_data:checked')
	if (radioData) {
		$(e_target_parent).addClass('order_form_item_checked')
		$(e_target_parent).find('.checked_item_form').addClass('checked_item_form_checked')
	}

})

