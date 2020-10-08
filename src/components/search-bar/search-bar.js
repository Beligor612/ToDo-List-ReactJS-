import React from "react"
import "./search-bar.css"

export default class SearchBar extends React.Component {
	onChangeInput = (e) => {
		this.props.onChangeState(e.target.value)
	}
	render() {
		return (
			<form className='search-bar'>
				<input
					type='text'
					placeholder='Start Search...'
					className='search-input'
					onChange={this.onChangeInput}
				/>
			</form>
		)
	}
}
