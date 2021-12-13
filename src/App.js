import React from 'react';
import './App.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import PublicIcon from '@mui/icons-material/Public';
import LauchSchedule from "./components/LaunchSchedule/LauchSchedule";



const App = ()=> {
    return (
        <div>
            <div className='header'>
                <span>Explore the space </span>
                <PublicIcon style={{verticalAlign: 'middle'}}/>
            </div>
            <DndProvider backend={HTML5Backend}>
                <LauchSchedule/>
            </DndProvider>

        </div>
    );
}

export default App;
