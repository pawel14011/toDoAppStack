const { Item } = require('../../../models')

exports.getAllItems = async (req, res) => {
	const resData = await Item.findAll()

	res.send(resData)
}
