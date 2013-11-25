({
    block: 'page',
    title: 'BEM tryout',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                ' start ',
                {
                    block: 'b-carousel',
                    attrs: {
                        'data-autostart': true
                    },
                    mods: {
                        type: 'auto'
                    },
                    content: [
                        {
                            title: '11111111111111'
                        },
                        {
                            title: '<img src="http://jsbooks.revolunet.com/img/logo_jsbooks.png" />'
                        },
                        {
                            title: '3333333333'
                        },
                        {
                            title: '4444444444444'
                        },
                        {
                            title: '5555555555'
                        },
                        {
                            title: '666666666'
                        }
                    ],
                    controls: [
                        {
                            elem: 'button',
                            type: 'prev',
                            content: '<'
                        },
                        {
                            elem: 'button',
                            type: 'next',
                            content: '>'
                        }
                    ]
                },
                ' end '
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
