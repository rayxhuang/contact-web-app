import React, { Component } from "react";
import axios from "axios";
import Marker from './Marker';
import GoogleMapReact from "google-map-react";

class AddressMap extends Component {
    //The default center location is set to Orion Health Auckland office
    //However default zoom is set to 0 because of the locations of this project is spread all over the world map
    static defaultProps = {
        center: { lat: -36.864027, lng: 174.764003 },
        zoom: 0,
    }

    state = {
        orgContacts: [],
    }

    componentDidMount() {
        if (this.props.contacts.length === 0) {
            axios.get("http://jsonplaceholder.typicode.com/users").then(res => this.setState({ orgContacts: res.data }));
        } else {
            this.setState({ orgContacts: this.props.contacts });
        }
    }

    getData = () => {
        let contacts = this.state.orgContacts;
        let locations = [];
        for (let i = 0; i < contacts.length; i++) {
            let contact = contacts[i];
            locations.push([contact.name, contact.address.geo.lat, contact.address.geo.lng, i])
        }
        let people = [];
        for (let i = 0; i < locations.length; i++) {
            let location = locations[i];
            let lat = location[1];
            let lng = location[2];
            //I randomly use lat*lng as a key for markers so that React won't give me a warnign :)
            people.push(<Marker key={lat*lng} lat={lat} lng={lng} name={location[0]}/>)
        }
        return people;
    }

    //IMPORTANT!!!
    //GoogleMapReact gives a WARNING because there is no API key for me to use, google wants me to buy one
    render() {
        return (
            <div style={ mapStyle }>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onChildMouseEnter={this.onChildMouseEnter}
                    onChildMouseLeave={this.onChildMouseLeave}
                >
                    {this.getData()}
                </GoogleMapReact>
            </div>
        )
    }
}

const mapStyle = {
    height: "80vh",
    width: "80vw",
    margin: "auto",
    minWidth: "180px",
    minHeight: "180px",
    maxWidth: "800px",
    maxHeight: "800px",
}

export default AddressMap;