define(function(require){require("jquery"),require("lodash");var a={keyCode:{},setKeyStatus:function(a,b){this.keyCode[a]=b,console.log(a,b)}};return a.listen=function(b,c){var d=b||this,e=[];e.push(c),$(d).on("keydown",function(b){_.indexOf(e,b.keyCode)&&a.setKeyStatus(b.keyCode,!0)}),$(d).on("keyup",function(b){_.indexOf(e,b.keyCode)&&a.setKeyStatus(b.keyCode,!1)})},a.isDown=function(a){for(var b=0,c=a.length;c>b;b++)if(!this.keyCode[a[b]])return!1;return!0},a.where=function(b,c,d){var e=$(b),f=_.last(c);if(e&&c&&"function"==typeof d){var g=_.without(c,f);this.listen(b,g),e.on("keydown",function(b){b.keyCode==f&&a.isDown(g)&&d()})}},a});