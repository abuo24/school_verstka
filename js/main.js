$(document).ready(function() {
    jQuery('.counter').countTo({
        onComplete: function() {
            setTimeout(function(){
                jQuery('.counter').countTo('restart');
            }, 40555);
        }
    });
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '5000');
});