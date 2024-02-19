module.exports = (sequelize,DataTypes) =>{

const Item = sequelize.define('Item', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false,
       
	},
	value: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	finished: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
})




return Item


}