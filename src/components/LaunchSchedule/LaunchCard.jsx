import React from 'react';
import '../../App.scss'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const LaunchCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">SAOCOM 1A</Typography>
                <Typography variant="caption">FALCON 9</Typography>
                <div className='rocket'><RocketLaunchIcon color='primary'/></div>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;