({
    title: 'The page for a scopes testing',
    favicon: '/favicon.ico',
    content:[
        {
            block: 'scope',
            attrs: { id: 'bem-scopedapp' },
            mix: [
                { block: 'bem-scopedapp' },
                {
                    block: 'b-page',
                    mods: {
                        ajax: 'yes',
                    }
                }
            ],
            content: [
                {
                    block: 'header',
                    content: [
                        { block: 'b-page', elem: 'css', url: 'index/_index.css', ie: false },
                        { block: 'b-page', elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
                        { block: 'b-page', elem: 'meta', attrs: { name: 'description', content: '' } },
                        'header content goes here'
                    ]
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'b-link',
                            content: 'link',
                            js: {},
                            url: 'javascript:void(0);'
                        }
                    ]
                },
                {
                    block: 'footer',
                    content: [
                        'footer content goes here'
                    ]
                },
                { block: 'i-jquery', mods: { version: '1.8.3' } },
                { block: 'b-page', elem: 'js', url: 'index/_index.js' }
            ]
        }
    ]
})
