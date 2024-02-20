const { Item } = require('../../../models')

exports.addNewItem = async (req, res) => {
	const item = req.body
	await Item.create(item)
	const resData = await Item.findAll()
	res.status(200).send(resData).end()
}
