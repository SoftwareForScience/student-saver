var m = require("mithril");
var sites = require("../models/sites");

module.exports = { 
  oninit: function() {
    sites.loadPopular();
  },
  view: function() { 
    return m("div.card-columns popular", sites.popular.map(function(site) {
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
            m(`a[href=${site.url}]`, m('h4.card-title', title)),
            m('p.card-text', site.description),
            requirements,
            m('div.card-footer', [
              `${score} punten`,
            ]),
          ])
        ]);
    }));
  }
};
