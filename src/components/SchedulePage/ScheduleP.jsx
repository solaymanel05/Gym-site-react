import React, { useEffect, useState } from "react";
import "./Schedule.css";
import imgCont from "../../assets/images/ssd.jpg";
import Nav from "../1.Navbar/Nav";
import { days, schedule } from "../../assets/data/data";
export default function ScheduleP() {
  const [activeDay, setActiveDay] = useState(null);
  const handleBtnClick = (day) => {
    setActiveDay(day);
  };

  const aggregatedSchedule = days.map(day => {
    return {
      day,
      classes: schedule.filter(item => item.day === day).flatMap(item => item.classes)
    };
  });
  const activeSchedule = aggregatedSchedule.find(item => item.day === activeDay);


  return (
    <>
      <Nav />
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>schedule by day</h1>
      </div>
      <div className="schedule">
        
      <div className="cont-btn-days">
      {days.map((day) => (
        <button
          key={day}
          className={`btn-day ${activeDay === day ? 'active' : ''}`}
          onClick={() => {
            handleBtnClick(day)
          
          }}
        >
          {day}
        </button>
      ))}
    </div>
        <div className="schedule-list">
        {activeSchedule ? (
          activeSchedule.classes.map((elem, key) => (
            <div key={key} className="schedule-item">
              <div className="class-name">
                <h4>Class Name</h4>
                <h3>{elem.class}</h3>
              </div>
              <div className="time">
                <h4>Time</h4>
                <h3>{elem.time}</h3>
              </div>
              <div className="trainer">
                <h4>Trainer</h4>
                <h3>{elem.trainer}</h3>
              </div>
              <button className="schedule-btn">Join</button>
            </div>
          ))
        ) : (
          <p>Select a day to see the schedule</p>
        )}
            
        
      
        </div>
      </div>
    
    </>
  );
}
