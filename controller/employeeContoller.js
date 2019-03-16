const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; // لمعرفة الاي دي من الداتا بايز

var { Employee } = require('../models/employee');

// json url localhost:3000/employees

router.get('/', (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("there are and error" + JSON.stringify(err, undefined, 2));
    }
  });
})

// get posts by id 
router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record found id : ${req.params.id}`);

  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc)
    } else {
      console.log("there are and error in getting id" + JSON.stringify(err, undefined, 2));
    }
  })
})

// post request 
router.post('/', (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  })
  emp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("there are and error" + JSON.stringify(err, undefined, 2));
    }
  })
})


// update value -------------
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record found id : ${req.params.id}`);

  var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  }

  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("there are and error in update employers" + JSON.stringify(err, undefined, 2));
    }
  })
})

// delete value -------------

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record found id : ${req.params.id}`);


  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("there are and error in Delete employers" + JSON.stringify(err, undefined, 2));
    }
  })
})

module.exports = router;