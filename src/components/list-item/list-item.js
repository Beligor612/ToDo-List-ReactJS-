import React from "react"
import "./list-item.css"

export default class ListItem extends React.Component {
	render() {
		const { label, onDelete, onToggleImportant, onToggleDone, done, important } = this.props
		let className = "list-group-item list-item d-flex justify-content-between align-items-center"
		if (done) {
			className += " done"
		}
		if (important) {
			className += " important"
		}
		return (
			<span className={className}>
				<span onClick={onToggleDone}>{label}</span>
				<span className='buttons'>
					<button type='button' className='btn btn-outline-success' onClick={onToggleImportant}>
						<i className='fas fa-exclamation'> </i>
					</button>
					<button type='button' className='btn btn-outline-danger' onClick={onDelete}>
						<i className='fas fa-trash-alt'> </i>
					</button>
				</span>
			</span>
		)
	}
}
