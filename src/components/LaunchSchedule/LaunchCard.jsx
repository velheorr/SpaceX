import React from 'react';
import '../../App.scss'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {useDrag} from "react-dnd";
import {ItemTypes} from '../assets/types'

const LaunchCard = ({rocket_name, name, type}) => {


    const [{isDragging}, drag] = useDrag({
        type: type,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    })
    const style = {
        opacity:isDragging ? '0.7' : '1', cursor: 'move'
    }

    return (
        <Card  ref={drag} style={style}>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography variant="caption">{rocket_name}</Typography>
                <div className='rocket'><RocketLaunchIcon color='primary'/></div>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;