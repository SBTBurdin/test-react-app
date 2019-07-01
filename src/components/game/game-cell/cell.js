import React, { Component } from 'react';

class Cell extends Component {
    constructor({ cell }) {
        super();

        this.state = {
            imgCircle: "../img/circle.png",
            imgClose: "../img/close.png"
        };
    }

    getImgSrc = () => {
        return "asdasd";
    };

    render() {
        return (
            <div className='Cell'>
                {/*<img src={this.getImgSrc().bind(this)}/>*/}
            </div>
        );
    }
}

export default Cell;