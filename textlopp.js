AFRAME.registerComponent ('text-visible', {
	schema: {
		target: {type: 'selector', default: ''}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		var arr = ["Hello welcome to our virtual experience.","We are here to guide you in this journey","WE hope that you enjoy this awesome journey","You can move forward to explore more"];
		var arrLen = arr.length;
		var i = 0;
		
		el.addEventListener('mouseenter', function () {
			
			
			if (data.target) {
				data.target.setAttribute('visible',true);
				 var setInter = setInterval(function(){
    				
    				data.target.setAttribute('text','value',arr[i]);
    				i === arrLen ? clearInterval(setInter) : i++;
				 }, 1000);
			} 
				
			 			
		});
	}
});
AFRAME.registerComponent ('text-visiblenew', {
	schema: {
		target: {type: 'selector', default: ''}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		var arr = ["Lets start boxing","Its time to play now","WE hope that you enjoy this awesome journey","You can move forward to explore more"];
		var arrLen = arr.length;
		var i = 0;
		
		el.addEventListener('mouseenter', function () {
			
			
			if (data.target) {
				data.target.setAttribute('visible',true);
				 var setInter = setInterval(function(){
    				
    				data.target.setAttribute('text','value',arr[i]);
    				i === arrLen ? clearInterval(setInter) : i++;
				 }, 1000);
			} 
				
			 			
		});
	}
});
