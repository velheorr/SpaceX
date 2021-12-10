import React from 'react';
import './App.scss';
import PublicIcon from '@mui/icons-material/Public';
import LauchSchedule from "./components/LaunchSchedule/LauchSchedule";



const App = ()=> {
    return (
        <div>
            <div className='header'>
                <span>Explore the space </span>
                <PublicIcon style={{verticalAlign: 'middle'}}/>
            </div>
            <LauchSchedule/>
        </div>
    );
}

export default App;
