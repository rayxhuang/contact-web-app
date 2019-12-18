import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

class MainContent extends Component {
    render(){
        return (
            this.props.contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} clicked=
                {this.props.clicked}/>
            ))
        );
    };
};

//PropTypes
MainContent.protoTypes = {
    contact: PropTypes.array.isRequired
}

export default MainContent;