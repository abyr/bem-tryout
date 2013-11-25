modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    var root = this;

    DOM.decl('b-carousel', {
        onSetMod: {
            'js': {
                'inited': function() {
                    this._setup();
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

        _itemWidth: 210, // px

        _setup: function() {

            if (this.elem('container').size()) {

                // process styles, setup params

            } else {
                throw new Error('Setup failed.')
            }

            // FIXME: params (or mod) instead of attributes
            this._autostart = this.domElem.data('autostart') || false;

            this.setMod('ready', true);
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
        },
        _next: function() {
            console.log('_next');
            this._currentItemIndex++;
            this._slide();
        },
        _prev: function() {
            console.log('_prev');
            this._currentItemIndex--;
            this._slide();
        }

    });

    provide(DOM);

});