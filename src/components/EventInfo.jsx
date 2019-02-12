import React from 'react'

class EventInfo extends React.Component {
  render() {

    const { game } = this.props

    return (
      <div className='information-container'>
        <h2>Game Information</h2><hr />
        <div>
          <h3>{game.gameInfo[0].event_information.season_type === 'regular' ? 'Regular Season Game' : 'Post-Season Game'}</h3>
          <h3>Location: {game.gameInfo[0].event_information.site.city + ', ' + game.gameInfo[0].event_information.site.state} </h3>
          <h3>Stadium: {game.gameInfo[0].event_information.site.name}</h3>
          <h3>Attendance: {game.gameInfo[0].event_information.attendance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <h3>Officials:</h3>
          <ul>
            {game.gameInfo[0].officials.map((o, index) => {
              return (
                <li key={index}>{(o.position ? (o.position + ': ') : '') + o.first_name + ' ' + o.last_name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default EventInfo