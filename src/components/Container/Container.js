import React, { Component } from "react";

import "./style.css";

import Card from "../Card/Card";
import images from "../../cards.json";

class Container extends Component {

    state = {
        images,
        score: 0,
        highscore: 0,
        clickedArray: []
    };

    shuffleCards = () => {
        let shuffled = this.randomChars(images);
        this.setState({
            images: shuffled
        });
    };

    randomChars = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    increment = () => {
        const incScore = this.state.score + 1;
        this.setState({
            score: incScore
        })
        console.log(this.state.score);
        this.shuffleCards();
    };

    handleClick = event => {
        this.increment();
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.images.map(card => (
                        <Card
                            id={card.id}
                            key={card.id}
                            name={card.name}
                            src={card.img_URL}
                            alt={card.name}
                            handleClick={this.handleClick}
                        />
                    ))}
                </div>
            </div>
        )
    };
};

export default Container;