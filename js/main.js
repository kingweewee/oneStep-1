
/*This is the IE backup for drop down menu*/
$(function() {
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
	$('li').has('ul').mouseover(function(){
		$(this).children('ul').css('visibility','visible');
		}).mouseout(function(){
		$(this).children('ul').css('visibility','hidden');
		})
  }
}); 

/* This is for Cart rollout*/
/*On click animate position  of cart to center andd if click again retuner to noraml position */

$cart = $('.containerStickyCart'),
$cartClick = $('.noCart');

$cartClick.click(function(){
	
	if($cart.css('right') === '-300px')
	{
		$cart.animate( {'right':'0'}, 500);
	} else {
		$cart.animate( {'right':'-300px'}, 500);
	}
});

$optionsButton = $('.optionsButton'),
$optionsList = $('.sidebarOptions ul');

$optionsButton.click(function(e) {

	e.preventDefault();

  	$optionsList.toggle( "blind", 500 );
});