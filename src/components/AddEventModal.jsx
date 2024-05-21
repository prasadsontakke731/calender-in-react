import React, { useState } from 'react';
import { format } from 'date-fns';

const AddEventModal = ({ onAddEvent, selectedRange }) => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

    const handleSubmit = () => {
        const newEvent = {
            id: Date.now(),
            title,
            color,
            date: selectedRange.startDate
        };
        onAddEvent(newEvent);
    };

    return (
        <div className="modal">
            <h2>Add Event</h2>
            <p>From: {format(selectedRange.startDate, 'yyyy-MM-dd')} To: {format(selectedRange.endDate, 'yyyy-MM-dd')}</p>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Event Title"
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Event</button>
        </div>
    );
};

export default AddEventModal;