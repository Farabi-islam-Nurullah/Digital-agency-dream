$(document).ready(function() {


    // nice scroll bar

    $(function() {
        $("body").niceScroll({});
    });

    $(function() {
        var navscroll = $('.nav-link');
        navscroll.on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            $('html, body').animate({ scrollTop: top }, 500)
        });
    });




});