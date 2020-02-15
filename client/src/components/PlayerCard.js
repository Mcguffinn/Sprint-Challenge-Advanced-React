import React from 'react';

export const PlayerCard = (props) => {
  const { name, country, searches } = props.players;

  return (
    <div>
      <p data-testid='card-test'>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
}