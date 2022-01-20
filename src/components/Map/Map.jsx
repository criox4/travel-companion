import React from "react";
import googleMapReact from "google-map-react";
import {Paper, Typography , useMediaQuery} from '@material-ui/core';
import  LocationonOutlined  from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from './styles'

const Map =()=>{
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates={last:0,lng:0};

    return(
        <div className={classes.mapContainer}>
            <googleMapReact
                bootstrapURLKeys={{key:''}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultzoom={14}
                margin={[50,50,50,50,]}
                options={''}
                onChange={''}
                onChildClick={''}
                ></googleMapReact>
        <h1>Map</h1>
        </div>
    );
}

export default Map;