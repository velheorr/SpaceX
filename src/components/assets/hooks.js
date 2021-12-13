import {useDrop} from "react-dnd";
import {ItemTypes} from "./types";
import Paper from "@mui/material/Paper";
import React from "react";


export const useMyDrop = (name, items) =>{
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: () => ({ name: name }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }, []),
    }));

    return <Paper className='body' ref={drop}>{items}</Paper>
}