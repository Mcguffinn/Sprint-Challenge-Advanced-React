import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import {PlayerCard} from './PlayerCard'

function Player() {
    const [list, updateList] = useState([]);

    useEffect(()=>{
        axios
            .get('http://localhost:5000/api/players')
            .then(res => updateList(res.data))
        },[])

    // console.log(playerList())
    // console.log(list.forEach(ele=> console.log(ele)));
    
    return (
        <div>
            {list.map((player, index) =>(
                // <p>{console.log(player)}</p>
                <PlayerCard 
                    key = {index}
                    player ={player}
                />
            ))}
        </div>
    );
}

export default Player;