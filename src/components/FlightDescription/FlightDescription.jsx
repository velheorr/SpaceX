import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch} from "react-redux";
import {switchPage} from "../../store/LaunchSlice";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FlightDescription = () => {
    const dispatch = useDispatch()


    return (
        <div className='details'>
            <Button onClick={()=> dispatch(switchPage(1))} variant="outlined" startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
};

export default FlightDescription;