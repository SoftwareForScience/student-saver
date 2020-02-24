const Sequelize = require('sequelize');
const body_parser = require('body-parser')
const express = require('express');
const models = require('./models');

const app = express();
const port = 3000;

const error_handler = (err, req, res, next) => {
  res.status(500).send({ error: err });
};

app.use(body_parser.json());
app.use(error_handler);

app.get('/sites', (req, res) => {
    models.Site.findAll().then(sites => res.json(sites));
});

app.post('/sites', (req, res) => {
  models.Site.create({
    site_name: req.body.site_name,
    url: req.body.url,
    description: req.body.description,
    discount_requirements: req.body.discount_requirements
  }).then(() => {
    res.status(201).json({});
  }).catch(err => {
    res.status(400).send({error: err});
  });
});

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
