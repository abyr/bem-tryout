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
                    mods: {
                        autostart: true
                    },
                    content: [
                        {
                            title: 'Apple iPhone 4S 32Gb',
                            image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                            url: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg'
                        },
                        {
                            title: 'Samsung Galaxy Ace S5830',
                            image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                            url: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg'
                        },
                        {
                            title: 'HTC One S',
                            image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                            url: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg'
                        },
                        {
                            title: 'Sharp SH530U',
                            image: 'http://mdata.yandex.net/i?path=b1119145405_img_id7474251838115767025.jpg',
                            url: 'http://mdata.yandex.net/i?path=b1119145405_img_id7474251838115767025.jpg'
                        },
                        {
                            title: 'Samsung Galaxy S III 16Gb',
                            image: 'http://mdata.yandex.net/i?path=b0503234231_img_id4954748565558111178.jpg',
                            url: 'http://mdata.yandex.net/i?path=b0503234231_img_id4954748565558111178.jpg'
                        },
                        {
                            title: 'Samsung Galaxy Ace S5830',
                            image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                            url: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg'
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
