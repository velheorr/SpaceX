import React from 'react';
import './App.scss';
import PublicIcon from '@mui/icons-material/Public';
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



function App() {
    return (
        <div>
            <div className='header'>
                <span>Explore the space </span>
                <PublicIcon style={{verticalAlign: 'middle'}}/>
            </div>
            <div className='body-wrapper'>
                <div>
                    <div className='title'>Past launches</div>
                    <Paper className='body'>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">SAOCOM 1A</Typography>
                                <Typography variant="caption">FALCON 9</Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">FalconSat</Typography>
                                <Typography variant="caption">Falcon 1</Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </div>
                <div>
                    <div className='title'>Launches</div>
                    <Paper className='body'>
                    2
                    </Paper>
                </div>
                <div>
                    <div className='title'>My launches</div>
                    <Paper className='body'>
                    3
                    </Paper>
                </div>
            </div>

        </div>
    );
}

export default App;
