const { Item } = require('../../../models')

exports.changeItemUp = async (req, res) => {
	const index = parseInt(req.params.index, 10)

	oldData = req.body

	if (oldData[index - 1] !== undefined) {
		const next = { ...oldData[index - 1] }
		const now = { ...oldData[index] }
		await Item.update(
			{
				value: next.value,
				finished: next.finished,
			},
			{
				where: {
					id: now.id,
				},
			}
		)
		await Item.update(
			{
				value: now.value,
				finished: now.finished,
			},
			{
				where: {
					id: next.id,
				},
			}
		)

		const resData = await Item.findAll()

		res.status(200).send(resData).end()
	} else {
		res.json(oldData)
	}
}
