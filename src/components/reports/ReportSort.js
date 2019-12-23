import React, { Component } from "react";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ReportSort extends Component {
    state = {
        orgContacts: this.props.contacts,
        alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        searching: false,
    };

    //Get request is made if report page is not entered from redirecting from home
    componentDidMount() {
        if (this.props.contacts.length === 0) {
            axios.get("http://jsonplaceholder.typicode.com/users").then(res => this.setState({ orgContacts: res.data }));
        } else {
            this.setState({ orgContacts: this.props.contacts })
        }
    }

    createTable = () => {
        let dict = {};
        let json = this.state.orgContacts;
        Object.keys(json).forEach(function (key) {
            dict[key] = json[key];
        });

        //Count number of contacts starts with each letter
        let tempDict = {}
        for (let i = 0; i < 26; i++) {
            tempDict[this.state.alpha[i]] = 0;
        }

        for (var key in dict) {
            var capital = dict[key].name[0].toUpperCase();
            tempDict[capital] += 1;
        }
        //returning a list of <Grid item>
        return this.createRow(tempDict);
    }

    //Creates rows for each letter: num of contacts
    createRow = (tempDict) => {
        let rows = [];
        for (let i = 0; i < 26; i++) {
            let capital = this.state.alpha[i];
            let numContacts = tempDict[capital];
            if (numContacts === 0) {
                rows.push(
                    <Grid item key={capital} xs={2} sm={1} style={{ color: "grey" }}>
                        <p>{capital}</p>
                        <p>0</p>
                    </Grid>
                );
            } else {
                rows.push(
                    <Grid item key={capital} xs={2} sm={1}>
                        <b>
                            <p>{capital}</p>
                            <p>{numContacts}</p>
                        </b>
                    </Grid>
                );
            }
        }
        return rows;
    }
    
    render() {
        return (
            <Card style={cardStyle}>
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="span">
                        <h3>Number of Contacts start with each letter</h3>
                    </Typography>
                    <Grid container spacing={3}>
                        {this.createTable()}
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}
const cardStyle = {
    borderStyle: "solid",
    borderWidth: "2px",
    minWidth: "190px",
    maxWidth: "400px",
    maxHeight: "1000px",
    margin: "auto",
    marginTop: "4.5%",
    padding: "1%",
}

export default ReportSort;