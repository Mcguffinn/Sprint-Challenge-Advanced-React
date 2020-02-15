import React from 'react';
import axios from 'axios';

import { PlayerCard } from './PlayerCard';

class Players extends React.Component {
  state = { players: [] };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log(response.data);
      this.setState({ players: response.data });
    })
    .catch(error => {
      console.log("No player data returned", error)
    })
  }

  render() {
    const { players } = this.state;

    if (players === []) {
      return <div>Loading...</div>
    }

    return (
      players.map((players, index) => {
        return (
          <PlayerCard key={index} players={players} />
        )
      })
    );
  }
}

export default Players;