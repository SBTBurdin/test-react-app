import React, {Component} from 'react';

import './game.css';
import GameInfo from "./game-info/game-info";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            firstUser: true,
            gameBoard: [[], [], []],
            gameScore: []
        };
    }

    cellClickHendler = (event) => {
        const eventId = event.target.id.split('');
        const i = eventId[0];
        const j = eventId[1];
        let user = this.state.firstUser;
        let gameScore = [...this.state.gameScore];

        if (this.state.gameBoard[i][j] === undefined) {
            let newGameBoard = [...this.state.gameBoard];
            newGameBoard[i][j] = user;

            if (this.checkWinGame(i, j)) {
                newGameBoard = [[], [], []];
                gameScore.push(user);
            } else if (!this.checkNullCell()) {
                newGameBoard = [[], [], []];
                gameScore.push(null);
            } else {
                user = !user;
            }

            this.setState({
                firstUser: user,
                gameBoard: newGameBoard,
                gameScore: gameScore
            });
        }
    };

    checkWinGame = (pointI, pointJ) => {
        const arr = this.state.gameBoard;
        const selectedFigure = arr[pointI][pointJ];
        let horizont = true;
        let verticale = true;
        let mainDiagonal = true;
        let antidiagonal = true;

        for (let i = 0; i < 3; i++) {
            if (horizont && !(arr[pointI][i] === selectedFigure)) {
                horizont = false;
            }
            if (verticale && !(arr[i][pointJ] === selectedFigure)) {
                verticale = false;
            }
            if (mainDiagonal && !(arr[i][i] === selectedFigure)) {
                mainDiagonal = false;
            }
            if (antidiagonal && !(arr[i][arr.length - 1 - i] === selectedFigure)) {
                antidiagonal = false;
            }

            if (!horizont && !verticale && !mainDiagonal && !antidiagonal)
                break;
        }

        return horizont || verticale || mainDiagonal || antidiagonal;
    };

    checkNullCell() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state.gameBoard[i][j] === undefined)
                    return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div className='game'>
                {/*<div className="gameTitle">New version of Game</div>*/}
                <div className="gameSide">
                    <table>
                        <tbody>
                        <tr>
                            <td id="00" onClick={this.cellClickHendler}>
                                <PrintImage id={"00"} figure={this.state.gameBoard[0][0]}/>
                            </td>
                            <td id="01" onClick={this.cellClickHendler}>
                                <PrintImage id={"01"} figure={this.state.gameBoard[0][1]}/>
                            </td>
                            <td id="02" onClick={this.cellClickHendler}>
                                <PrintImage id={"02"} figure={this.state.gameBoard[0][2]}/>
                            </td>
                        </tr>
                        <tr>
                            <td id="10" onClick={this.cellClickHendler}>
                                <PrintImage id={"10"} figure={this.state.gameBoard[1][0]}/>
                            </td>
                            <td id="11" onClick={this.cellClickHendler}>
                                <PrintImage id={"11"} figure={this.state.gameBoard[1][1]}/>
                            </td>
                            <td id="12" onClick={this.cellClickHendler}>
                                <PrintImage id={"12"} figure={this.state.gameBoard[1][2]}/>
                            </td>
                        </tr>
                        <tr>
                            <td id="20" onClick={this.cellClickHendler}>
                                <PrintImage id={"20"} figure={this.state.gameBoard[2][0]}/>
                            </td>
                            <td id="21" onClick={this.cellClickHendler}>
                                <PrintImage id={"21"} figure={this.state.gameBoard[2][1]}/>
                            </td>
                            <td id="22" onClick={this.cellClickHendler}>
                                <PrintImage id={"22"} figure={this.state.gameBoard[2][2]}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <GameInfo gameScore={this.state.gameScore}/>
            </div>
        );
    }
}

const PrintImage = ({id, figure}) => {
    const imgSrc = {
        circle: "../img/circle.png",
        close: "../img/close.png"
    };

    if (figure === undefined) {
        return <span></span>;
    } else {
        return <img
            id={id}
            src={
                (figure === true) ? imgSrc.close : imgSrc.circle
            }
            alt="img"/>;
    }
};

export default Game;