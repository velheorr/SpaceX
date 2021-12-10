import React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";


const SheduleSkeleton = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <Skeleton animation="wave" width={'80%'}><Typography variant="h6" component="div">SAOCOM 1A</Typography></Skeleton>
                    <Skeleton animation="wave" width={'60%'}><Typography variant="caption">FALCON 9</Typography></Skeleton>
                </CardContent>
            </Card>
        </>
    );
};

export default SheduleSkeleton;