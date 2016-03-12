//封装移动元素的方法
function doMove(elem, attr, dire, target) {
	
	clearInterval(elem.timer); //防止用户重复点击

	elem.timer = window.setInterval(function() {
		//获取步长
		var speed = parseInt(getStyle(elem, attr)) + dire;

		//判断向前还是向后移动
		if ((speed < target && dire < 0) || (speed > target && dire > 0))
			speed = target;

		elem.style[attr] = speed + 'px';

		if (speed == target){
			clearInterval(elem.timer);
		}
	}, 30);
}

//兼容IE
function getStyle(elem, attr) {
	return elem.currentStyle ? elem.currentStyle[attr] : getComputedStyle(elem)[attr];
}
