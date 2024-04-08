const cityList = [
	{ Id: 1, Name: 'Адыгейск' },
	{ Id: 2, Name: 'Майкоп' },
	{ Id: 3, Name: 'Горно-Алтайск' },
	{ Id: 4, Name: 'Углич' },
	{ Id: 5, Name: 'Ярославль' },
	{ Id: 6, Name: 'Нижний Новгород' },
	{ Id: 7, Name: 'Нижний Тагил' },
	{ Id: 8, Name: 'Нижневартовск' },
	{ Id: 9, Name: 'Нижнекамск' },
];


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
$('.header_form_item, .order_form_item adres_list').on('click', function (e) {
	//Открыть инпуты в формах
	let a = $(this).siblings('.item_body')
	a.slideToggle()

	//Открыть блок инпутов при доставке почтой или курьером
	let b = $(this).siblings('.courier_or_post_delivery')
	$(b).children('.item_body').slideToggle()

	//Открыть блок инпутов при доставке через постамат
	let p = $(this).siblings('.postamat_delivery')
	$(p).slideToggle()
	
})

//Делаем radio - checked - для блок с чекбоксом
$('.item_body').on('click', function(e){
	//ищем радио , очищаем от чекед а затем делаем чекед тому на кого клик
	let radioList = $(this).find('.radio_data')
	radioList.map((r) => $(radioList[r]).removeAttr('checked'))
	if (e.target.className == 'radio_data') {
		$(e.target).attr('checked','true')
		let e_target_parent = $(this).parent('.order_form_item')
		//ищем родителя для смены стиля
		let radioData = $(e_target_parent).find('.radio_data:checked')
		if (radioData) {
			$(e_target_parent).addClass('order_form_item_checked')
			$(e_target_parent).find('.checked_item_form').addClass('checked_item_form_checked')
		}
	}
})

//Обработка вариантов доставки товара

//HTML форм для адресов доставки
let courier_or_post = `<div class="courier_or_post_delivery">
	<div class="item_body">
		<input type="text" id="full_name" class="form_imput_adress full_name" placeholder="ФИО получателя" value="" />
	</div>
	<div class="item_body">
		<label for="tell" class="label_block">+7</label>
		<input type="tel" id="tell" name="tell" class="form_imput_tell phone" placeholder="Телефон" value="" />
	</div>
	<div class="item_body">
		<input type="text" id="street" name="street" class="form_imput_street street" placeholder="Улица" value="" />
	</div>
	<div class="item_body">
		<div class="item_body_flex">
			<input type="text" id="ind_city" name="ind_city" class="form_imput_street ind_city" placeholder="Индекс" value="" />
			<input type="text" id="home" name="home" class="form_imput_street home" placeholder="Дом" value="" />
			<input type="text" id="flat" name="flat" class="form_imput_street flat" placeholder="Квартира" value="" />
		</div>
	</div>
</div>`

let postamat = `<div class="postamat_delivery">
									<div class="street_seach_block">
										<input type="text" id="map_street" name="map_street" class="map_street" placeholder="Улица  или станция метро" value="" />
										<button class="seach_street_btn" value='1'>

										</button>
									</div>
									<img src="./link/img/order_detail/Mask Group.svg" alt="Карта" class="map_block">
								</div>`

// 1 Если Курьерская или почта то блок courier_or_post_delivery 
$('input[value=delivery_self] , input[value=post_rus]').on('click', function(e){
	let target = e.target
	if (target['checked'] == true){
		$('.adres_list').children('.courier_or_post_delivery , .postamat_delivery').empty()
		$('.adres_list').append(
			courier_or_post
		)
	}
})

// 2 Если постамат то блок postamat_delivery 
$('input[value=postamat]').on('click', function (e) {
	let target = e.target
	if (target['checked'] == true) {
		$('.adres_list').children('.courier_or_post_delivery , .postamat_delivery').empty()
		$('.adres_list').append(
			postamat
		)
	}
})


//Обработка inputa с выбром (город улица и тд) и меняем стиль для родителя
//Настройки для выбора города из инпута
$('#city').autocomplete({
	dataSource: cityList,
	valueProperty: 'Id',
	textProperty: 'Name',
	allowCustomValue: true
});

$('.form_imput_order').on('mouseenter, mouseleave',function(e){
	let input_elem = $(e.target)
	let input_elem_len = input_elem.val().length
	if (input_elem_len >0){
	$(e.target).closest('.order_form_item').addClass('order_form_item_checked').find('.checked_item_form').addClass('checked_item_form_checked')
	}
	else {
		$(e.target).closest('.order_form_item').removeClass('order_form_item_checked').find('.checked_item_form').removeClass('checked_item_form_checked')
	}
})

//Блок с инпутами адрес доставки - стилизация если все инпуты отмечены
$('.adres_list').mouseenter( function(e){

	let list_input_elem = []
	let input_list = $('.adres_list').find(':input')
	for (let input_item = 0; input_item < input_list.length; input_item++){
		let elem = $(input_list[input_item])
		
		list_input_elem.push(elem.val().length)
	}
	if (list_input_elem.includes(0) == false && list_input_elem.length > 0) {
		$('.adres_list').closest('.order_form_item').addClass('order_form_item_checked').find('.checked_item_form').addClass('checked_item_form_checked')
	}
	else if (list_input_elem.includes(0) == true ) {
		$('.adres_list').closest('.order_form_item').removeClass('order_form_item_checked').find('.checked_item_form').removeClass('checked_item_form_checked')
	}
})

/*Часть формы с формой оплаты и табсами */

$('input[name="pay_type"]').on('click', function(e){
	let tabs_list = $('.tabs_block').children()
	let e_data = $(e.target).attr("data-tabs-btn")
	for (let tab=0; tab < tabs_list.length; tab++) {
		if (e_data === $(tabs_list[tab]).attr('data-tabs')) {
			$(tabs_list[tab]).show()
		}
		else if (e_data != $(tabs_list[tab]).attr('data-tabs')) {
			$(tabs_list[tab]).hide()
		}
	}
})

//4 инпута номер карты
$('.input_mask_number').click(function(e){
	$(this).children('.cart_p_14').css('display','none')
	$(this).children('.cart_number').css('display', 'block')
})
//2 инпут - дата карты
$('.input_mask_date').click(function (e) {
	$(this).children('.cart_p_14').css('display', 'none')
	$(this).children('.cart_date').css('display', 'block')
	$(this).children('.between_span').css('display', 'block')
})

/*Блок вариант оплаты - смена стиля если все данные заполнены */
$('#payment_type').on('click keydown', function(e){
	let classStyleList = ['radio_data pay_data',]
	let variants_list = $('.variant_pay').find(':input[name=pay_type]')
	//console.log(variants_list,'Список вариантов', typeof(variants_list))
	if (classStyleList.includes(e.target.className)) {
		for (let i=0; i < variants_list.length; i++){
			if (variants_list[i]['value'] ==  $(e.target).val()) {
				$(e.target).attr('checked', 'true')
			}
			
		}
	}
	if ($('#pay_type_cash').attr('checked')){
		$('#payment_type').addClass('order_form_item_checked')
		$('#payment_type').find('.checked_item_form ').addClass('checked_item_form_checked')
	}
	
	else if ($('#pay_type_bank_cart').attr('checked')){
		let input_list = $('.bank_cart_tabs').find('input')
		$($('.bank_cart_tabs').find('input')).on('keydown',function()
		{
		let input_list_len = []
		input_list.map((e)=> {
			input_list_len.push($(input_list[e]).val().length)
		})
		
		if (input_list_len.includes(0) == false){
			$('#payment_type').addClass('order_form_item_checked')
			$('#payment_type').find('.checked_item_form').addClass('checked_item_form_checked')
		}
		else if (input_list_len.includes(0) == true) {
			$('#payment_type').removeClass('order_form_item_checked')
			$('#payment_type').find('.checked_item_form').removeClass('checked_item_form_checked')
		}
		})
		}
	else if ($('#pay_type_tinkoff').attr('checked')){
		$('#tinkoff_cart_tab').children('input').on('keydown', function(e){
		if ($('#tinkoff_cart_tab').children('input').val().length > 0) {
			$('#payment_type').addClass('order_form_item_checked')
			$('#payment_type').find('.checked_item_form').addClass('checked_item_form_checked')
		}
		else if ($('#tinkoff_cart_tab').children('input').val().length < 1) {
			$('#payment_type').removeClass('order_form_item_checked')
			$('#payment_type').find('.checked_item_form').removeClass('checked_item_form_checked')
		}
		})
	}
})
$('.take_order_form').on('click', function(){
	if ($('.take_order_form').find('.order_form_item_checked').length == 5 ){
		$('.take_order_form').find('.order_btn_orange').removeAttr('disabled')
	}
	else {
		$('.take_order_form').find('.order_btn_orange').attr('disabled' , true)
	}
})

