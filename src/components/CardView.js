import React from "react";

class CardView extends React.Component {

//    constructor(props) {
//        super(props);
//    }

    render() {
        return (
            <img src={this.props.mtgCard.imageUrl} alt={this.props.mtgCard.name}/>
        );
    }
}

export default CardView;