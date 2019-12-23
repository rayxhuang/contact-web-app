import React, { Component } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Redirect } from 'react-router';

class Footer extends Component {
    state = {
        redirect: false,
        anchor: null,
    }

    //Handle show all event
    showAll = () => {
        this.setState({ search: "" });
        this.props.searching("");
        this.inputField.value = "";
    }

    //Handle menu pop up
    handleClick = (e) => {
        this.setState({ anchor: e.currentTarget });
    };

    //Handle redirect event
    link = () => {
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/report" />;
        }

        return (
            <AppBar position="static" style={footerStyle}>
                <Toolbar style={{ padding: "0", top: "0", position: "relative", width: "100%" }}>
                    <Typography style={{ marginBottom: "1%", textAlign: "center", width: "100%" }}>
                        Contacts Web App <CopyrightIcon/> 2019 Xianwei Huang
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    };
};

const footerStyle = {
    bottom: "0",
    minWidth: "640px",
    overflowY: "hidden",
    maxHeight: "50px",
    position: "fixed",
    margin: "auto",
    marginLeft: "0",
    //marginRight: "16%",
}

export default Footer;