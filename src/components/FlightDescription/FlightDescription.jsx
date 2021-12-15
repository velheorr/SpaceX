import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {switchPage} from "../../store/LaunchSlice";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FlightDescription = () => {
    const dispatch = useDispatch()
    const launchDetails = useSelector(state => state.launches.launchDetails);

    return (
        <div className='details'>
            <Button
                onClick={()=> dispatch(switchPage(1))}
                variant="outlined"
                startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                <CardMedia
                    component="img"
                    width="400"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-cXFNdvkuvVlPLlLDVl5S9NOn0WBZJcKCA&usqp=CAU"
                    alt="space X"
                />
                <CardContent>
                    <div className='infoTitle'>{launchDetails.name}</div>
                    <ul className='infoData'>
                        <li>Rocket: <span>{launchDetails.rocketName}</span></li>
                        <li>Flight number: <span>{launchDetails.flight_number}</span></li>
                        <li>Date: <span>{launchDetails.date}</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

export default FlightDescription;