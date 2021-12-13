import React from 'react';
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import {useSelector} from "react-redux";

const MyAlert = () => {
    const alert = useSelector(state => state.launches.alert);



    return (
        <div className='myAlert'>
            <Paper>
                <Alert severity="success">Flight named {alert} succesfully booked</Alert>
            </Paper>
        </div>
    );
};

export default MyAlert;