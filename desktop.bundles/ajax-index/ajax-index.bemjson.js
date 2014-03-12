({
    block: 'scope',
    attrs: { id: 'bem-scopedapp' },
    mix: [
        { block: 'bem-scopedapp' },
        {
            block: 'b-page',
            mods: {
                ajax: 'yes'
            }
        }
    ],
    content: [
        {
            block: 'header',
            content: [
                { block: 'b-page', elem: 'css', url: 'http://localhost:8081/desktop.bundles/ajax-index/_ajax-index.css', ie: false },
                { block: 'b-page', elem: 'css', url: 'http://localhost:8081/desktop.bundles/ajax-index/_ajax-index.ie.css', ie: 'gte IE 6' },
                { block: 'b-page', elem: 'meta', attrs: { name: 'description', content: '' } },
                'loaded scope header content goes hereeee'
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'b-link',
                    content: 'initial scope link',
                    url: 'javascript:void(0);',
                    mix: [
                        { block: 'test-link', elem: 'initial-scope' }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'loaded scope footer content goes here'
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { block: 'b-page', elem: 'js', url: 'http://localhost:8081/desktop.bundles/ajax-index/_ajax-index.js' }
    ]
})
