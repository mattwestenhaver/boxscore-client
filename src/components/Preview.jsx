import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../auth.js'

class Preview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  getGames() {
    auth.getAllGames().then(response => {
      if(response.length === 2) {
        this.setState({
          games: response
        })
      } else {
        auth.initializeDB().then(response2 => {
          if(response2.data.success) {
            auth.getAllGames().then(response3 => {
              this.setState({
                games: response3
              })
            })
          }
        })
      }
    })
  }

  componentDidMount() {
    this.getGames()
  }

  render() {
    return (
      <div>
        <h1>Recent Games</h1>
        {this.state.games.map((g, index) => {
          return(
            <Link to={`/games/${g._id}`} key={index} className='preview-container'>
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">
                      <h3>{g.gameInfo[0].event_information.status === 'completed' ? "Final Score" : g.gameInfo[0].event_information.status}</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='team-name'>
                      <h2>{g.awayTeam[0].team.full_name}</h2>
                    </td>
                    <td>
                      <h2>{g.awayTeam[0].period_scores.reduce((a, b) => a + b, 0)}</h2>
                    </td>
                  </tr>
                  <tr>
                    <td className='team-name'>
                      <h2>{g.homeTeam[0].team.full_name}</h2>
                    </td>
                    <td>
                      <h2>{g.homeTeam[0].period_scores.reduce((a, b) => a + b, 0)}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Preview