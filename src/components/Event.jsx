import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';

const Event = ({ event, onDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.EVENT,
        item: { event },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [event]);

    return (
        <div ref={drag} className="event" style={{ backgroundColor: event.color, opacity: isDragging ? 0.5 : 1 }}>
            {event.title}
            <button onClick={() => onDelete(event)}>Delete</button>
        </div>
    );
};

export default Event;