let data = require('../../data/data')

exports.deleteItem = (req, res) => {
	const todoId = req.params.todoId

	data = data.filter(todo => todo.id != todoId)

	res.status(200).end()
}
