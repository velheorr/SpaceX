import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {delMyLaunch, switchModal} from "../../store/LaunchSlice";

const Modal = () => {
    const modalData = useSelector(state => state.launches.modalData);
    const dispatch = useDispatch();

    // удаление элемента из моих полётов
    const deleteLaunch = () =>{
        dispatch(delMyLaunch(modalData.name))
        dispatch(switchModal())
    }

    return (
        <div className='modal'>
            <div className='modalContent'>
                <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                    <div className='close' onClick={()=>{dispatch(switchModal())}}>
                        <div>Cancel flight reservation?</div>
                        <IconButton><CloseIcon /></IconButton>
                    </div>
                    <CardContent>
                        <div className='title'>{modalData.name}</div>
                        <div>Rocket: <span className='title'>{modalData.rocket_name}</span></div>
                        <div>Launch date: <span className='title'>{modalData.date}</span></div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='error' onClick={deleteLaunch}>Confirm</Button>
                        <Button size="small" onClick={()=>dispatch(switchModal())}>Cancel</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Modal;