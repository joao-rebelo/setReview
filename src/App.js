import React, { Component } from 'react';
import SetCombo from './components/SetCombo.js';
import MtgSet from './model/MtgSet.js';
import MtgCard from './model/MtgCard.js';
import mtg from 'mtgsdk';
import CardLayout from "./components/CardLayout";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {fetchedSets: [new MtgSet('0', 'Loading')], selectedSet: '0', fetchedCards: []};

        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount() {
        mtg.set.where({border: "black"})
            .then(sets => sets
                .filter(aSet => aSet.type === 'core' || aSet.type === 'expansion')
                .sort(function(setA, setB) {
                    if(setA.releaseDate > setB.releaseDate) {
                        return -1;
                    }
                    return 1;
                })
                .map(aSet => new MtgSet(aSet.code, aSet.name)))
            .then(sets => this.setState({fetchedSets : sets}));
    }

    setSelected(setCode) {
        this.setState({selectedSet: setCode});
        console.log("Selected set: " + setCode);
        var cards = [];
        var emitter = mtg.card.all({set: setCode});
        emitter.on("data", card => cards.push(
            new MtgCard(card.name, card.set, card.imageUrl, card.colors, card.supertypes, card.types, card.subtypes,
                card.cmc, card.rarity, card.number, card.power, card.toughness)));
        emitter.on('end', () => {
            console.log("Finished fetching set cards: " + cards.length);
            this.setState({fetchedCards: cards})
        });
    }

    render() {
        var numberFetchedCards = this.state.fetchedCards.length;
        var numberCards = numberFetchedCards > 0 ? <p>Fetched {numberFetchedCards} cards!</p> : <p></p>;
        var cardA = numberFetchedCards > 0 ? <CardLayout mtgCards={this.state.fetchedCards}/> : <p></p>;

        return (
            <div>
                <p> Select your MTG Set: </p>
                <SetCombo sets={this.state.fetchedSets} onSetSelection={this.setSelected}/>
                {numberCards}
                {cardA}
            </div>
        );
    }
}

export default App;
