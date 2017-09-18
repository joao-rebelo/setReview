import React from "react";
import CardView from "./CardView";

const columnStyle = {
    width: "225px",
    float: "left"
};

class CardLayout extends React.Component {



//    constructor(props) {
//        super(props);
//    }

    render() {

        var cardsByCmc = this.props.mtgCards.reduce((resMap, aCard) => {
            if(!resMap[aCard.cmc]) {
                resMap[aCard.cmc] = [];
            }

            resMap[aCard.cmc].push(aCard);
            return resMap;
        }, []);

        const columns = cardsByCmc.map(aColumn => {
            const columnCards = aColumn
                .map(aCard => <CardView key={aCard.name} mtgCard={aCard}/>);

            return (
                <div style={columnStyle}>
                    {columnCards}
                </div>
            );
        })

        return (
            <div>
                {columns}
            </div>
        );
    }
}

export default CardLayout;