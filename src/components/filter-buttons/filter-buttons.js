import React from "react"
import "./filter-buttons.css"

export default class Filters extends React.Component {
	buttons = [
		{ name: "all", label: "All" },
		{ name: "active", label: "Active" },
		{ name: "done", label: "Done" },
	]

	render() {
		const { onChangeFilter, filtrs } = this.props
		const buttons = this.buttons.map(({ label, name }) => {
			const isActive = filtrs === name
			const clazz = isActive ? "btn-primary" : "btn-outline-info"
			return (
				<button
					type='button'
					className={`btn ${clazz}`}
					key={name}
					onClick={() => onChangeFilter(name)}
				>
					{label}
				</button>
			)
		})
		return <div className='filter-buttons'>{buttons}</div>
	}
}
