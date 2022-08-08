(function (){
	var storage = [];

	function addEvent(element,event,func){
		if(element.attachEvent){
			element.attachEvent('on' + event, func);
		}else{
			element.addEventListener(event,func,true);
		}
	}
	function init(){
		var elements = document.getElementsByTagName('div'),
			elementsLength = elements.length;

		for (var i = 0; i < elementsLength; i++) {
			if(elements[i].className == 'dragablebox'){
				addEvent(elements[i],'mousedown',function(e){
					console.log(e);
					var s = storage;
					//console.log('hello mousedown');
					s.target = e.target || event.scrElement;
					s.offsetX = e.clientX - s.target.offsetLeft;
					s.offsetY = e.clientY - s.target.offsetTop;
					//console.log(s.offsetX + " | " + s.offsetY);
				});

				addEvent(document,'mousemove',function(e){
					var target = storage.target;
						//console.log('hello mousemove');
					if(target){
						target.style.top = e.clientY - storage.offsetY + 'px';
						target.style.left  = e.clientX - storage.offsetX + 'px';
					}
				});
				addEvent(elements[i],'mouseup',function(){
					storage = {};
				});
			}
		}
	}
	init();
})();