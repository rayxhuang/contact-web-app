import React from "react";

class CatchPhrase extends React.PureComponent {
    state = {
        url: null,
    }

    componentMount() {
        this.setState({ url: this.props.url });
    }

    render() {
 
        if (typeof this.props.url !== 'undefined') {
            return (
                <img src={this.props.url} style={imgStyle} alt={this.props.url}></img>
            )
        } else {
            return null
        }
    }
        
}

const imgStyle = {
    textAlign: "center",
    margin: "auto",
    borderRadius: "8px",
    maxWidth: "400px",
    height: "auto",
    marginTop: "2%"
}
export default CatchPhrase;