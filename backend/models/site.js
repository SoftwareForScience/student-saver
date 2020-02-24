'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    site_name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    discount_requirements: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  }, {});
  Site.associate = function(models) {
    // associations can be defined here
  };
  return Site;
};
