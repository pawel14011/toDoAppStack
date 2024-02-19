import { Sequelize, DataTypes } from 'sequelize'

//dane do połączenia z bazą
const sequelize = new Sequelize('todoApp', 'root', 'lexus', {
	host: 'localhost',
	dialect: 'mysql',
})

//proba połaćzenia
try {
	await sequelize.authenticate()

	console.log('Połączono z bazą')
} catch (error) {
	console.log('Brak polaczenia z bazą', error)
}

//zdefiniowanie modeli struktury tabel w bazie
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

//synchronizacja modeli i struktur w bazie
await sequelize
	.sync()
	.then(() => {
		console.log('Synchroznizacja przebiegła pomyslnie')
	})
	.catch(error => {
		console.log('Wyjebalo synchronizacje', error)
	})

//tworzenie rekordów dla danego modelu

//rekord pierwszy
await Item.create({
	value: 'Zrob zakupy',
	finished: false,
})
	.then(res => {
		console.log(res)
	})
	.catch(error => {
		console.log('Blad w saving to database:', error)
	})

//rekord drugi
await Item.create({
	value: 'Idz do fryziera',
	finished: false,
})
	.then(res => {
		console.log(res)
	})
	.catch(error => {
		console.log('Blad w saving to database:', error)
	})




    try {
        // ...
      
        // Pobierz wszystkie rekordy z tabeli Item
        const allItems = await Item.findAll();
      
        // Wyświetl pobrane rekordy
        console.log('Wszystkie rekordy z tabeli Item:', allItems);
      
      } catch (error) {
        console.error('Błąd podczas pobierania rekordów z tabeli Item:', error);
      }

      
      



//zamkniecie połaćzenia
await sequelize.close()
