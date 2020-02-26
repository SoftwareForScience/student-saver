const Sequelize = require('sequelize');
const body_parser = require('body-parser')
const express = require('express');
const models = require('./models');
const util = require('./util');

const app = express();
const port = 3000;

const error_handler = (err, req, res, next) => {
  res.status(500).send({error: err});
};

app.use(body_parser.json());
app.use(error_handler);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/sites/search', (req, res) => {
  const query = decodeURI(req.query.query);
  const limit = parseInt(req.query.limit, 10) || 50;

  models.Site.findAll({
    limit: limit,
    order: [[Sequelize.literal('(upvotes - downvotes)'), 'ASC'], 'site_name', 'product_name'],
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
  const limit = parseInt(req.query.limit, 10) || 50;

  models.Site.findAll({
    limit: limit,
    order: [[Sequelize.literal('(upvotes - downvotes)'), 'DESC'], 'site_name', 'product_name']
  }).then(sites => res.json(sites));
});

app.post('/sites', (req, res) => {
  util.create_site(req.body).then(site => {
    res.status(201).json(site);
  }).catch(err => {
    console.log(err);
    res.status(400).send({error: err});
  });
});

app.put('/sites/:id/:action(upvote|downvote)', (req, res) => {
  models.Site.findByPk(req.params.id).then(site => {
    return site.increment(`${req.params.action}s`, {by: 1});
  }).then(site => {
    res.status(200).json({});
  }).catch(err => {
    console.log(err);
    res.status(400).send({error: err});
  });
});

app.put('/sites/:id/:action(upvote|downvote)/revert', (req, res) => {
  models.Site.findByPk(req.params.id).then(site => {
    return site.decrement(`${req.params.action}s`, {by: 1});
  }).then(site => {
    res.status(200).json({});
  }).catch(err => {
    console.log(err);
    res.status(400).send({error: err});
  });
});

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
