({
    block: 'b-page',
    title: 'The page for a scopes testing',
    favicon: '/favicon.ico',
    // ololo: { block: 'i-bem', elem: 'dom', elemMods: { conflicts: 'no' } },
    content:[
        {
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
                        { block: 'b-page', elem: 'css', url: 'index/_index.css', ie: false },
                        { block: 'b-page', elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
                        { block: 'b-page', elem: 'meta', attrs: { name: 'description', content: '' } },
                        'initial scope header content goes hereeee'
                    ]
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'test-link',
                            js: true,
                            content: [
                                {
                                    block: 'b-link',
                                    content: 'initial scope link',
                                    url: 'javascript:void(0);',
                                    mix: [
                                        { block: 'test-link', elem: 'initial-scope' }
                                    ]
                                },
                                '<br>',
                                {
                                    block: 'b-link',
                                    content: 'load another scope',
                                    url: 'javascript:void(0);',
                                    mix: [
                                        { block: 'test-link', elem: 'load-scope' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'footer',
                    content: [
                        'initial scope footer content goes here'
                    ]
                },
                { block: 'i-jquery', mods: { version: '1.8.3' } },
                { block: 'b-page', elem: 'js', url: 'index/_index.js' }
            ]
        }
    ]
})
