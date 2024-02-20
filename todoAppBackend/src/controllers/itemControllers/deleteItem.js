const { Item } = require('../../../models')

exports.deleteItem = async (req, res) => {
	const todoId = req.params.todoId

	await Item.destroy({
		where: {
			id: todoId,
		},
	})

	res.status(200).end()
}
exports.getAllItems = async (req, res) => {
	const resData = await Item.findAll()

	res.send(resData)
}
