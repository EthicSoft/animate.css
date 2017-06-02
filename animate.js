$.fn.extend({
		animateCss:function (animationName,direction=null) {
			var className='animated ' + animationName;
			var self=$(this).removeClass(className).addClass(className);
			if(direction=="in"){
				self.show();
			}else if(direction=="out"){
				self.hide();
			}
			return self;
		},
});
