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
            <div key={index} className='preview-container'>
              {/* <h3>{g.gameInfo[0].event_information.status === 'completed' ? "Final" : g.gameInfo[0].event_information.status}</h3>
              <h3 className='preview-score'>{g.awayTeam[0].period_scores.reduce((a, b) => a + b, 0)} - {g.homeTeam[0].period_scores.reduce((a, b) => a + b, 0)}</h3> */}
              <Link to={`/games/${g._id}`}>
                  <h2>{g.awayTeam[0].team.full_name} vs {g.homeTeam[0].team.full_name}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Preview