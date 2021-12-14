import React, {useEffect} from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api, getDataLaunches, useAxios} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {useMyDrop} from "../assets/hooks";
import {ItemTypes} from "../assets/types";
import {getCurrentLaunches} from "../../store/LaunchSlice";




const LauchSchedule = () => {
    const pastLaunches = useSelector(state => state.launches.pastLaunches);
    const currentLaunches = useSelector(state => state.launches.currentLaunches);
    const myLaunches = useSelector(state => state.launches.myLaunches);
    const dispatch = useDispatch()

    useEffect(()=>{
        getDataLaunches()

    },[])

    const getDataLaunches = async ()=>{
        const launches = await api.getLaunches()
        console.log(launches)
        dispatch(getCurrentLaunches(launches))
    }



    // Ф-я отрисовки компонента LaunchCard
    const render = (arr, type = ItemTypes.CARD, parentArr = 'pastLaunches')=>{
        return arr.map((item)=> <LaunchCard id={item.id} key={item.id} name={item.name} rocket_name={item.rocketName} type={type} parentArr={parentArr} />)
    }
    // Рендер прошлых запусков
    const pastLaunchesData = render(pastLaunches)
    // Рендер текущих запусков + обёртка в хук useMyDrop для работы d'n'd
    const currentLaunchesData = render(currentLaunches, ItemTypes.LAUNCHES, 'currentLaunches')
    const lauches_toRender = useMyDrop(currentLaunchesData, 'Launches', ItemTypes.MYLAUNCHES )
    // Рендер моих запусков + обёртка в хук useMyDrop для работы d'n'd
    const myLaunchesData = render(myLaunches, ItemTypes.MYLAUNCHES, 'myLaunches')
    const myLaunches_toRender = useMyDrop(myLaunchesData, 'MyLaunches', ItemTypes.LAUNCHES)

    return (
        <div className='body-wrapper'>
            <div>
                <div className='title'>Past launches</div>
                <Paper className='body'>
                    {pastLaunchesData}
                </Paper>
                {/*<SheduleSkeleton/>*/}
            </div>
            <div>
                <div className='title'>Launches</div>
                {
                    currentLaunches ? lauches_toRender : <SheduleSkeleton/>
                }

            </div>
            <div>
                <div className='title'>My launches</div>
                {myLaunches_toRender}
            </div>


        </div>
    );
};

export default LauchSchedule;