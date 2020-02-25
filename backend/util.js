const Sequelize = require('sequelize');
const url_metadata = require('url-metadata');
const models = require('./models');

module.exports = {
  create_site: site => {
    const path_array = site.url.split('/');
    const base_url = `${path_array[0]}//${path_array[2]}`;

    return url_metadata(base_url, {timeout: 1000}).then(metadata => {
      const image = metadata['og:image'] || null;

      return models.Site.create({
        site_name: site.site_name,
        url: site.url,
        thumbnail: image,
        product_name: site.product_name,
        description: site.description,
        discount_requirements: site.discount_requirements
      });
    }).catch(err => {
      return models.Site.create({
        site_name: site.site_name,
        url: site.url,
        thumbnail: null,
        product_name: site.product_name,
        description: site.description,
        discount_requirements: site.discount_requirements
      });
    });
  }
}
