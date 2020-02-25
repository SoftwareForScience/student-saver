var m = require("mithril");

var sites = { 
    siteData: [],
    loadList: function(searchValue) { 
        return m.request({ 
            method: "GET",
            url: "https://api.schroeff.com/sites/search?query=" + encodeURIComponent(searchValue),
        })
        .then(function(result) { 
            sites.siteData = result;
            console.log(sites.siteData);
        })
    },
};

module.exports = sites;