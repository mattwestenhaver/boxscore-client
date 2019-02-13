import axios from 'axios'

class AuthClient {

  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001/'
    })
  }

  getAllGames() {
    return this.request({ method: "Get", url: '/games' })
      .then(response => {
        return response.data.games
      })
  }

  getGame(id) {
    return this.request({ method: "Get", url: `${id}`})
      .then(response => {
        return response
      })
  }

  initializeDB() {
    return this.request({ method: "Get", url: '/games/init' })
      .then(response => {
        return response
      })
  }

  newGame(gameData) {
    return this.request({ method: "Post", url: "/games", data: gameData }).then(response => {
      return response
    })
  }

}

export default new AuthClient()