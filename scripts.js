$().ready(function() {
		$('#comments-action').next().css('display','none');
		$('.entry-body img').each(function(){
			var $permalink = $(this).parents('.entry').find('.permalink').attr('href');
			$(this).wrap('<div class="pinme" style="' + $(this).attr('style') + '" />').after('<a href="http://pinterest.com/pin/create/button/?url=' + $permalink + '&media=' + $(this).attr('src') + '&description=' + $(this).attr('alt') + '" class="pin-it-button" count-layout="vertical">Pin It</a>');
		});
		$('.pinme').hover(function() {
		      $(this).children('iframe').css('display','block');
		}, function() {
		      $(this).children('iframe').css('display','none');
		});
		$('#banner').click(function(){
			window.location.href = 'http://www.sewingdaisies.com.au';
		});
});

(function() {
    window.PinIt = window.PinIt || { loaded:false };
    if (window.PinIt.loaded) return;
    window.PinIt.loaded = true;
    function async_load(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "http://assets.pinterest.com/js/pinit.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    }
    if (window.attachEvent)
        window.attachEvent("onload", async_load);
    else
        window.addEventListener("load", async_load, false);
})();