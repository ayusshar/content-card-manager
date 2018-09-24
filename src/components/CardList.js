import React, { Component } from 'react';
import Card from './Card';
import Header from '../views/Header';
import { content } from '../data/content';
export default class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
        this.openCard = this.openCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.printCard = this.printCard.bind(this);
        this.resetCard = this.resetCard.bind(this);
    }
    componentWillMount() {
        this.resetCard();
    }

    openCard() {

    }

    deleteCard(index) {
        const posts = this.state.posts;
        posts.splice(index, 1);
        this.setState({ posts });
    }

    printCard() {

    }

    resetCard() {
        const data = content.slice();
        this.setState({
            posts: data
        });
    }

    render() {
        return (
            <div className="ds-content">
                <Header resetCard={this.resetCard} />


                <div className="ds-cards">
                    {
                        this.state.posts.map((value, index) =>
                            <Card key={index}
                                details={value}
                                openCard={this.openCard}
                                deleteCard={() => this.deleteCard(index)}
                                printCard={this.printCard}
                            />)
                    }

                </div>
            </div>
        )

    }
}