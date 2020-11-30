let list = [
    {
      "id": 1,
      "product": "Soap",
      "price": "10"
    },
    {
      "id": 2,
      "product": "Cups",
      "price": "80"
    },
    {
      "id": 3,
      "product": "Shampoo",
      "price": "120"
    }
  ];
  
  var newItem = [
    {
      "id": 4,
      "product": "Flowers",
      "price": "50"
    }];
  
  
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(8070);
  
  app.get('/lists', (req, res) => {
    res.json(list);
  });
  
  app.post('/lists', (req, res) => {
    const newl = req.body; 
     list.push(newl) ;
   
   res.json(list);
  });
  
  app.get('/lists/:id', (req, res) => {
    const listId = Number(req.params.id);
    const getlist = list.find((lists) => lists.id === listId);
  
    if (!getlist) {
      res.status(500).send('Name not found.')
    } else {
      res.json(getlist);
    }
  });
  app.patch('/lists/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id, req.body);
    if (!todo) return res.sendStatus(404);
    todo.completed = !todo.completed;
    res.json(todo);
   });
  
  
  app.delete('/lists/:id', (request, response) => {
    const listId = Number(request.params.id);
    const newlist = list.filter((li) => li.id != listId);
  
    if (!newlist) {
      response.status(500).send('Name not found.')
    } else {
      list= newlist;
      response.json(list);
    }
  });