// сворачивание шапки и меню
function headerCollapse() {
	$('.menu__toggle').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('page_header_collapse');

		setTimeout(function() {
			$(window).resize();
		}, 500);
	})
}



// сворачивание шапки и меню
function sideMenuCollapse() {
	$('.side-menu__toggle').click(function(e) {
		e.preventDefault();
		$('.side-menu').toggleClass('side-menu_collapse');
	})
}



// переключение активных блоов в меню
function activateMenuItem() {
	$('.menu-block__title, .menu-block__tail').click(function(e) {
		e.preventDefault();
		$(this)
			.closest('.menu-block')
			.addClass('menu-block_active')
			.siblings()
			.removeClass('menu-block_active');
	})
}

// открытие окна настроек
function settingsWindow() {

	$('.timeplan__settings')
		.hide()
		.click(function(e) {
			e.stopPropagation();
		});

	$('.timeplan__btn').click(function(e) {

		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
			y = $this.offset().top,
			x = $this.offset().left,
			$settings = $this.find('.timeplan__settings');

		$settings.css({
			'top': y + 20,
			'left': x
		});

		$settings.toggle();

	});

	$(document).click(function(e) {
		$('.timeplan__settings').hide();
	})
}




// задание высоты для прокручиваемой области планирования дня
function timePlansOffset() {
	var $el = $('.timeplan__inner');
	if (!$el.length) return;
	var top = $el.offset().top;
	$el.css('height', $(window).height() - top - 88);
}

// задание высоты для контейнера календаря
function calendarResize() {
	var $el = $('.calendar-container');
	if (!$el.length) return;
	var top = $el.offset().top;
	$el.css('height', $(window).height() - top - 88);
}




// события при загрузке DOM

$(function() {
	headerCollapse();
	sideMenuCollapse();
	activateMenuItem();
	settingsWindow();
	timePlansOffset();
	calendarResize();
});




// события при загрузке всех ресурсов
$(window).load(function() {

});




// события при изменении размеров окна
$(window).resize(function() {
	timePlansOffset();
	calendarResize()
});