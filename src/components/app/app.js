import React from "react"
import Header from "../header"
import SearchBar from "../search-bar"
import List from "../list"
import Filters from "../filter-buttons"
import ButtonAddItem from "../button-add-item"
import AppHeader from "../app-header"
import "./app.css"

export default class App extends React.Component {
	count = 100
	state = {
		text: " ",
		filtrs: "active", // all, active, done
		listProps: [
			this.createNewItems("Drink coffee"),
			this.createNewItems("Working..."),
			this.createNewItems("Smillly"),
		],
	}
	createNewItems(label) {
		const newItem = {
			label: label,
			important: false,
			done: false,
			id: this.count++,
		}
		return newItem
	}
	onDelete = (id) => {
		this.setState(({ listProps }) => {
			const idx = listProps.findIndex((el) => el.id === id)
			let newArray = [...listProps.slice(0, idx), ...listProps.slice(idx + 1)]
			return {
				listProps: newArray,
			}
		})
	}
	AddItem = (text) => {
		const newItem = this.createNewItems(text)
		this.setState(({ listProps }) => {
			let newArray = [...listProps, newItem]
			return {
				listProps: newArray,
			}
		})
	}
	onToggleImportant = (id) => {
		this.setState(({ listProps }) => {
			return { listProps: this.toggleProperty(listProps, id, "important") }
		})
	}
	onToggleDone = (id) => {
		this.setState(({ listProps }) => {
			return { listProps: this.toggleProperty(listProps, id, "done") }
		})
	}
	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id)
		const oldItem = arr[idx]
		const newItem = { ...oldItem, [propName]: !oldItem[propName] }
		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
	}
	search(arr, text) {
		if (text.trim().length > 0) {
			let newArray = arr.filter((item) => {
				return item.label.toLowerCase().startsWith(text.toLowerCase())
			})
			return newArray
		} else {
			return arr
		}
	}
	onChangeState = (text) => {
		this.setState({
			text: text,
		})
	}
	onFilter(arr, filtrs) {
		console.log("Filters", filtrs)
		switch (filtrs) {
			case "all":
				return arr
			case "active":
				return arr.filter((item) => !item.done)
			case "done":
				return arr.filter((item) => item.done)
			default:
				return arr
		}
	}
	onChangeFilter = (filtrs) => {
		console.log(filtrs)
		this.setState({
			filtrs: filtrs,
		})
	}
	render() {
		const { listProps, text, filtrs } = this.state
		const visibleItems = this.onFilter(this.search(listProps, text), filtrs)
		const todoCount = listProps.filter((el) => el.done).length
		const todoDone = listProps.length - todoCount
		return (
			<div className='d-flex flex-column w-50 container app'>
				<div className='header d-flex align-items-end justify-content-around header'>
					<Header />
					<AppHeader toDo={todoCount} done={todoDone} />
				</div>
				<div className='d-flex flex-row mb-2 align-items-center'>
					<SearchBar onChangeState={this.onChangeState} />
					<Filters onChangeFilter={this.onChangeFilter} filtrs={filtrs} />
				</div>
				<List
					listProps={visibleItems}
					onDelete={this.onDelete}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<ButtonAddItem onAddItem={this.AddItem} />
			</div>
		)
	}
}
