import React, { Component } from 'react';
import axios from "axios";

import './css/App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
    state = {
        orgContacts: [],
        contacts: []
    };

    //Get request when App component is mounted
    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(res => this.setState({ orgContacts: res.data, contacts: res.data }))
    }

    //Search field
    searching = (search) => {
        console.log("App.js is searching " + search)
        if (search !== "") {
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

    clicked = (id) => {
        console.log(id)
    }

    render() {
        console.log(this.state.contact);
        return (
            <div className="App">
                <Header searching={this.searching}/>
                <MainContent contacts={this.state.contacts} clicked={this.clicked}/>
                <Footer />
            </div>
        );
    };
}

export default App;