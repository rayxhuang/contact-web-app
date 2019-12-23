import React, { Component } from "react";

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Redirect } from 'react-router';

class Header extends Component {
    state = {
        search: "",
        redirect: false,
        anchor: null,
        sort: true,
    }

    //Search field
    onChange = (e) => this.setState({ search: e.target.value });

    //Submit search term
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searching(this.state.search);
    }

    //Handle show all event
    showAll = () => {
        this.setState({ search: "" });
        this.props.searching("");
        this.inputField.value = "";
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

    //Handle clear button
    handleClickClear = () => {
        this.setState({ search: "" });
        this.inputField.value = "";
        //console.log(this.state.search)
    };

    //Handle changing sorting order
    sortContacts = () => {
        this.setState({ sort: !this.state.sort });
        this.props.sorting(this.state.sort);
    }

    render() {
        //Hangle redirect event
        if (this.state.redirect) {
            return <Redirect push to="/report" />;
        }

        return (
            <AppBar position="static" style={ headerStyle }>
                <Toolbar style={{ padding: "0" }}>
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
                        <MenuItem onClick={this.sortContacts}>Change Order</MenuItem>
                        <MenuItem onClick={this.showAll}>Show All</MenuItem>
                        <MenuItem onClick={this.link}>Reports</MenuItem>
                    </Menu>
                    <Typography variant="h6" style={{ width: "20%" }}>
                        Contacts App
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={this.onSubmit} style={{ margin: "auto", display: "inlineBlock", width: "70%", textAlign: "right" }}>
                        <FormControl style={{ marginRight: "1.5%" }}>
                            <InputLabel htmlFor="inputField" style={{ color: "white" }}>Search contacts</InputLabel>
                            <Input
                                id="inputField"
                                ref={(ref) => this.inputField = ref}
                                color="secondary"
                                value={this.state.search}
                                onChange={this.onChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="clear search"
                                            onClick={this.handleClickClear}
                                        >
                                            {<ClearIcon color="secondary" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: "1%", marginRight: "1.5%" }}
                        >
                            Search
                        </Button>
                    </form>
                </Toolbar>
            </AppBar>
        );
    };
};

const headerStyle = {
    position: "sticky",
    top: "0",
    overflow: "auto",
    minWidth: "640px",
    display: "block",
};

const btnStyle = {
    width: "5%",
    marginLeft: "2%",
    marginRight: "2%",
    color: "white",
};

export default Header;