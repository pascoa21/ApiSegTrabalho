const express = require('express');
const router = express.Router();
const controllers = require('../controllers/product-controller');

router.get('/',controllers.get);
router.get('/:risc', controllers.getByRisc);
router.get('/:agente', controllers.getByAgente);
router.post('/', controllers.post);
router.put('/:id', controllers.put);
router.delete('/:risc', controllers.delete);

module.exports = router;