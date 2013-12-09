/**
 * Created by luoxinfang on 13-12-9.
 */
var deg = 45, list = $('.menu-list').children();
$.fn.rotateTop = function () {
  var degArr = [45, -45, 135, -135];
  var index = $('.menu-list .item').index($(this));
  $('.menu-list').css('WebkitTransform', 'rotate(' + degArr[index] + 'deg)');
};
$('.menu .logo').on('click', function () {
  $('.menu-list').toggleClass('show');
});
$('.menu-list .item').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
  $(this).rotateTop();
});
