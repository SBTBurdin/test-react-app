import React from 'react';

const GameInfo = ({gameScore}) => (
    <div className="gameInfo">
        <h3>Information</h3>
        <table>
            <thead>
            <tr>
                <td>User 1</td>
                <td>User 2</td>
            </tr>
            </thead>
            <tbody>
            {
                gameScore.map((score) => (<Score score={score}/>))
            }
            </tbody>
        </table>
    </div>
);

const Score = ({score}) => (
    <tr>
        <td>{(score === true) ? "Win" : "Loos"}</td>
        <td>{(score === false) ? "Win" : "Loos"}</td>
    </tr>
);

export default GameInfo;