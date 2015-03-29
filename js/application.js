/*global document, Reveal, carousel*/
(function(document, Reveal, carousel){
    'use strict';

    Reveal.addEventListener('carousel', function(){
        var container = document.getElementById('carousel');

        carousel.show(['aap', 'noot', 'mies'], container);
    });
})(document, Reveal, carousel);
