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

    $(".btn_sample").click(function () {
        var i = $(".btn_sample").index(this)
        var p = $(".content").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });
 
    //ページ上部へ戻る
    $(".btn_top").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
        return false;
    });
    $(".btn_bottom").click(function () {
        $('html,body').animate({ scrollTop: $(document).height() }, 1500);
        return false;
    });
});

