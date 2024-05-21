import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import Day from './Day';

const MonthView = ({ currentDate, events, onDateRangeSelect, onEventDelete, onMoveEvent }) => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });

    return (
        <div className="month-view">
            {days.map((day) => (
                <Day
                    key={format(day, 'yyyy-MM-dd')}
                    day={day}
                    events={events.filter(event => isSameDay(new Date(event.date), day))}
                    onDateRangeSelect={onDateRangeSelect}
                    onEventDelete={onEventDelete}
                    onMoveEvent={onMoveEvent}
                />
            ))}
        </div>
    );
};

export default MonthView;