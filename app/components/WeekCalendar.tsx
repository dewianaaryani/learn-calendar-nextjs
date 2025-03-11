"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

const events = [
  {
    date: "2025-03-15",
    time: "10:00",
    name: "Meeting",
    desc: "Project discussion",
  },
  {
    date: "2025-03-16",
    time: "14:00",
    name: "Birthday Party",
    desc: "Celebrating John's birthday",
  },
  {
    date: "2025-03-17",
    time: "11:00",
    name: "Workshop",
    desc: "UI/UX Design Basics",
  },
];

export default function WeekCalendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const startDate = startOfWeek(currentWeek);
  const endDate = endOfWeek(currentWeek);
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const hours = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  return (
    <div className="p-6 w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">
          {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
        </h2>
        <button onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-8 border-t border-l">
        <div className="border-b border-r p-2 text-center font-semibold">
          Time
        </div>
        {days.map((day) => (
          <div
            key={day.toString()}
            className="border-b border-r p-2 text-center font-semibold"
          >
            {format(day, "E d")}
          </div>
        ))}
        {hours.map((hour) => (
          <>
            <div key={hour} className="border-r p-2 text-center text-gray-600">
              {hour}
            </div>
            {days.map((day) => {
              const event = events.find(
                (e) => isSameDay(new Date(e.date), day) && e.time === hour
              );
              return (
                <div
                  key={day.toString() + hour}
                  className="border-b border-r p-2 relative h-20"
                >
                  {event && (
                    <div className="bg-blue-500 text-white p-2 rounded-md text-sm absolute inset-0">
                      <p className="font-semibold">{event.name}</p>
                      <p className="text-xs">{event.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}
