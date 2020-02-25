var m = require("mithril");
var sitesList = require("./views/sitesList");
var searchBar = require("./views/searchBar");

m.route(document.body, "/search", { 
    "/search": searchBar
})