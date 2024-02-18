let data = require('../../data/data');

exports.addNewItem = (req, res) => {
	const item = req.body
	data.push(item)
	res.json(data)
	res.status(200).end()
}