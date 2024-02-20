const { Item } = require('../../../models')

exports.changeFinishedItem = async (req, res) => {
	const idItemTochange = req.params.todoId2
	const propertyToChange = req.body
	await Item.update(propertyToChange, { where: { id: idItemTochange } })

	res.status(200).end()
}
