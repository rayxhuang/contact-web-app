import React, { Component } from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";
import Grid from '@material-ui/core/Grid';

class Contacts extends Component {
    state = {
    }

    render() {
        return (
            <div style={listStyle}>
                <Grid container style={rowStyle}>
                    <Grid item xs={12} style={{  }}>
                        {this.props.contacts.map((contact) => (
                            <Contact key={contact.id} contact={contact}/>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
    
//PropTypes
Contacts.protoTypes = {
    contacts: PropTypes.array.isRequired
}

const listStyle = {
    flexGrow: 1,
    width: "100%",
    minWidth: "640px",
    marginTop: "5%",
    marginBottom: "70px",
}

const rowStyle = {
    width: "50%",
    minWidth: "420px",
    margin: "auto",
}

export default Contacts;