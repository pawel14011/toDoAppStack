let data = require('../../data/data')
exports.changeFinishedItem = (req, res) => {
	const idItemTochange = req.params.todoId2
	const propertyToChange = req.body

	data = data.map(todo => {
		if (todo.id == idItemTochange) {
			changeObj = { ...todo, finished: propertyToChange.finished }
			res.json(changeObj)
			return changeObj
		} else return todo
	})
	res.status(200).end()
}
