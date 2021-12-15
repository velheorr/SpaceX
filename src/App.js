import React from 'react';
import './App.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import PublicIcon from '@mui/icons-material/Public';
import LauchSchedule from "./components/LaunchSchedule/LauchSchedule";
import MyAlert from "./components/assets/Alert";
import {useSelector} from "react-redux";
import FlightDescription from "./components/FlightDescription/FlightDescription";
import Modal from "./components/assets/Modal";



const App = ()=> {
    const showAlert = useSelector(state => state.launches.showAlert);
    const page = useSelector(state => state.launches.page);
    const modal = useSelector(state => state.launches.modal);


    return (
        <div>
            {showAlert ? <MyAlert/> : null}
            <div className='header'>
                <span>Explore the space </span>
                <PublicIcon style={{verticalAlign: 'middle'}}/>
            </div>
            {
                page === 1
                    ?
                    <DndProvider backend={HTML5Backend}>
                        <LauchSchedule/>
                    </DndProvider>
                    :
                    <FlightDescription/>
            }
            { modal ? <Modal/> : null}
        </div>
    );
}

export default App;
