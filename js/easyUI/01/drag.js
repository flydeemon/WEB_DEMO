$(function(){
	
	//拖动
	$('#box').draggable();
	
	//放置
	$('#dropBox').droppable({
		accept : '#box',
	});
	
	console.log($('#dropBox').droppable('options'));
	
});