import React from 'react';
import { useDrop } from 'react-dnd';
import { format, isToday, isSameDay } from 'date-fns';
import { ItemTypes } from './Constants';
import Event from './Event';

const Day = ({ day, events, onDateRangeSelect, onEventDelete, onMoveEvent }) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.EVENT,
        drop: (item) => onMoveEvent(item.event, day),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }), [day, onMoveEvent]);

    const handleSelectRange = () => {
        onDateRangeSelect({ startDate: day, endDate: day });
    };

    return (
        <div ref={drop} className={`day ${isToday(day) ? 'today' : ''}`} onClick={handleSelectRange}>
            {format(day, 'd')}
            {events.map(event => (
                <Event key={event.id} event={event} onDelete={onEventDelete} />
            ))}
        </div>
    );
};

export default Day;