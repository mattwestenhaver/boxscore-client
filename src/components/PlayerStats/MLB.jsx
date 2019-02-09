import React from 'react'

class MLB extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    const { team } = this.props

    return (
      <div className="player-stats-mlb">

        <h4>Pitching</h4>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>IP</th>
              <th>H</th>
              <th>ER</th>
              <th>BB</th>
              <th>K</th>
              <th>HR</th>
              <th>ST-PC</th>
              <th>ERA</th>
            </tr>
            {team.pitchers.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{p.first_name.charAt(0) + '. ' + p.last_name}</td>
                  <td>{p.innings_pitched}</td>
                  <td>{p.hits_allowed}</td>
                  <td>{p.earned_runs}</td>
                  <td>{p.walks}</td>
                  <td>{p.strike_outs}</td>
                  <td>{p.home_runs_allowed}</td>
                  <td>{p.pitches_strikes} - {p.pitch_count}</td>
                  <td>{p.era}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <h4>Hitting</h4>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>RBI</th>
              <th>BB</th>
              <th>K</th>
              <th>AVG</th>
              <th>OBP</th>
              <th>SLG</th>
            </tr>
            {team.batters.map((b, index) => {
              return (
                <tr key={index}>
                  <td>{b.first_name.charAt(0) + '. ' + b.last_name}</td>
                  <td>{b.at_bats}</td>
                  <td>{b.runs}</td>
                  <td>{b.hits}</td>
                  <td>{b.rbi}</td>
                  <td>{b.walks}</td>
                  <td>{b.strike_outs}</td>
                  <td>{b.avg_string}</td>
                  <td>{b.obp_string}</td>
                  <td>{b.slg_string}</td>
                </tr>
              )
            })}
            <tr>
              <th>Totals</th>
              <th>{team.batter_totals.at_bats}</th>
              <th>{team.batter_totals.runs}</th>
              <th>{team.batter_totals.hits}</th>
              <th>{team.batter_totals.rbi}</th>
              <th>{team.batter_totals.walks}</th>
              <th>{team.batter_totals.strike_outs}</th>
              <th>{team.batter_totals.avg_string}</th>
              <th>{team.batter_totals.obp_string}</th>
              <th>{team.batter_totals.slg_string}</th>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default MLB