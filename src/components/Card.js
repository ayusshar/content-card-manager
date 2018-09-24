import React, { Component } from 'react';
import classNames from 'classnames';
import CardTitle from '../views/CardTitle';
import CardDescription from '../views/CardDescription';
import CardBack from '../views/CardBack';
import CardActions from '../views/CardActions';
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            toFlip: false,
        }
        this.handleHover = this.handleHover.bind(this);
        this.openCard = this.openCard.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.printCard = this.printCard.bind(this);
    }

    handleHover() {
        this.setState({
            isHover: !this.state.isHover
        });
    }

    openCard() {
        this.setState({
            toFlip: true
        })
    }

    closeCard() {
        this.setState({
            toFlip: false
        })
    }

    printCard() {
        //Implementation pending to print content of card only???
        window.print();
    }
    render() {
        const { deleteCard, details } = this.props;
        const { title, image, desc, full } = details;
        const path = '../images/' + image;
        const style = {
            backgroundImage: 'url(' + path + ')'
        }
        const flipClass = classNames({
            'ds-flip-card': true,
            'hover': this.state.toFlip
        });

        const printClass = classNames({
            'ds-cards__wrapper': true,
            'front': true,
            'to-print': this.state.toPrint
        });
        return (
            <div className={flipClass} onMouseLeave={this.closeCard}>
                <div className="ds-flipper">
                    <div className="ds-cards__wrapper front" style={style} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <CardTitle title={title} />
                        <CardDescription desc={desc} image={image} />
                        {
                            this.state.isHover && <CardActions deleteCard={deleteCard} openCard={this.openCard} printCard={this.printCard} />
                        }
                    </div>
                    <div className="back">
                        <CardBack full={full} />
                    </div>
                </div>
            </div>
        )
    }
}