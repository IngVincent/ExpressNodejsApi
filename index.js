const express = require('express');
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const Joi = require('@hapi/joi');
const { ValidationError } = require('@hapi/joi');
app.use(express.json());

const fruits = [
    {name: 'Aples', id: 1},
    {name: 'Bananas', id: 2},
    {name: 'Cherries', id: 3},
    {name: 'Dates', id: 4},
    {name: 'Graoes', id: 5},
    {name: 'Lemons', id: 6},
    {name: 'Melons', id: 7}

]
app.get('/', (req,res) => {
res.send('Unete a nuestra lista de correos de manera gratuita https://www.cupones.mx');
});

app.get('/api/fruits', (req,res)=>{
    res.send(fruits);

});

app.get('/api/fruits/:id', (req,res)=>{
    const fruit = fruits.find(c => c.id === parseInt(req.params.id));
    if(!fruit)res.status(404).send('fruit not found');
    res.send(fruit);

});
//create request handler
app.post('/api/fuits', (req, res)=> {
    const {error} = validateFruit(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message)
        return;
    }
    const fruit =
    {
    id: fruits.length + 1,
    name: req.body.name
    };
    fruits.push(fruit);
    res.send(fruit);
});
function validateFruit(fruit) {
    const schema =  Joi.object({ name: Joi.string().min(3).required() });
    const validation = schema.validate(fruit);
    return validation;
}



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


