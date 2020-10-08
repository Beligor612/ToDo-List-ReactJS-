import React from "react"

import ListItem from "../list-item"
import "./list.css"

export default class List extends React.Component {
	render() {
		const { listProps, onDelete, onToggleImportant, onToggleDone } = this.props
		const listLi = listProps.map((item) => {
			const { id, ...itemProps } = item
			return (
				<li key={id}>
					<ListItem
						{...itemProps}
						onDelete={() => {
							onDelete(id)
						}}
						onToggleImportant={() => onToggleImportant(id)}
						onToggleDone={() => onToggleDone(id)}
					/>
				</li>
			)
		})
		return <ul className='list-group todo-list list-unstyled'> {listLi} </ul>
	}
}
