$(window).scroll(function(){
    if ($(window).scrollTop() >= 256) {
        $('.header-content').addClass('hidden');
        $('.site-name').addClass('fadein');
    }
    else {
        $('.header-content').removeClass('hidden');
        $('.site-name').removeClass('fadein');
    }
});
