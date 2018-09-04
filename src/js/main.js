$(function() {
	$('.main-slider .bx-slider ul, .catalog .bx-slider ul').bxSlider({
		pager: false,
		controls: true,
    responsive: true
	});
  $('.product-inner .bx-slider ul, .event .bx-slider ul').bxSlider({
    pager: true,
    controls: true,
    responsive: true
  });

	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

  $('.toggle').click(function(){
    $(this).toggleClass('open');
    $('.main-menu').toggle();
  });

  var totalArray = [];

  $('td.views-field-quantity').each(function(index, item) {
    // totalArray.length = 0;
    totalArray.push(parseInt($(this).text()));
  })

  const sum = totalArray.reduce(function(result,item) {
   return result + item;
  }, 0);

  $('td.views-field-quantity').text(sum);
  $('td.views-field-quantity').first().show();



  

});


