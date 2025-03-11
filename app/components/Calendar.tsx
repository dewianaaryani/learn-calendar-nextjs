"use client";
import { useState } from "react";
import { CalendarDays, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

const events = [
  {
    date: "2025-03-15",
    icon: "📅",
    time: "10:00 AM",
    name: "Meeting",
    desc: "Project discussion",
  },
  {
    date: "2025-03-16",
    icon: "🎉",
    time: "02:00 PM",
    name: "Birthday Party",
    desc: "Celebrating John's birthday",
  },
  {
    date: "2025-03-17",
    icon: "📢",
    time: "11:00 AM",
    name: "Workshop",
    desc: "UI/UX Design Basics",
  },
];

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((day, index) => {
          const event = events.find((e) => isSameDay(new Date(e.date), day));
          return (
            <div
              key={index}
              className={`border p-4 rounded-lg flex flex-col items-center cursor-pointer ${
                selectedDate && isSameDay(selectedDate, day)
                  ? "bg-blue-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              <span className="text-lg font-bold">{format(day, "d")}</span>
              {event && <span className="text-sm">{event.icon}</span>}
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <div className="mt-4 p-4 bg-blue-100 rounded-md">
          <p className="text-blue-700 font-semibold flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" /> Selected Date:{" "}
            {selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
          </p>
          {events.map(
            (event, index) =>
              isSameDay(new Date(event.date), selectedDate) && (
                <div
                  key={index}
                  className="mt-2 border p-2 rounded-md bg-white"
                >
                  <p className="font-semibold">{event.name}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {event.time}
                  </p>
                  <p className="text-sm text-gray-500">{event.desc}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
