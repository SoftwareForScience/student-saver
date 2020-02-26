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

    newSite: {},
    add: function(site) {
        return m.request({ 
            method: "POST",
            url: "https://api.schroeff.com/sites",
            body: site
        }).then(function(result) { 
            console.log(results);
        })
    }
};

module.exports = sites;
