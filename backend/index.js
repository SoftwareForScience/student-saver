const Sequelize = require('sequelize');
const body_parser = require('body-parser')
const express = require('express');
const models = require('./models');

const app = express();
const port = 3000;

const error_handler = (err, req, res, next) => {
  res.status(500).send({error: err});
};

app.use(body_parser.json());
app.use(error_handler);

app.get('/sites/search', (req, res) => {
  const query = req.query.query;
  const limit = parseInt(req.query.limit, 10) || 50;

  models.Site.findAll({
    limit: limit,
    where: {
      [Sequelize.Op.or]: [
        {site_name: {[Sequelize.Op.like]: `%${query}%`}},
        {product_name: {[Sequelize.Op.like]: `%${query}%`}},
        {url: {[Sequelize.Op.like]: `%${query}%`}}
      ]
    }
  }).then(sites => res.json(sites));
});

app.get('/sites', (req, res) => {
  models.Site.findAll().then(sites => res.json(sites));
});

app.post('/sites', (req, res) => {
  models.Site.create({
    site_name: req.body.site_name,
    url: req.body.url,
    product_name: req.body.product_name,
    description: req.body.description,
    discount_requirements: req.body.discount_requirements
  }).then(site => {
    res.status(201).json(site);
  }).catch(err => {
    console.log(err);
    res.status(400).send({error: err});
  });
});

app.put('/sites/:id/:action(upvote|downvote)', (req, res) => {
  models.Site.findOne({where: {id: req.params.id}}).then(site => {
    return site.increment(`${req.params.action}s`, {by: 1});
  }).then(site => {
    res.status(200).json({});
  }).catch(err => {
    console.log(err);
    res.status(400).send({error: err});
  });
});

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
