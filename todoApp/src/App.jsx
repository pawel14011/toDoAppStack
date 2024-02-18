import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { AddNewItem } from './components/addNewItem/AddNewItem'
import { Item } from './components/item/Item'
import { getSubHeading } from './utils/getSubHeading'
import { v4 as uuidv4 } from 'uuid'

// const data = [
// 	{
// 		value: 'pierwsze zadanie',
// 		finished: false,
// 		id: uuidv4(),
// 	},
// ]

function App() {
	
	const [itemsValue, setItemsValue] = useState([])
	const [showInputAddTask, setShowInputAddTask] = useState(false)
	const [error, setError] = useState(false)


	useEffect(() => {
		fetch('http://localhost:3000/item')
			.then(response => response.json())
			.then(res => setItemsValue(res))
	}, [])



	function addItem(v) {
		const newItemToDo = { value: v, finished: false, id: uuidv4() }
		//wysylanie do backendu

		fetch('http://localhost:3000/item', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newItemToDo),
		})
			.then(res => res.json())
			.then(res => {
				setShowInputAddTask(false)
				setItemsValue(res)
			})
			.catch(() => {
				setError('Wystąpił błąd przy dodawaniu!')
				setTimeout(() => setError(null), 1000)
			})

		// ominiecie backendu
		// setShowInputAddTask(false)
		// setItemsValue(prev => [...prev, newItemToDo])
	}

	return (
		<>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.headerTitle}>
						<section>
							<h1>Do zrobienia</h1>
							<p>{getSubHeading(itemsValue.length)}</p>
						</section>

						{!showInputAddTask && (
							<section>
								<button className={styles.btnAdd} onClick={() => setShowInputAddTask(true)}>
									+
								</button>
							</section>
						)}
					</header>

					{showInputAddTask && <AddNewItem addItem={v => addItem(v)} error={error} />}

					<div>
						{itemsValue.map((i, index) => (
							<Item key={i.id} items={i} setter={setItemsValue} index={index} setErr={setError} itemContent={itemsValue} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
