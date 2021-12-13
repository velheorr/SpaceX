import React from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";
import {useDrag, useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {ItemTypes} from "../assets/types";



const LauchSchedule = () => {
    const futureLaunches = useSelector(state => state.launches.futureLaunches);
    console.log(futureLaunches)

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: () => ({ name: 'My launches' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }


    const renderLaunches = (arr)=>{
        return arr.map((item)=> <LaunchCard id={item.rocket_id} key={item.rocket_id} name={item.name} rocket_name={item.rocket_name} />)
    }
    const lauches = renderLaunches(futureLaunches)


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
                <Paper className='body' ref={drop} accept={ItemTypes.CARD}>

                    {lauches}

                </Paper>
            </div>
            <div>
                <div className='title'>My launches</div>
                <Paper className='body' ref={drop} role={'My launches'} accept={'dd'}>
                    {isActive}

                </Paper>
            </div>
        </div>
    );
};

export default LauchSchedule;