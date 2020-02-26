var m = require("mithril");
var sitesList = require("./views/sitesList");
var searchBar = require("./views/searchBar");
var addForm = require("./views/addForm");
var layout = require("./views/layout");

m.route(document.body, "/list", {
    "/list": { 
        render: function() { 
            return m(layout, m(searchBar))
        }
    },
    "/add": { 
        render: function() { 
            return m(layout, m(addForm))
        }
    }
})

