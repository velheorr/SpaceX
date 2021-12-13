import React from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";
import {useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {ItemTypes} from "../assets/types";
import {useMyDrop} from "../assets/hooks";



const LauchSchedule = () => {
    const futureLaunches = useSelector(state => state.launches.futureLaunches);
    console.log(futureLaunches)



    const render = (arr)=>{
        return arr.map((item)=> <LaunchCard id={item.rocket_id} key={item.rocket_id} name={item.name} rocket_name={item.rocket_name} />)
    }
    const lauches = render(futureLaunches)
    const lauches_toRender = useMyDrop('launches', lauches)

    const myLaunches = render(futureLaunches)
    const myLaunches_toRender = useMyDrop('myLaunches', myLaunches)

    return (
        <div className='body-wrapper'>
            <div>
                <div className='title'>Past launches</div>
                <Paper className='body'>
                    <SheduleSkeleton/>
                </Paper>
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