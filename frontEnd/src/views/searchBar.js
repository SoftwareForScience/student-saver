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
      m("img[src='images/logo.png'].student-saver-logo"),
      m("p", "Zoek of je studentenkorting krijgt bij een website of product, of voeg zelf eentje toe."),
      m("input.search-input", {type: "text", placeholder: "Zoek naar korting..."}),
      m("button.search-button", {type: "submit"}, [
        m("i.material-icons", "search")
      ]),
      m("div.card-columns search-result", sites.siteData.map(function(site) {
        const thumbnail = site.thumbnail || 'https://seeklogo.net/wp-content/themes/seeklogo-2017/images/not-available.jpg';
        const title = site.product_name ? `${site.site_name}: ${site.product_name}` : site.site_name;
        const requirements =
          site.discount_requirements !== null
            ?  m('p.card-text', [
              m('b', 'Voorwaarden'),
              m('span', `: ${site.discount_requirements}`)])
            : null;
          const score = site.upvotes - site.downvotes;

          return m('div.card', [
            m(`img[src=${thumbnail}].card-img-top .coupon-thumbnail`),
            m('div.card-body', [
              m(`a[href=${site.url}][target=_blank]`, m('h4.card-title', title)),
              m('p.card-text', site.description),
              requirements,
              m('div.card-footer', [
                `${score} punten`,
              ]),
            ])
          ])
      }))
    ]);
  }
}
