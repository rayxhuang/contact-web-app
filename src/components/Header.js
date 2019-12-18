import React, { Component } from "react";
import Search from "./Search"

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1 style={{ fontSize:"150%", color:"white"}}>Simple contact list web app</h1>
                <h2 style={{ fontSize: "100%", color: "white" }}>List of contacts</h2>
                <Search searching={this.props.searching}/>
            </header>
        );
    };
};

const headerStyle = {
    background: "#333",
    color: "#ff",
    textAlign: "center",
    padding: "10px",
}

export default Header;