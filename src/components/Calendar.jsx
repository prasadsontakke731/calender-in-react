import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import MonthView from './MonthView';
import AddEventModal from './AddEventModal';
import DeleteEventModal from './DeleteEventModal';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [selectedRange, setSelectedRange] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const handleAddEvent = (event) => {
        setEvents([...events, event]);
        setIsAddModalOpen(false);
        setSelectedRange(null);
    };

    const handleDeleteEvent = () => {
        setEvents(events.filter(event => event.id !== eventToDelete.id));
        setIsDeleteModalOpen(false);
    };

    const handleMoveEvent = (event, newDate) => {
        setEvents(events.map(e => e.id === event.id ? { ...e, date: newDate } : e));
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prevMonth}>Previous</button>
                <h1>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h1>
                <button onClick={nextMonth}>Next</button>
            </div>
            <MonthView
                currentDate={currentDate}
                events={events}
                onDateRangeSelect={(range) => {
                    setSelectedRange(range);
                    setIsAddModalOpen(true);
                }}
                onEventDelete={(event) => {
                    setEventToDelete(event);
                    setIsDeleteModalOpen(true);
                }}
                onMoveEvent={handleMoveEvent}
            />
            {isAddModalOpen && <AddEventModal onAddEvent={handleAddEvent} selectedRange={selectedRange} />}
            {isDeleteModalOpen && <DeleteEventModal onDeleteEvent={handleDeleteEvent} event={eventToDelete} />}
        </div>
    );
};

export default Calendar;