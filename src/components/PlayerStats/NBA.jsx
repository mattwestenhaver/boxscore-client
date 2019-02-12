import React from 'react'

class NBA extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    const { team } = this.props

    return (
      <div className="player-stats-nba">
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>MIN</th>
              <th>PTS</th>
              <th>FGM</th>
              <th>FGA</th>
              <th>FG%</th>
              <th>REB</th>
              <th>AST</th>
            </tr>
            {team.stats.map((p, index) => {
              return(
                p.is_starter
                  ? <tr key={index} className="starter">
                      <td className="player-name">{p.first_name.charAt(0) + '. ' + p.last_name}</td>
                      <td>{p.minutes}</td>
                      <td>{p.points}</td>
                      <td>{p.field_goals_made}</td>
                      <td>{p.field_goals_attempted}</td>
                      <td>{p.field_goal_percentage}</td>
                      <td>{p.defensive_rebounds + p.offensive_rebounds}</td>
                      <td>{p.assists}</td>
                    </tr>
                  : null
              )
            })}
            {team.stats.map((p, index) => {
              return(
                !p.is_starter
                  ? <tr key={index}>
                      <td className="player-name">{p.first_name.charAt(0) + '. ' + p.last_name}</td>
                      <td>{p.minutes}</td>
                      <td>{p.points}</td>
                      <td>{p.field_goals_made}</td>
                      <td>{p.field_goals_attempted}</td>
                      <td>{p.field_goal_percentage}</td>
                      <td>{p.defensive_rebounds + p.offensive_rebounds}</td>
                      <td>{p.assists}</td>
                    </tr>
                  : null
              )
            })}
            <tr>
              <th>Totals</th>
              <th></th>
              <th>{team.totals.points}</th>
              <th>{team.totals.field_goals_made}</th>
              <th>{team.totals.field_goals_attempted}</th>
              <th>{team.totals.field_goal_percentage}</th>
              <th>{team.totals.defensive_rebounds + team.totals.offensive_rebounds}</th>
              <th>{team.totals.assists}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default NBA