import React from "react"
import "./app-header.css"
export default class AppHeader extends React.Component {
	render() {
		const { toDo, done } = this.props
		return (
			<span className='app-header'>
				{toDo} more to do, {done} done
			</span>
		)
	}
	done
}
