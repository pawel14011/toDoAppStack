import styles from './Item.module.css'
export function Item({ items, setter, index, setErr, itemContent }) {
	function prevItem() {
		console.log('przed wysylka', itemContent)
		fetch(`http://localhost:3000/item/up/${index}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemContent),
		})
			.then(res => res.json())
			.then(res => {
				setter(res)
			})
	}

	function nextItem() {
		console.log('przed wysylka', itemContent)
		fetch(`http://localhost:3000/item/down/${index}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemContent),
		})
			.then(res => res.json())
			.then(res => {
				setter(res)
			})
	}

	function deleteItem(e) {
		e.preventDefault()

		fetch(`http://localhost:3000/item/${items.id}`, {
			method: 'DELETE',
		})
			.then(res => {
				if (res.ok) {
					setter(prev => prev.filter(todo => todo.id !== items.id))
				} else {
					setErr('Błąd podczas usuwania!')
				}
			})
			.catch(() => {
				setErr('Błąd podczas usuwania!')
				setTimeout(() => {
					setErr(null)
				}, 1000)
			})

		//obejscie backendu
		//setter(prev => prev.filter(todo => todo.id !== items.id))
	}

	function isDone(e) {
		e.preventDefault()

		fetch(`http://localhost:3000/item/${items.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ finished: true }),
		})
			.then(res => {
				if (res.ok) return res.json()
				else {
					() => {
						setErr('Błąd podczas update!')
						setTimeout(() => {
							setErr(null)
						}, 1000)
					}
				}
			})
			.then(res => {
				console.log(res)
				setter(prev =>
					prev.map(todo => {
						if (todo.id != items.id) {
							return todo
						} else {
							return { ...todo, finished: true }
						}
					})
				)
			})

		setter(prev =>
			prev.map(todo => {
				if (todo.id != items.id) {
					return todo
				} else {
					return { ...todo, finished: true }
				}
			})
		)
	}
	return (
		<>
			<form className={styles.formItem}>
				<p className={items.finished == true ? `${styles.inputValue} ${styles.through}` : `${styles.inputValue}`}>
					{items.value}
				</p>
				<section className={styles.sectionArrow}>
					<div className={styles.arrow} onClick={prevItem}>
						⏫
					</div>
					<div className={styles.arrow} onClick={nextItem}>
						⏬
					</div>
				</section>

				<section>
					<button
						className={`${styles.btnFinish} ${items.finished == true ? styles.displayNone : ''}`}
						onClick={e => isDone(e)}>
						Zrobione
					</button>
					<button
						className={styles.btnDelete}
						onClick={e => {
							deleteItem(e)
						}}>
						Usuń
					</button>
				</section>
			</form>
		</>
	)
}
