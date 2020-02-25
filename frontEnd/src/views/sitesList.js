var m = require("mithril");
var sites = require("../models/sites");

module.exports = { 
    oninit: sites.loadList,
    view: function() { 
        return m(".site-name");
    }
};