let data = [
	{
		value: 'pierwsze zadanie',
		finished: false,
		id: 'dfsgsdg-sdfgs-dfgsdg-sdfg',
	},
]

exports.addNewItem = (req, res) => {
	const item = req.body
	data.push(item)
	res.json(data)
	res.status(200).end()
}

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

exports.changeItemDown = (req, res) => {
	const index = parseInt(req.params.index, 10)

	oldData = req.body

	const next = oldData[index + 1]
	if (next !== undefined) {
		oldData[index + 1] = oldData[index]
		oldData[index] = next

		data = oldData

		res.json(data)
		res.status(200).end()
	} else {
		res.json(data)
	}
}
exports.changeItemUp = (req, res) => {
	const index = parseInt(req.params.index, 10)

	oldData = req.body

	const next = oldData[index - 1]
	if (next !== undefined) {
		oldData[index - 1] = oldData[index]
		oldData[index] = next

		data = oldData

		res.json(data)
		res.status(200).end()
	} else {
		res.json(data)
	}
}
exports.deleteItem = (req, res) => {
	const todoId = req.params.todoId

	data = data.filter(todo => todo.id != todoId)
	res.status(200).end()
}
exports.getAllItems = (req, res) => {
	res.send(data)
}
