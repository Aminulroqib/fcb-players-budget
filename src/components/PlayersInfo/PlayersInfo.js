import React from 'react';

const PlayersInfo = (props) => {
    const playersNS = props.playersNS
    console.log(playersNS);
    // const playerName = playersNS.map(pName => pName.name)
    // const playerSalary = playersNS.map(pSalary => pSalary.salary);
    // console.log(playerName, playerSalary)
    return (
        <div>
            <ul>
                {
                   playersNS.map(p => <li>{p.name}-{p.salary} M</li>)
                }
            </ul>
        </div>
    );
};

export default PlayersInfo;