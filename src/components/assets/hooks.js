import React from "react";
import {useDrop} from "react-dnd";
import Paper from "@mui/material/Paper";

// кастомный хук для работы dnd - обёртка где возможно перемещение элементов
export const useMyDrop = (items, name, accept) =>{
    const [, drop] = useDrop(() => ({
        accept,
        drop: () => ({ name: name }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            // eslint-disable-next-line
        }, []),
    }));

    if (!name){ return {items}}

    return <Paper className='body' ref={drop}>{items}</Paper>
}

