var m = require("mithril");
var sites = require("../models/sites");

module.exports = {
  view: function () {
    return m("form.add-form", {
      onsubmit: function (e) {
        e.preventDefault();
        sites.add(sites.newSite);
      }
    }, [
      m("div.form-header", [
        m("h2", "Voeg een korting toe")
      ]),
      m("div.form-section", [
        m("label.label", "Site naam"),
        m("input.input[type=text][placeholder=Microsoft][required].form-control", {
          oninput: function (e) { sites.newSite.site_name = e.target.value },
          value: sites.newSite.site_name
        })
      ]),
      m("div.form-section", [
        m("label.label", "URL"),
        m("input.input[placeholder=http://example.com][required].form-control", {
          oninput: function (e) { sites.newSite.url = e.target.value },
          value: sites.newSite.url
        })
      ]),
      m("div.form-section", [
        m("label.label", "Product naam (optioneel)"),
        m("input.input[placeholder=Office 365].form-control", {
          oninput: function (e) { sites.newSite.product_name = e.target.value },
          value: sites.newSite.product_name
        })
      ]),
      m("div.form-section", [
        m("label.label", "Beschrijving"),
        m("input.input[placeholder=Beschrijving van de korting en waarop het geldt][required].form-control", {
          oninput: function (e) { sites.newSite.description = e.target.value },
          value: sites.newSite.description
        })
      ]),
      m("div.form-section", [
        m("label.label", "Korting voorwaarden"),
        m("input.input[placeholder=Voorwaarden van de korting (bijvoorbeeld school e-mailadres)][required].form-control", {
          oninput: function (e) { sites.newSite.discount_requirements = e.target.value },
          value: sites.newSite.discount_requirements
        })
      ]),

      m("button.button[type=submit].btn btn-primary", "Toevoegen"),
    ]);
  }
};
