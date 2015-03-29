/*global window, setTimeout*/
(function($){
    'use strict';

    var Observable = function(){
        this.observers = {};
    };
    Observable.prototype.on = function(event, observer){
        (this.observers[event] = this.observers[event] || []).push(observer);
    };
    Observable.prototype.emit = function(event){
        (this.observers[event] || []).forEach(function(observer){
            observer.call(undefined);
        });
    };

    var Model = function(words){
        Observable.call(this);
        this.words = words;
        this.index = 0;
    };
    Model.prototype = Object.create(Observable.prototype);
    Model.prototype.constructor = Model;
    Model.prototype.next = function(){
        this.index++;
        if (this.index >= this.words.length) { this.index = 0; }
        this.emit('next');
    };
    Model.prototype.word = function(){
        return this.words[this.index];
    };

    var View = function(model, container){
        this.model = model;
        this.container = container;
        this.model.on('next', this.update.bind(this));
        this.update();
    };
    View.prototype.update = function(){
        this.container.innerHTML = this.model.word();
    };

    var repeat = function(action){
        return {
            'every': function(timeout){
                var every = function(){
                    action();
                    setTimeout(every, timeout);
                };
                every();
            }
        };
    };

    $.show = function(words, container, options){
        options = options || {};
        var timeout = options.timeout || 500;
        var model = new Model(words);
        new View(model, container);
        repeat(model.next.bind(model)).every(timeout);
    };
})(window.carousel = window.carousel || {});
