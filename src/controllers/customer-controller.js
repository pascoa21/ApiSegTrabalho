const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const repository = require('../repositories/customer-repository')

exports.get = (req,res,next) => {
    Customer.find({}).then(data => {
        res.status(200).send(data);
    }).catch(e=> {
        res.status(400).send(e);
    });
}

exports.post = ('/', (req, res, next) => {
    let customer = new Customer(req.body);
    customer.save().then(x => {
        res.status(201).send({message: 'Usuario cadastrado com sucesso'});
    }).catch(e=> {
        res.status(400).send({
            message: 'Error ao cadastrar usuario',
            data: e
        });
    });
    
});

exports.delete = ('/name', (req, res, next) => {
    Customer.findOneAndRemove(req.params.id).then(x => {
        res.status(200).send({
            message:'Usuario removido com sucesso!'
        });
    }).catch(e=> {
        res.status(400).send({
            message: 'Falha ao remover usuario.',
            data: e
        })
    })
});