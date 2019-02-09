import React from 'react'
import MLBStats from './PlayerStats/MLB.jsx'
import NBAStats from './PlayerStats/NBA.jsx'

class Statsheet extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    const { game } = this.props
    return (
      <div className="statsheet">
        <div className="player-stats-col">
          <h3>{game.awayTeam[0].team.abbreviation} Player Stats</h3>
          {game.league === "MLB"
            ? <MLBStats team={game.awayTeam[0]} />
            : null
          }
          {game.league === "NBA"
            ? <NBAStats team={game.awayTeam[0]} />
            : null
          }
        </div>
        <div className="player-stats-col">
          <h3>{game.homeTeam[0].team.abbreviation} Player Stats</h3>
          {game.league === "MLB"
            ? <MLBStats team={game.homeTeam[0]} />
            : null
          }
          {game.league === "NBA"
            ? <NBAStats team={game.homeTeam[0]} />
            : null
          }
        </div>
      </div>
    )
  }
}

export default Statsheet