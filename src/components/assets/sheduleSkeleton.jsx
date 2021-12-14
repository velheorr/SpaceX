import React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


const SheduleSkeleton = () => {
    return (
        <Paper className='body'>
            <Card>
                <CardContent>
                    <Skeleton animation="wave" width={'80%'}><Typography variant="h6" component="div">Falcon</Typography></Skeleton>
                    <Skeleton animation="wave" width={'60%'}><Typography variant="caption">Heavy</Typography></Skeleton>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Skeleton animation="wave" width={'80%'}><Typography variant="h6" component="div">Falcon</Typography></Skeleton>
                    <Skeleton animation="wave" width={'60%'}><Typography variant="caption">Heavy</Typography></Skeleton>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Skeleton animation="wave" width={'80%'}><Typography variant="h6" component="div">Falcon</Typography></Skeleton>
                    <Skeleton animation="wave" width={'60%'}><Typography variant="caption">Heavy</Typography></Skeleton>
                </CardContent>
            </Card>
        </Paper>
    );
};

export default SheduleSkeleton;