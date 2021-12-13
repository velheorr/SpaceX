import React from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";
import {useSelector} from "react-redux";
import {useMyDrop} from "../assets/hooks";
import {ItemTypes} from "../assets/types";



const LauchSchedule = () => {
    const pastLaunches = useSelector(state => state.launches.pastLaunches);
    const currentLaunches = useSelector(state => state.launches.currentLaunches);
    const myLaunches = useSelector(state => state.launches.myLaunches);


    // Ф-я отрисовки компонента LaunchCard
    const render = (arr, type = ItemTypes.CARD)=>{
        return arr.map((item)=> <LaunchCard id={item.rocket_id} key={item.rocket_id} name={item.name} rocket_name={item.rocket_name} type={type} />)
    }
    // Рендер прошлых запусков
    const pastLaunchesData = render(pastLaunches)
    // Рендер текущих запусков + обертка в хук useMyDrop для работы d'n'd
    const currentLaunchesData = render(currentLaunches, ItemTypes.LAUNCHES)
    const lauches_toRender = useMyDrop(currentLaunchesData, 'Launches', ItemTypes.MYLAUNCHES )
    // Рендер моих запусков
    const myLaunchesData = render(myLaunches, ItemTypes.MYLAUNCHES)
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
                {lauches_toRender}
            </div>
            <div>
                <div className='title'>My launches</div>
                {myLaunches_toRender}
            </div>
        </div>
    );
};

export default LauchSchedule;