import React from 'react';

const DeleteEventModal = ({ onDeleteEvent, event }) => {
    return (
        <div className="modal">
            <h2>Delete Event</h2>
            <p>Are you sure you want to delete this event?</p>
            <p>{event.title}</p>
            <button onClick={onDeleteEvent}>Yes, Delete</button>
        </div>
    );
};

export default DeleteEventModal;