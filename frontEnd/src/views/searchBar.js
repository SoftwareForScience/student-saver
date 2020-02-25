var m = require("mithril");
var sites = require("../models/sites");

module.exports = { 
    view: function() { 
        return m("form.search-bar", {
                onsubmit: function(e) { 
                    e.preventDefault();
                    sites.loadList(e.srcElement.querySelector("input").value);
                }
            }, [
            m("input", {type: "text", placeholder: "Zoek naar korting..."}),
            m("button", {type: "submit"}, "Zoek")
        ])
    }
}