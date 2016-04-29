$(function() {
    $('.search_form').hide();
	$('#search_tool_off').hide();    
    $('#search_tool_on').click(function(e) {
	$('#search_tool_on').hide();
	$('#search_tool_off').show();
	$('.search_form').show();
    });
    $('#search_tool_off').click(function(e) {
	$('#search_tool_on').show();
	$('#search_tool_off').hide();
	$('.search_form').hide();
    });
});

