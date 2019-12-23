import React, { Component } from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";
import Grid from '@material-ui/core/Grid';

class Contacts extends Component {
    state = {
        urls: this.props.urls
    }

    //Handle async catchphrase urls retriving
    componentDidUpdate(prevProps) {
        if (prevProps.urls !== this.props.urls) {
            this.setState({ urls: this.props.urls });
        }
    }

    render() {
        if (this.state.urls.length === 0) { return null };
        return (
            <div style={listStyle}>
                <Grid container style={rowStyle}>
                    <Grid item xs={12} style={{  }}>
                        {this.props.contacts.map((contact) => (
                            <Contact key={contact.id} contact={contact} url={this.state.urls[contact.id]}/>
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