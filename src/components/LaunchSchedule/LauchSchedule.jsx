import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {useMyDrop} from "../assets/hooks";
import {ItemTypes} from "../assets/types";
import {getCurrentLaunches, getPastLaunches} from "../../store/LaunchSlice";

const LauchSchedule = () => {
    const pastLaunches = useSelector(state => state.launches.pastLaunches);
    const currentLaunches = useSelector(state => state.launches.currentLaunches);
    const myLaunches = useSelector(state => state.launches.myLaunches);
    const dispatch = useDispatch()

    // состояние скелетонов
    const [loadPast, setLoadPast] = useState(true);
    const [loadCurrent, setLoadCurrent] = useState(true);

    // Начальная инициализация данных (загрузка + скелетон пока загружаються данные)
    useEffect(()=>{
        getDataLaunches(getPastLaunches, 'past',  setLoadPast)
        getDataLaunches(getCurrentLaunches, 'upcoming', setLoadCurrent)
        // eslint-disable-next-line
    },[])
    // ф-я загрузки данных с api
    // get = передача в диспатч экшена
    // time = параметр get запроса для получения данных
    // load = определение с какой таблицы выключить скелетон
    const getDataLaunches = async (get, time, load)=>{
        const launches = await api.getLaunches(time)
        dispatch(get(launches))
        load(false)
    }

    // Ф-я отрисовки компонента LaunchCard
    const render = (arr, type = ItemTypes.CARD)=>{
        return arr.map((item, i)=> <LaunchCard id={item.id} key={i} name={item.name} rocket_name={item.rocketName} date={item.date} type={type} />)
    }
    // Рендер прошлых запусков
    const pastLaunchesData = render(pastLaunches)
    // Рендер текущих запусков + обёртка в хук useMyDrop для работы d'n'd
    const currentLaunchesData = render(currentLaunches, ItemTypes.LAUNCHES)
    const lauches_toRender = useMyDrop(currentLaunchesData, 'Launches', ItemTypes.MYLAUNCHES )
    // Рендер моих запусков + обёртка в хук useMyDrop для работы d'n'd
    const myLaunchesData = render(myLaunches, ItemTypes.MYLAUNCHES)
    const myLaunches_toRender = useMyDrop(myLaunchesData, 'MyLaunches', ItemTypes.LAUNCHES)

    return (
        <div className='body-wrapper'>
            <div>
                <div className='title'>Past launches</div>
                <Paper className='body'>
                      { !loadPast ? pastLaunchesData : <SheduleSkeleton/> }
                </Paper>
            </div>
            <div>
                <div className='title'>Launches</div>
                { !loadCurrent ? lauches_toRender : <SheduleSkeleton/> }
            </div>
            <div>
                <div className='title'>My launches</div>
                {myLaunches_toRender}
            </div>
        </div>
    );
};

export default LauchSchedule;