const express = require('express');
const { handleCreateItems, handleGetItems, handleGetItemsById, handleUpdateItems, handleDeleteItems } = require('../controller/app.js');

const router = express.Router();

router.post('/create-items',handleCreateItems);
 
router.get('/get-items', handleGetItems);
router.get('/getting-item/:id', handleGetItemsById);
console.log('handleGetItemsById:', handleGetItemsById);
router.put('/update-item/:id', handleUpdateItems);

router.delete('/delete-item/:id', handleDeleteItems);

module.exports = router;
