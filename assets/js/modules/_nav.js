var $nav_main = $('.nav-main'),
    $nav_trigger = $('.nav-trigger');

$nav_trigger.click( function() {
  console.log('clicked!');
  $nav_main.toggleClass('active');
  $nav_trigger.toggleClass('active');
  return false;
});
