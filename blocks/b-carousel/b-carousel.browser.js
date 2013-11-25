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

            this.setMod('ready', true);
        }

    });

    provide(DOM);

});