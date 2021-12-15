import React from 'react';
import '../../App.scss'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {useDrag} from "react-dnd";
import {addModalData, addMyLaunch, detailPage, setAlert, switchModal, switchPage} from "../../store/LaunchSlice";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/api";

const LaunchCard = ({id, rocket_name, name, type, date, parentArr}) => {
    const myLaunches = useSelector(state => state.launches.myLaunches);
    const dispatch = useDispatch()

    // получение информации о запуске и добавление его в мои полёты
    const setMyLaunches = async (id)=>{
        // уведомление что добавлен элемент в мои полёты и его добавление
        const filter = myLaunches.filter(i => i.id === id)
        if (filter.length > 0){
            return ;
        } else {
            dispatch(setAlert(name))
        }
        setTimeout(()=>{dispatch(setAlert())}, 1000)
        const launches = await api.getOne(id)
        dispatch(addMyLaunch(launches))
    }

    // хук из dnd, добавляет возможность перемещать элемент
    const [{isDragging}, drag] = useDrag({
        type: type,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                if (dropResult.name === 'MyLaunches'){
                     setMyLaunches(id)
                } else if (dropResult.name === 'Launches') {
                    // запуск модального окна при отмене полёта
                    const data = {id, name, rocket_name, date}
                    dispatch(addModalData(data))
                    dispatch(switchModal())
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    })
    // стиль элемента при использовании dnd
    const style = {
        opacity:isDragging ? '0.7' : '1',
        cursor: 'move'
    }

    // получение данных для детальеого просмотра запуска
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
                <div className='rocket' onClick={()=> flightDescription(id, parentArr)}>
                    <RocketLaunchIcon color='primary'/>
                </div>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;