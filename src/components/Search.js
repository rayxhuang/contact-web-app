import React, { Component } from "react";

class Search extends Component {
    state = {
        search: ""
    }

    //Search field
    onChange = (e) => this.setState({ search: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searching(this.state.search);
        //this.setState({ search: "" });
    }

    showAll = () => {
        this.setState({ search: "" });
        this.props.searching("");
        this.inputField.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={searchStyle}>
                    <input
                        id="inputField"
                        ref={(ref) => this.inputField = ref}
                        type="text"
                        name="search"
                        placeholder="Search in contacts"
                        style={{ flex: "10" }}
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="searchBtn"
                        style={{ flex: "1" }}
                    />
                    <input
                        type="button"
                        value="Show All"
                        className="showBtn"
                        style={{ flex: "1" }}
                        onClick={this.showAll}
                    />
                </form>
            </div>
        );
    };
};

const searchStyle = {
    display: "flex",
}

export default Search;
