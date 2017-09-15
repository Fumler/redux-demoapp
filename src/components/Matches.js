import React from "react"

const Matches = ({ matches, handleClick, handleButtonClick }) => {
	return (
		<div>
			<button
				onClick={() => {
					handleButtonClick()
				}}
			>
				Show results
			</button>
			<ul>
				{matches.map((match, i) => (
					<li
						key={i}
						onClick={() => {
							handleClick(match.match_id)
						}}
					>
						<h1>{match.league_name}</h1>
						<div className="list-item">
							<span
								className={
									"radiant score " +
									(match.radiant_win ? "winner " : "") +
									(match.show ? "show" : "")
								}
							>
								{match.radiant_score}
							</span>
							<span className="radiant team">{match.radiant_name}</span>
							<span className="vs">VS</span>
							<span className="dire team">{match.dire_name}</span>
							<span
								className={
									"dire score " +
									(!match.radiant_win ? "winner " : "") +
									(match.show ? "show" : "")
								}
							>
								{match.dire_score}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Matches
