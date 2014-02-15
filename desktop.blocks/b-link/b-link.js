BEM.DOM.decl({ 'name': 'b-link' }, {
    
    onSetMod: {
        js: function() {
            console.log('scopedapp link inited');
            this.bindTo('click', this._onClick);
        }
    },
    
    _onClick : function(e) {

        e.preventDefault();

        console.log('scopedapp link clicked');

    }

});
