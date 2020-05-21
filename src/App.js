import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import './css/App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Report from './components/Report';


class App extends Component {
    state = {
        orgContacts: [],
        contacts: [],
        order: true,
    };

    //Construct, get data from JSON placehodler, sort contacts, and get urls from Image generator API
    constructor(props) {
        super(props);
        axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
            this.setState({ orgContacts: res.data, contacts: res.data })
        });
    }

    //Handle sorting contacts and switching between ascending and descending
    sortContacts() {
        let i = this.state.order; //if true, the order is ascending otherwise descending
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();

            let comparison = 0;
            if (i) {
                if (A > B) {
                    comparison = 1;
                } else if (A < B) {
                    comparison = -1;
                }
            } else {
                if (A > B) {
                    comparison = -1;
                } else if (A < B) {
                    comparison = 1;
                }
            }
            return comparison;
        }
        this.state.contacts.sort(compare);
    }

    //Handle switching between ascending order and descending
    sorting = (sort) => {
        this.setState({ order: !sort });
        this.sortContacts();
    }

    //Search field
    searching = (search) => {
        if (search !== "" && search !== " ") {
            const filter = search.toString().toLowerCase();
            //Filter code
            this.setState({
                contacts: [...this.state.orgContacts.filter(contact =>
                    contact.name.toString().toLowerCase().includes(filter))]
            });
        } else {
            this.setState({ contacts: [...this.state.orgContacts] });
        }
    }

    //Use router to switch between / and /report
    render() {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <div className="App" style={appStyle}>
                        <Header searching={this.searching} sorting={this.sorting}/>
                        <Contacts contacts={this.state.contacts}/>
                        <Footer />
                    </div>
                )} />
                <Route path="/report" render={props => (
                    <div className="Report" style={appStyle}>
                        <Report contacts={this.state.orgContacts}/>
                        <Footer />
                    </div>
                )} />
            </Router>
        );
    };
}

const appStyle = {
    width: "100%",
    margin: "0",
    padding: "0",
    //minWidth: "762px",
}

export default App;