/*
Author: luca.colombi@ethicsoft.it

Site: http://ethicsoft.it
*/

$.fn.extend({
		animateCss:function (animationName,direction=null) {
			var c='animated ' + animationName;
			var self=$(this).removeClass(c).addClass(c);
			if(direction=="in"){
				self.show();
			}else if(direction=="out"){
				self.hide();
			}
			return self;
		},
});
