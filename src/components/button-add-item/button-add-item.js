import React from "react"
import "./button-add-item.css"

export default class ButtonAddItem extends React.Component {
	state = {
		label: "",
	}
	onChangeLabel = (e) => {
		this.setState({ label: e.target.value })
	}
	onSubmit = (event) => {
		event.preventDefault()
		this.props.onAddItem(this.state.label)
		this.setState({
			label: "",
		})
	}
	render() {
		return (
			<form action='' className='d-flex align-items-center form-add-item' onSubmit={this.onSubmit}>
				<input
					type='text'
					onChange={this.onChangeLabel}
					placeholder="What's new task ?"
					className='form-control'
					value={this.state.label}
				/>
				<button
					type='button'
					className='btn btn-outline-secondary button-add-item'
					onClick={this.onSubmit}
				>
					Add new Item{" "}
				</button>
			</form>
		)
	}
}
