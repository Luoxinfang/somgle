define(function(require,a,b){var c=require("class"),d=require("./page"),e=new d,f=c.extend({init:function(a){this.$el=$(a),this.bindEvent()},render:function(a){a.addClass("active").siblings().removeClass("active")},distributeLink:function(a){var b=$(a.target),c=b.data("page");switch(this.render(b),c){case"my-space":var d=require("../../inc/my_space.html");e.showPage(d,"my_space");{require("bootstrap")}}},bindEvent:function(){var a=this;this.$el.on("click","li",function(b){a.distributeLink.call(a,b)})}});b.exports=f});