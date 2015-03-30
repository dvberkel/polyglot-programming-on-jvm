/*global document, Reveal, carousel*/
(function(document, Reveal, carousel){
    'use strict';

    Reveal.addEventListener('carousel', function(){
        var container = document.getElementById('carousel');
        var languages = [
            'Ada',
            'BBx',
            'C',
            'CFML',
            'Clojure',
            'Common Lisp',
            'Groovy',
            'JavaScript',
            'Oberon',
            'Oxygene',
            'Pascal',
            'Perl',
            'Prolog',
            'Python',
            'REXX',
            'Ruby',
            'Scala',
            'Scheme',
            'Tcl',
        ];

        carousel.show(languages, container);
    });
})(document, Reveal, carousel);
