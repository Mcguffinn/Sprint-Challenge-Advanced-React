import React from "react";

export const PlayerCard = props => {
    const { name, country, searches } = props.player;

    // console.log(props.player.name);
    return(
        
        <div>
            <h2>{name}</h2>
        </div>
    );
}
