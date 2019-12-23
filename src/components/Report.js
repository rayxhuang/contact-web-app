import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from 'react-router';
import ReportSort from './reports/ReportSort';
import AddressMap from './reports/AddressMap';

class Report extends Component {
    state = {
        search: "",
        redirect: false,
        anchor: null,
        sort: true,
        s1: '',
        s2: '',
    }

    //Handle redirect event
    link = () => {
        this.setState({ redirect: true });
    }

    //Handle menu pop up
    handleClick = (e) => {
        this.setState({ anchor: e.currentTarget });
    };

    //Handle menu close
    handleClose = () => {
        this.setState({ anchor: null });
    };

    //Handle viewing report 1
    clickReport1 = () => {
        if (this.state.s1 === '') { this.setState({ s1: 'none' }) }
        else { this.setState({ s1: '' }) }
    }

    //Handle viewing report 2
    clickReport2 = () => {
        if (this.state.s2 === '') { this.setState({ s2: 'none' }) }
        else { this.setState({ s2: '' }) }
    }

    //Handle visibility of reports
    sStyle = (i) => {
        if (i === 1) { return { display: this.state.s1 } }
        else if (i === 2) { return { display: this.state.s2 } }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (
            <div style={{ marginBottom: "70px" }}>
                <AppBar position="static" style={{ overflow: "auto", minWidth: "400px" }}>
                    <Toolbar style={{ padding: "0", minWidth: "400px" }}>
                        <Button aria-controls="menu" aria-haspopup="true" onClick={this.handleClick} style={btnStyle}>
                            Menu
                        </Button>
                        <Menu
                            id="menu"
                            anchorEl={this.state.anchor}
                            keepMounted
                            open={Boolean(this.state.anchor)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.link}>Home</MenuItem>
                            <MenuItem onClick={this.clickReport1}>Contacts start with</MenuItem>
                            <MenuItem onClick={this.clickReport2}>Show on Map</MenuItem>
                        </Menu>
                        <Typography variant="h6" style={{ width: "25%" }}>
                            Reports
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <div style={this.sStyle(1)}><ReportSort contacts={this.props.contacts} /></div>
                    <div style={this.sStyle(1)}><Button onClick={this.clickReport1} variant="contained" color="primary" style={{ marginTop: "2%", marginBottom: "2%" }}>Hide</Button></div>
                    <div style={this.sStyle(2)}><h2>Addresses mapped on Google Map</h2></div>
                    <div style={this.sStyle(2)}><AddressMap contacts={this.props.contacts} /></div>
                    <div style={this.sStyle(2)}><Button onClick={this.clickReport2} variant="contained" color="primary" style={{ marginTop: "2%", marginBottom: "2%" }}>Hide</Button></div>
                </div>
            </div>
        );
    };
};

const btnStyle = {
    width: "5%",
    marginLeft: "2%",
    marginRight: "2%",
    color: "white",
};

export default Report;