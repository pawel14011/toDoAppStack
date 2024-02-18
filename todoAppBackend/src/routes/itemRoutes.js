const express = require('express')
const router = express.Router()

const getAllItems = require('../controllers/itemControllers/getAllItems')
const changeItemDown = require('../controllers/itemControllers/changeItemDown')
const addNewItem = require('../controllers/itemControllers/addNewItem')
const changeItemUp = require('../controllers/itemControllers/changeItemUp')
const deleteItem = require('../controllers/itemControllers/deleteItem')
const changeFinishedItem = require('../controllers/itemControllers/changeFinishedItem')

const itemControllers = require('../controllers/itemControllers')


router.get('/', itemControllers.getAllItems)
router.post('/', itemControllers.addNewItem)
router.post('/down/:index', itemControllers.changeItemDown)
router.post('/up/:index', itemControllers.changeItemUp)
router.delete('/:todoId', itemControllers.deleteItem)
router.patch('/:todoId2', itemControllers.changeFinishedItem)

module.exports = router
