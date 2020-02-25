var m = require("mithril");

var sites = { 
    siteData: [],
    loadList: function(searchValue) { 
        return m.request({ 
            method: "GET",
            url: "http://145.28.163.52:3000/sites/search?query=" + encodeURIComponent(searchValue),
        })
        .then(function(result) { 
            console.log(result);
            sites.siteData = result;
        })
    }
};

module.exports = sites;