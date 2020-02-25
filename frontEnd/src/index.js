var m = require("mithril");
var sitesList = require("./views/sitesList");
var searchBar = require("./views/searchBar");
var layout = require("./views/layout");
var header = require("./views/header");

m.route(document.body, "/list", {
    "/list": { 
        render: function() { 
            return m(layout, m(searchBar))
        }
    }
})

