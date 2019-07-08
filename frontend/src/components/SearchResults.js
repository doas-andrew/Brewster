import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class SearchResults extends Component {

	componentDidMount() {
		const {search} = this.props.match.params
		console.log(search)
	}
	render() {
		return (
			<div className="page">
			
			</div>
		)
	}
}

export default SearchResults
