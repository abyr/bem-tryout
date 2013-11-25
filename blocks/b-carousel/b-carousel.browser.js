modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    var root = this;

    DOM.decl('b-carousel', {
        onSetMod: {
            'js': {
                'inited': function() {
                    console.log('hello');
                }
            }
        }
    });

    provide(DOM);

});