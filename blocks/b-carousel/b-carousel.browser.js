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
            }
        },

        _started: false,

        _autostart: false,

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

        _togglePlay: function() {
            console.log('_togglePlay');
        },
        _play: function() {
            console.log('_play');
        },
        _stop: function() {
            console.log('_stop');
        },
        _next: function() {
            console.log('_next');
        },
        _prev: function() {
            console.log('_prev');
        }

    });

    provide(DOM);

});