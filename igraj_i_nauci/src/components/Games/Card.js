import React, {Component} from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (!this.props.matched && !this.props.imageUp) {
            this.props.onClick(this.props.id, this.props.image);
        }
    }

    render() {
        let imPath = '../../images/games/';
        if (this.props.imageUp) {
            imPath = imPath + this.props.image + '.png';
        } else {
            imPath = imPath + 'back.png';
        }
        let tmp = 'back';
        if(this.props.imageUp)
            tmp = this.props.image;

        return (
            <img className={"memory-card img-fluid"} src={require('../../images/games/'+ tmp +'.png')}  alt='' onClick={this.onClick} />
        );
    };
}
export default Card;