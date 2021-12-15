import React from 'react';
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import {useDispatch, useSelector} from "react-redux";
import {setAlert} from "../../store/LaunchSlice";

const MyAlert = () => {
    const alert = useSelector(state => state.launches.alert);
/*    const dispatch = useDispatch()
    let timer = setTimeout(()=>{dispatch(setAlert())}, 1000)
    clearTimeout(timer)*/
    return (
        <div className='myAlert'>
            <Paper>
                <Alert severity="success">Flight named {alert} succesfully booked</Alert>
            </Paper>
        </div>
    );
};

export default MyAlert;