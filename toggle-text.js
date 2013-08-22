(function($){ 
  	$.fn.toggleText = function(a,b) {
  		return this.each(function() {
  			var on = false;
  			var el = $(this);
  			el.text(a);
  			el.click(function(){
  				var txt = on == true ? a : b;
	            el.text(txt);
	            on = !on;
  			});
    	});
	};
})(window.jQuery);
