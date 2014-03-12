BEM.DOM.decl('test-link', {
    
    onSetMod: {
        js: function() {
            console.log(BEM_CONFLICTS_NO + ' links inited');
            this.bindTo('initial-scope', 'click', this._onClick);
            this.bindTo('load-scope', 'click', this._onLoadLinkClick);
        }
    },
    
    _onClick: function(e) {
        e.preventDefault();
        console.log(BEM_CONFLICTS_NO + ' link clicked');
    },
    
    _onLoadLinkClick: function(e) {
        e.preventDefault();
        console.log(BEM_CONFLICTS_NO + ' load scope link clicked');
        
        $
            .ajax({
                type: "GET",
                url: "http://localhost:8081/desktop.bundles/ajax-index/ajax-index.html"
            })
            .done(function(data) {
                $('body').append(data);
             });
    }

});
