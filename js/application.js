/*global document, Reveal, carousel*/
(function(document, Reveal, carousel){
    'use strict';

    var visited = {};
    Reveal.addEventListener('carousel', function(event){
        if (!visited[event.type]){
            visited[event.type] = true;
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

            carousel.show(languages, container, { timeout: 150 });
        }
    });
})(document, Reveal, carousel);
