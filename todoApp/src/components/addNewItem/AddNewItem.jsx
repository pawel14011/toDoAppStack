import { useState } from 'react'
import styles from './AddNewItem.module.css'
export function AddNewItem({ addItem, error }) {
	const [inputValue, setInputValue] = useState('')
	
	return (
		<>
			<form
				onSubmit={e => {
					e.preventDefault()
					addItem(inputValue)
				}}
				className={styles.formSection}>
				<p>{error}</p>
				<input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />

				<button className={styles.btnAddTask}>Dodaj</button>
			</form>
		</>
	)
}
