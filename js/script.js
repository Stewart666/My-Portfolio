// Add custom JavaScript or jQuery functions here
$(document).ready(function() {
    // Example: Smooth scrolling to sections
    $('a.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

