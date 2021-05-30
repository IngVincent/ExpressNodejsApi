const express = require('express');
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const Joi = require('@hapi/joi');
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
function validation(fruit) {
    const schema = {
        name: Joi.string().min(J).required()
    };
    return Joi.validate(fruit, schema);
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


