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
      this.setState({
        games: response
      })
    })
  }

  componentDidMount() {
    this.getGames()
  }

  render() {
    return (
      <div>
        {this.state.games.map((g, index) => {
          return(
            <Link key={index} to={`/games/${g._id}`}>
              <div className='preview-container'>
                <h2>{g.awayTeam[0].team.full_name} vs {g.homeTeam[0].team.full_name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Preview