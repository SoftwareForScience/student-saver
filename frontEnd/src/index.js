var m = require("mithril");
var searchBar = require("./views/searchBar");
var popular = require("./views/popular");
var addForm = require("./views/addForm");
var layout = require("./views/layout");

m.route(document.body, "/list", {
    "/list": { 
        render: function() { 
            return m(layout, m(searchBar))
        }
    },
    "/popular": { 
        render: function() { 
            return m(layout, m(popular))
        }
    },
    "/add": { 
        render: function() { 
            return m(layout, m(addForm))
        }
    }
})

