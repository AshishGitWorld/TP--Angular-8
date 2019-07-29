$("#continue").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top - ($("#header").height() + 37)
    }, 2000);
});