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

