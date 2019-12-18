import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    clicked = (e) => {
        //console.log(this.props)
    }

    render() {
        const { id, name } = this.props.contact;
        return (
            <div>
                <a onClick={this.props.clicked.bind(this, id)}>{name}</a>
            </div>
        )
    }
}

//PropTypes
Contact.protoTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;