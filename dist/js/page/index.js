/**
 * Created by luoxinfang on 13-12-6.
 */"use strict";define(function(require){var e=require("underscore"),t=require("../module/player"),n=require("../module/page"),r=require("class"),i=new n,s=require("../module/navbar"),o={rotateDeg:45,activeIndex:0,$main:$("#main"),$list:$("#menu .list"),$logo:$("#menu .logo"),$items:$("#menu .list .item"),show:function(){o.$list.toggleClass("show")},rotateToTop:function(){var e=o.$items.index(this),t=o.activeIndex-e;e==o.lastIndex&&o.activeIndex==0?t=1:e==0&&o.activeIndex==o.lastIndex&&(t=-1),o.activeIndex=e,o.rotateDeg+=t*90,o.$list.css({transform:"rotate("+o.rotateDeg+"deg)"}),$(this).addClass("active").siblings().removeClass("active"),o.distributeLink(e)},distributeLink:function(e){var n=this;switch(e){case 1:require.async("../../inc/register.html",function(e){i.showPage(e,"#register")});break;case 2:require.async("../../inc/login.html",function(e){i.showPage(e,"#login")});break;case 3:require.async("../../inc/login.html",function(e){i.showPage(e,"#settings")});break;default:require.async("../../inc/hall.html",function(e){i.showPage(e,"#hall"),new t})}},bindEvent:function(){this.$logo.on("click",this.show),this.$items.on("click",this.rotateToTop)},init:function(){this.lastIndex=this.$items.length-1,this.bindEvent(),this.distributeLink()}};o.init(),new s("#nav"),setTimeout(function(){},200)});