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
                    content: [
                        'data'
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
