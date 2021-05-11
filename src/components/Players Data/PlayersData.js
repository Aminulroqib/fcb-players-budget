import React, { useEffect } from 'react';
import { useState } from 'react';
import Data from '../../data/data.json'
import './PlayersData.css'
import Players from '../../Players/Players'
import Cart from '../Cart/Cart'
import PlayersInfo from '../PlayersInfo/PlayersInfo'

const PlayersData = () => {
    const [players, setPlayers] = useState(Data)
    const [cart, setCart] = useState([])
    const [playersNS, setPlayersNS] = useState([])
    useEffect(() => {
        setPlayers(players)
    }, [])
    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
        const newPlayersNS = [...playersNS, player]
        setPlayersNS(newPlayersNS);
    }
    return (
        <div className='playersData-container'>
            <div className='players-container'>
                {
                    players.map(player => <Players
                        handleAddPlayer={handleAddPlayer} player={player}></Players>)
                }
            </div>
            <div>
                <Cart cart={cart} ></Cart>
                <div>
                    <PlayersInfo playersNS={playersNS}> </PlayersInfo>
                </div>
            </div>

        </div>
    );
};

export default PlayersData;