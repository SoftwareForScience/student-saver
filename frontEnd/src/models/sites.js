var m = require("mithril");

var sites = { 
    siteData: {},
    loadList: function(searchValue) { 
        return m.request({ 
            method: "GET",
            url: "https://api.schroeff.com/sites/search?query=" + encodeURIComponent(searchValue),
        })
        .then(function(result) { 
            console.log(result);
            sites.siteData = result[0];
        })
    },
};

module.exports = sites;