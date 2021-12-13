import React from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "./types";
import Paper from "@mui/material/Paper";



export const useMyDrop = (items, name, accept) =>{
    const [, drop] = useDrop(() => ({
        accept,
        drop: () => ({ name: name }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }, []),
    }));

    if (!name){ return {items}}

    return <Paper className='body' ref={drop}>{items}</Paper>
}
