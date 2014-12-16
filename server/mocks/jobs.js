module.exports = function(app) {
  var express = require('express');
  var jobsRouter = express.Router();

  jobsRouter.get('/', function(req, res) {
    res.send({
        "jobs": [
            { id: 1, title: "Product Manager" },
            { id: 2, title: "Account Manager" },
            { id: 3, title: "Sales Manager" },
            { id: 4, title: "Project Manager" },
            { id: 5, title: "Store Manager" }
        ]
    });
  });

  jobsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  jobsRouter.get('/:id', function(req, res) {
    res.send({
      "jobs": {
        "id": req.params.id
      }
    });
  });

  jobsRouter.put('/:id', function(req, res) {
    res.send({
      "jobs": {
        "id": req.params.id
      }
    });
  });

  jobsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/jobs', jobsRouter);
};
