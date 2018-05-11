$(window).scroll(function(){
    if ($(window).scrollTop() >= 256) {
        $('.header-content').addClass('fadeout');
        $('.site-name').addClass('fadein');
    }
    else {
        $('.header-content').removeClass('fadeout');
        $('.site-name').removeClass('fadein');
    }
});
