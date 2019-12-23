import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardBackground from '../images/card_background.jpg';
import CatchPhrase from './CatchPhrase';

class Contact extends Component {
    state = {
        card: false,
    }

    //Handle card showing event
    clicked = () => {
        this.setState({ card: !this.state.card });
    }

    //Handle async catchphrase urls retriving
    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.setState({ card: this.state.card });
        }
    }

    render() {
        const { name, email, phone, website, company } = this.props.contact;
        let url = this.props.url;
        let mUrl = "mailto:" + email;
        let pUrl = "tel:" + phone;
        let wUrl = "http://" + website;

        return (
            <div>
                <Card style={style} onClick={this.clicked}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="span">
                                <ul>
                                    <li>Email: {email}</li>
                                    <li>Phone: {phone}</li>
                                    <li>Website: {website}</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Dialog open={this.state.card} onClose={this.clicked}>
                    <DialogTitle id="form-dialog-title">Business Card</DialogTitle>
                    <DialogContent>
                        <Card style={cardStyle}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="span">
                                    <ul style={{ fontSize: "105%" }}>
                                        <b>
                                            <li>Email: <a href={mUrl} style={{ textDecoration: 'none' }}>{email}</a></li>
                                            <li>Phone: <a href={pUrl} style={{ textDecoration: 'none' }}>{phone}</a></li>
                                            <li>Website: <a href={wUrl} style={{ textDecoration: 'none' }}>{website}</a></li>
                                        </b>
                                    </ul>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="span">
                                    <ul style={{ listStyleType: "none", color: "white", textAlign: "right" }}>
                                        <li><i>{company.name}</i></li>
                                        <li><i>{company.catchPhrase}</i></li>
                                        <li><i>{company.bs}</i></li>
                                    </ul>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography variant="body2" color="textSecondary" component="span" style={{marginTop: "2%"}}>
                            <CatchPhrase phrase={company.catchPhrase} url={url}/>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.clicked} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

//PropTypes
Contact.protoTypes = {
    contact: PropTypes.object.isRequired
}

const style = {
    marginBottom: "1.5%",
    minWidth: "420px",
    minHeight: "150px",
}

const cardStyle = {
    width: "400px",
    height: "220px",
    margin: "auto",
    marginTop: "4.5%",
    position: "-webkit-sticky",
    top: "0",
    backgroundImage: `url(${CardBackground})`,
}

export default Contact;