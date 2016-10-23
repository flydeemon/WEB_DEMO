//封装一个事件对象兼容IE8以下
var eventUtil = {

	//获取事件名
	getEvent: function(event) {
		return event || window.event;
	},

	//获取事件类型
	getType: function(event) {
		return event.type;
	},

	//获取事件目标
	getTarget: function(event) {
		return event.target || event.srcElement;
	},

	//绑定一个事件
	setBindEvent: function(obj, type, handle) {
		if (obj.addEventListener) {
			obj.addEventListener(type, handle, false);
		} else if (obj.attachEvent) {
			obj.attachEvent('on' + type, function() {
				handle.call(obj);
			});
		} else {
			obj['on' + type] = handle;
		}
	},

	//删除一个事件
	setRemoveEvent: function(obj, type, handle) {
		if (obj.removeEventListener) {
			obj.removeEventListener(type, handle, false);
		} else if (obj.detachEvent) {
			obj.detachEvent('on' + type, handle);
		} else {
			obj['on' + type] = null;
		}
	},

	//取消事件冒泡
	setCancelBubble: function(event) {
		if (event.setPropagation) {
			event.setPropagation();
		} else {
			event.cancelBubble();
		}
	},

	//取消事件默认处理
	setcancelDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnVaule = true;
		}
	}

};