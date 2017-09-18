const SCRYFALL_BASE_URL = 'https://img.scryfall.com/cards/';
const SCRYFALL_NORMAL_IMAGE = 'normal/';
const SCRYFALL_LARGE_IMAGE = 'large/';
const SCRYFALL_SMALL_IMAGE = 'small/';
const SCRYFALL_LANGUAGE = 'en/';


class MtgCard {


    constructor(name, mtgSet, imageUrl, colors, supertypes, types, subtypes, cmc, rarity, setNumber, power, toughness) {
        this.name = name;
        this.mtgSet = mtgSet;
        this.imageUrl = imageUrl;
        this.colors = colors;
        this.superTypes = supertypes;
        this.types = types;
        this.subTypes = subtypes;
        this.cmc = cmc;
        this.rarity = rarity;
        this.setNumber = setNumber;
        this.power = power;
        this.toughness = toughness;
    }

    getScryfallImageUrl() {
        return SCRYFALL_BASE_URL + SCRYFALL_NORMAL_IMAGE + SCRYFALL_LANGUAGE + this.mtgSet + '/' + this.setNumber + '.jpg';
    }

    getScryfallLargeImageUrl() {
        return SCRYFALL_BASE_URL + SCRYFALL_LARGE_IMAGE + SCRYFALL_LANGUAGE + this.mtgSet + '/' + this.setNumber + '.jpg';
    }

    getScryfallSmallImageUrl() {
        return SCRYFALL_BASE_URL + SCRYFALL_SMALL_IMAGE + SCRYFALL_LANGUAGE + this.mtgSet + '/' + this.setNumber + '.jpg';
    }
}

export default MtgCard;