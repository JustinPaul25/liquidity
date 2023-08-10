$(document).ready(function() {
    const navbar = $(".navbar");
    const windowHeight = $(window).height();
    const scrollThreshold = 0.1 * windowHeight; // 10% of window height
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollThreshold) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});