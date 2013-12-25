/**
 * Created by luoxinfang on 13-12-9.
 */
var deg = 45, list = $('.menu-list').children();
$.fn.rotateTop = function () {
  var list = $('.menu-list .item');
  var lastIndex = list.length - 1;
  var index = list.index($(this));
  var activeMenu = $('.menu-list').find('.active');
  var activeIndex = list.index(activeMenu);
  console.log(index, '-', activeIndex);
  var gap = activeIndex - index;
  if (index == lastIndex && activeIndex == 0) {
    gap = 1
  } else if (index == 0 && activeIndex == lastIndex) {
    gap = -1;
  }
  deg = deg + gap * 90;
  $('.menu-list').css('WebkitTransform', 'rotate(' + deg + 'deg)');

};
/*$('.menu-list .item').on('click', function () {
  $(this).rotateTop();
  $(this).addClass('active').siblings().removeClass('active');
});*/

var Menu = {
  rotateDeg: 45,
  activeIndex: 0,
  $list: $('.menu-list'),
  $logo: $('.menu .logo'),
  $items: $('.menu-list .item'),
  show: function () {
    Menu.$list.toggleClass('show');
  },
  rotateToTop: function () {
    var index = Menu.$items.index(this);
    var gap = Menu.activeIndex - index;
    if (index == Menu.lastIndex && Menu.activeIndex == 0) {
      gap = 1
    } else if (index == 0 && Menu.activeIndex == Menu.lastIndex) {
      gap = -1;
    }
    Menu.activeIndex=index;
    Menu.rotateDeg += gap * 90;
    Menu.$list.css('WebkitTransform', 'rotate(' + Menu.rotateDeg + 'deg)');
    $(this).addClass('active').siblings().removeClass('active');
  },
  init: function () {
    this.lastIndex = this.$items.length - 1;
    this.$logo.on('click', this.show);
    this.$items.on('click', this.rotateToTop);
  }
};
Menu.init();