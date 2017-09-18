import React from "react";

class SetCombo extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSetSelection(e.target.value);
    }

    render() {
        const options = this.props.sets
                .map((aSet) => <option key={aSet.code} value={aSet.code}>{aSet.name}</option>);

        return (
            <select onChange={this.handleChange}>
                {options}
            </select>
        );
    }
}

export default SetCombo;