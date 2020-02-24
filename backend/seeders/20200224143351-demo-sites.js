'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Sites', [
      {
        site_name: 'Spotify',
        product_name: 'Spotify Premium',
        url: 'https://www.spotify.com/nl/student/',
        description: '50% studenten korting op Spotify Premium',
        discount_requirements: null,
        upvotes: 12,
        downvotes: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        site_name: 'Adobe',
        product_name: 'Adobe Creative Cloud',
        url: 'https://www.adobe.com/nl/creativecloud/buy/students.html',
        description: '65% korting op Adobe Creative Cloud',
        discount_requirements: null,
        upvotes: 1,
        downvotes: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        site_name: 'Microsoft',
        product_name: 'Office 365',
        url: 'https://www.microsoft.com/nl-nl/education/products/office',
        description: 'Office 365 gratis',
        discount_requirements: 'Studenten e-mail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        site_name: 'ASOS',
        product_name: null,
        url: 'https://www.asos.com/nl/ontdek/students/asos-on-campus/student-validation/',
        description: '10% korting op alle bestellingen',
        discount_requirements: 'Studenten e-mail',
        upvotes: 5,
        downvotes: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        site_name: 'Nike',
        product_name: null,
        url: 'https://www.nike.com/nl/nl_nl/c/help/student-discount',
        description: '10% korting op alle bestellingen',
        discount_requirements: null,
        upvotes: 10,
        downvotes: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        site_name: 'SURFspot',
        product_name: 'Apple Producten',
        url: 'https://www.surfspot.nl/apple-studentenkorting',
        description: 'Verschillende kortingen op Apple producten',
        discount_requirements: 'Studenten e-mail',
        upvotes: 25,
        downvotes: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Sites', null, {});
  }
};
