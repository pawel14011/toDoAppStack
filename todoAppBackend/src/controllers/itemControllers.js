
const {Item} = require('../../models')


let data = [
	{
		value: 'pierwsze zadanie',
		finished: false,
		id: 'dfsgsdg-sdfgs-dfgsdg-sdfg',
	},
]

exports.addNewItem = async (req, res) => {
	const item = req.body
	console.log(item);
	await Item.create(item)
	const resData = await Item.findAll();
	res.status(200).send(resData).end()
}

exports.changeFinishedItem = async (req, res) => {
	const idItemTochange = req.params.todoId2
	const propertyToChange = req.body
	console.log(propertyToChange);
	
	await Item.update(propertyToChange,{where:{id:idItemTochange}})
	
	res.status(200).end()
}

exports.changeItemDown = async (req, res) => {
	const index = parseInt(req.params.index, 10)
	
	oldData = req.body
	
	
	

	
	if (oldData[index + 1] !== undefined) {
		const next = {...oldData[index + 1]} 
		const now = {...oldData[index]}

		
			await Item.update({
				value:next.value,
				finished:next.finished
			},{where:{
				id:now.id
			}})
			await Item.update({
				value:now.value,
				finished:now.finished
			},{where:{
				id:next.id
			}})
		
		
		const resData = await Item.findAll();

		res.status(200).send(resData).end()
	} else {
		res.json(oldData )
	}
}
exports.changeItemUp = async (req, res) => {
	const index = parseInt(req.params.index, 10)
	
	oldData = req.body
	
	
	

	
	if (oldData[index - 1] !== undefined) {
		const next = {...oldData[index - 1]} 
		const now = {...oldData[index]}
		await Item.update({
			value:next.value,
			finished:next.finished
		},{where:{
			id:now.id
		}})
		await Item.update({
			value:now.value,
			finished:now.finished
		},{where:{
			id:next.id
		}})
	
		



		
		
		const resData = await Item.findAll();

		res.status(200).send(resData).end()
	} else {
		res.json(oldData )
	}
}
exports.deleteItem = async(req, res) => {
	const todoId = req.params.todoId

	await Item.destroy({
		where: {
		  id: todoId
		}
	  });
	
	res.status(200).end()
}
exports.getAllItems = async (req, res) =>{
	
	const resData = await Item.findAll();
	
	res.send(resData)
}
