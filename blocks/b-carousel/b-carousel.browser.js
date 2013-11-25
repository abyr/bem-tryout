modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    var root = this;

    DOM.decl('b-carousel', {
        onSetMod: {
            'js': {
                'inited': function() {
                    this._setup();
                    this._setupControls();
                }
            },
            'ready': function() {
                console.log('ready');
                if (this._autostart) {
                    setTimeout(function(ctx){
                        ctx._togglePlay();
                    }, this._delaySlideMs, this);
                }
            }
        },

        _started: false,

        _autostart: false,

        _delaySlideMs: 2000,

        _currentItemIndex: 0,

        _itemWidth: 0, // px
        _slideWidth: 0, // px

        _itemsOnSlide: 1,

        _setup: function() {

            if (this.elem('container').size()) {

                this._itemWidth = this.elem('item').first().innerWidth();
                this._slideWidth = this.domElem.innerWidth();

                this._itemsOnSlide = Math.floor(this._slideWidth / this._itemWidth) || 1;

            } else {
                throw new Error('Setup failed.')
            }

            // FIXME: params (or mod) instead of attributes
            this._autostart = this.domElem.data('autostart') || false;

            this.setMod('ready', true);
        },

        _setupControls: function() {
            console.log('_setupControls');

            this.bindTo(this.elem('control', 'type', 'next'), 'click', function(){
                this._next();
            }, this);
            this.bindTo(this.elem('control', 'type', 'prev'), 'click', function(){
                this._prev();
            }, this);
        },

        _slide: function(duration) {
            index = this._currentItemIndex;
            console.log('_slide', index);
            if (duration) {
                duration = (duration/1000) + "s";
                this.elem('container').css("transition", duration);
            }
            target = '-' + (index*this._itemWidth) + 'px';
            target = "translate(" + target + ",0)";
            this.elem('container').css('transform', target);
        },

        _togglePlay: function() {
            console.log('_togglePlay');
            if (this._started) {
                this._stop();
            } else {
                // stopped
                this._play();
            }
        },
        _play: function() {
            console.log('_play');
            if (!this._started) {
                this._started = setInterval(function(ctx){
                    ctx._next();
                    // ctx._prev();
                }, this._delaySlideMs, this);
            }
        },
        _stop: function() {
            console.log('_stop');
            if (this._started) {
                clearInterval(this._started);
                this._started = false;
                this.setMod('play', false);
            }
        },
        _next: function() {
            console.log('_next');
            this._currentItemIndex += this._itemsOnSlide;
            lastIndex = this.elem('item').length - this._itemsOnSlide
            if (this._currentItemIndex > lastIndex) {
                this._currentItemIndex = lastIndex;
            }
            this._slide();
            if (this._currentItemIndex === lastIndex) {
                this._currentItemIndex = -this._itemsOnSlide;
            }

        },
        _prev: function() {
            console.log('_prev');
            this._currentItemIndex -= this._itemsOnSlide;
            if (this._currentItemIndex < 0) {
                this._currentItemIndex = 0;
            }
            this._slide();
            if (this._currentItemIndex === 0) {
                this._currentItemIndex = this.elem('item').length;
            }
        }

    });

    provide(DOM);

});