import React from 'react'
import auth from '../auth.js'
import { NavLink } from 'react-router-dom'

import Statsheet from './Statsheet.jsx'
import EventInfo from './EventInfo.jsx'

import backIcon from '../images/back_icon.png'

class Boxscore extends React.Component {

  constructor(props) {
    super()
    this.state = {
      game: null
    }
  }

  getGame() {
    auth.getGame(this.props.location.pathname)
      .then(response => {
        this.setState({
          game: response.data.updatedGame || response.data.game
        })
      })
  }

  componentDidMount() {
    this.getGame()
  }

  render() {

    const { game } = this.state

    return(
      this.state.game
      ? <div className='boxscore-container'>
          <div className='back'>
            <NavLink to='/'>
              <img src={backIcon} alt='back-icon' />
              <h3>All Scores</h3>
            </NavLink>
          </div>
          <h1>{game.awayTeam[0].team.full_name} @ {game.homeTeam[0].team.full_name}</h1>
          <h3>{game.gameInfo[0].event_information.status === 'completed' ? "Final" : game.gameInfo[0].event_information.status}</h3>
          <div className='boxscore'>
            <table>
              <tbody>

                <tr>
                  <th></th>
                  {game.homeTeam[0].period_scores.map((p, index) => {
                    return (
                      <th key={index}>{index + 1}</th>
                    )
                  })}

                  {game.league === 'MLB' ? <th>R</th> : null}
                  {game.league === 'MLB' ? <th>H</th> : null}
                  {game.league === 'MLB' ? <th>E</th> : null}

                  {game.league === 'NBA' ? <th>Total</th> : null}
                </tr>

                <tr>
                  <td className="team-name">{game.awayTeam[0].team.abbreviation}</td>
                  {game.awayTeam[0].period_scores.map((p, index) => {
                    return (
                      <td key={index}>{p}</td>
                    )
                  })}

                  {game.league === 'NBA' ? <td>{game.awayTeam[0].period_scores.reduce((a, b) => a + b, 0)}</td> : null}

                  {game.league === 'MLB' ? <td>{game.awayTeam[0].period_scores.reduce((a, b) => a + b, 0)}</td> : null}
                  {game.league === 'MLB' ? <td>{game.awayTeam[0].batter_totals.hits}</td> : null}
                  {game.league === 'MLB' ? <td>{game.awayTeam[0].errors}</td> : null}

                </tr>

                <tr>
                  <td className="team-name">{game.homeTeam[0].team.abbreviation}</td>
                  {game.homeTeam[0].period_scores.map((p, index) => {
                    return (
                      <td key={index}>{p}</td>
                    )
                  })}

                  {game.league === 'NBA' ? <td>{game.homeTeam[0].period_scores.reduce((a, b) => a + b, 0)}</td> : null}

                  {game.league === 'MLB' ? <td>{game.homeTeam[0].period_scores.reduce((a, b) => a + b, 0)}</td> : null}
                  {game.league === 'MLB' ? <td>{game.homeTeam[0].batter_totals.hits}</td> : null}
                  {game.league === 'MLB' ? <td>{game.homeTeam[0].errors}</td> : null}
                </tr>

              </tbody>
            </table>
          </div><hr className='boxscore-hr' />
          <Statsheet game={game} />
          <EventInfo game={game} />
        </div>
      : <div>
          <NavLink to='/scores'>All Scores</NavLink>
          <h1>Loading Game...</h1>
        </div>
    )
  }
}

export default Boxscore