
$ (document).ready(function(){
$ ('.slider').slick({
slidesToShow: 2,
  slidesToScroll: 2,
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});

	});

$ (document).ready(function(){
	$('.header__burger').click(function(event){
$('.header__burger, .header__menu').toggleClass('active')
$('body').toggleClass('stop')
	});
});



$ (document).ready(function(){
	$('.slick-prev').click(function(event){
$('.slick-prev').toggleClass('act')
	});
});

$ (document).ready(function(){
	$('.slick-next').click(function(event){
$('.slick-next').toggleClass('activ')
	});
});




  $('#text_1').circleType({radius:135});