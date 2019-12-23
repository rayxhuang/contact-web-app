import React from 'react';
import GPSIcon from '@material-ui/icons/Room';

const Marker = (props: any) => {
    const { name } = props;
    return (
        <div style={ markerStyle } title={name}><GPSIcon /><p>{name}</p></div>
    );
};

const markerStyle = {
    position: "absolute",
    color: "red",
    textAlign: "center",
    cursor: "pointer",
}

export default Marker;