var currentSlide;
var rand;
$(document).ready(function() {
    currentSlide = Math.floor((Math.random() * $('.carousel-item').length));
    rand = currentSlide;
    $('#carouselExampleIndicators').carousel(currentSlide);
    $('#carouselExampleIndicators').fadeIn('slow');
    setInterval(function() {
        while (rand == currentSlide) {
            rand = Math.floor((Math.random() * $('.carousel-item').length));
        }
        currentSlide = rand;
        $('#carouselExampleIndicators').carousel(rand);
    }, 2000);
});

$('.carousel-indicators li').each(function() {
    var $slideValue = $(this).attr('data-slide-to');
    if ($currentSlide == $slideValue) {
        $(this).addClass('active');
        $item.eq($slideValue).addClass('active');
    } else {
        $(this).removeClass('active');
        $item.eq($slideValue).removeClass('active');
    }
});

// carousel-item active