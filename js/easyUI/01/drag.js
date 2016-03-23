$(function(){
	
	//拖动
	$('#box').draggable({
		
		//proxy : 'clone',
		proxy : function(source){
			var p = $('<div style="width:100px;height:100px;background:blue;"></div>')
			p.appendTo('#dropBox');
			return p;
			}
	});
	
	//放置
	$('#dropBox').droppable({
		accept : '#box',
	});
	
	/*
	 * 输出当前$().droppable的对象信息
	 * console.log($('#dropBox').droppable('options'));
	 */
	
	
});