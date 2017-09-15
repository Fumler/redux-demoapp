import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchMatches, showResult, showAllResults } from "../app/actions"
import Matches from "../components/Matches"

class AsyncApp extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchMatches(dispatch))
	}

	handleClick(id) {
		const { dispatch } = this.props
		dispatch(showResult(id))
	}

	handleButtonClick() {
		const { dispatch } = this.props
		dispatch(showAllResults())
	}

	render() {
		const { matches, isFetching } = this.props
		return (
			<div>
				{isFetching &&
				matches.length === 0 && (
					<h2 style={{ textAlign: "center" }}>Loading...</h2>
				)}
				{!isFetching && matches.length === 0 && <h2>Empty.</h2>}
				{matches.length > 0 && (
					<div style={{ opacity: isFetching ? 0.5 : 1 }}>
						<Matches
							matches={matches}
							handleClick={this.handleClick.bind(this)}
							handleButtonClick={this.handleButtonClick.bind(this)}
						/>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps(state = { matches: [], isFetching: true }) {
	const { matches, isFetching } = state.matchesReducer
	return {
		matches,
		isFetching,
	}
}

export default connect(mapStateToProps)(AsyncApp)
