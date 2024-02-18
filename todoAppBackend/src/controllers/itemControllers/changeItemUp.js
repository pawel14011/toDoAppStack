let data = require('../../data/data')
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
