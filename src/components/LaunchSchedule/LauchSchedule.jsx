import React from 'react';
import Paper from "@mui/material/Paper";
import LaunchCard from "./LaunchCard";
import {api} from "../../api/api";
import SheduleSkeleton from "../assets/sheduleSkeleton";

const LauchSchedule = () => {
    api.getLaunches()

    return (
        <div className='body-wrapper'>
            <div>
                <div className='title'>Past launches</div>
                <Paper className='body'>
                    <LaunchCard/>
                </Paper>
            </div>
            <div>
                <div className='title'>Launches</div>
                <Paper className='body'>
                    <SheduleSkeleton/>
                </Paper>
            </div>
            <div>
                <div className='title'>My launches</div>
                <Paper className='body'>

                </Paper>
            </div>
        </div>
    );
};

export default LauchSchedule;