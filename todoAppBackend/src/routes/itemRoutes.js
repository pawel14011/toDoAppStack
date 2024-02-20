const express = require('express')
const router = express.Router()

const getAllItems = require('../controllers/itemControllers/getAllItems')
const changeItemDown = require('../controllers/itemControllers/changeItemDown')
const addNewItem = require('../controllers/itemControllers/addNewItem')
const changeItemUp = require('../controllers/itemControllers/changeItemUp')
const deleteItem = require('../controllers/itemControllers/deleteItem')
const changeFinishedItem = require('../controllers/itemControllers/changeFinishedItem')

router.get('/', getAllItems.getAllItems)
router.post('/', addNewItem.addNewItem)
router.post('/down/:index', changeItemDown.changeItemDown)
router.post('/up/:index', changeItemUp.changeItemUp)
router.delete('/:todoId', deleteItem.deleteItem)
router.patch('/:todoId2', changeFinishedItem.changeFinishedItem)

module.exports = router
