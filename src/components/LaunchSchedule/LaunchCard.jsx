import React from 'react';
import '../../App.scss'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {useDrag} from "react-dnd";
import {detailPage, setAlert, switchModal, switchPage} from "../../store/LaunchSlice";
import {useDispatch} from "react-redux";
import {api} from "../../api/api";


const LaunchCard = ({id, rocket_name, name, type, parentArr}) => {
    const dispatch = useDispatch()

    const [{isDragging}, drag] = useDrag({
        type: type,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                //alert(`You dropped ${id} into ${dropResult.name}!`);
                if (dropResult.name === 'MyLaunches'){
                    dispatch(setAlert(name))
                    setTimeout(()=>{dispatch(setAlert())}, 1000)
                } else if (dropResult.name === 'Launches') {
                    dispatch(switchModal())
                }

                console.log(item)
                console.log(dropResult)
                /* dropResult.name место перетаскивания  */
                /* id = id  */
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

    const flightDescription = async (id) =>{
        const res = await api.getOne(id)
        dispatch(detailPage({res}))
        dispatch(switchPage(2))
    }

    return (
        <Card  ref={drag} style={style}>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography variant="caption">{rocket_name}</Typography>
                <div className='rocket' onClick={()=> flightDescription(id, parentArr)}><RocketLaunchIcon color='primary'/></div>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;