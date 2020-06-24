$("button").on("click",function(){
	$("#input").slideToggle(300);
});
$("#input").on("mouseenter",function(){
	$(this).addClass("input");
});
$("#input").on("mouseleave",function(){
	$(this).removeClass("input");
});
$("input").on("keypress",function(e){
	if(e.which===13){
		$("ul").append("<li><span id='trash'><i class='fa fa-trash'></i></span> "+$("input").val()+"</li>");
		$("input").val("");
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});