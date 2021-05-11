import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
    return (
        <div className='card'>
            <div>
                <img src={props.player?.image} alt="" />
            </div>
            <div >
            <h4>Name: {props.player?.name}</h4>
            <h5>Salary: {props.player?.salary} M</h5>
            <button 
                className='btn btn-danger'
                onClick = {() => props.handleAddPlayer(props.player)}
            >   <FontAwesomeIcon icon={faShoppingBag} /> Add To Cart
            </button>
            </div>
        </div>
    );
};

export default Players;