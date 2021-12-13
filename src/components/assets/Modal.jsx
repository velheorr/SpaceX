import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div className='modal'>
            <div className='modalContent'>

                <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                    <div className='close'>
                        <div>Cancel flight reservation?</div>
                        <IconButton><CloseIcon /></IconButton>
                    </div>
                    <CardContent>
                        <div>Flight details</div>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Confirm</Button>
                        <Button size="small">Cancel</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Modal;