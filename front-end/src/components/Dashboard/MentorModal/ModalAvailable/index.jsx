import { useEffect, useState } from "react";
import "./style.css";
export function ModalAvailable() {
  const [selectDate, setSelectDate] = useState();
  const [selectDay, setSelectDay] = useState();
  const [selectHour, setSelectHour] = useState();
  const week = [
    { weekday: 1, timeHour: [7, 10, 11, 12] },
    { weekday: 4, timeHour: [8, 12] },
    { weekday: 5, timeHour: [9, 10, 11, 12] },
    { weekday: 6, timeHour: [16, 17, 18] },
  ];
  const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayKey = new Date().getDay();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;

  const daySelect = (value) => {
    setSelectDay(value);
  };
  const hourSelect = (value) => {
    setSelectHour(value);
  };
  return (
    <>
      <div className="modalAvailable">
        {week.map((item, indexInput) => (
          <div key={indexInput}>
            <input
              id={item.weekday}
              name="available"
              value={indexInput}
              type="radio"
              onChange={(e) => daySelect(e.target.value)}
            />
            <label htmlFor={item.weekday} className="modalAvailable--item">
              <p className="modalAvailable--weekday">{weeks[item.weekday]}</p>
              <h5 className="modalAvailable--date">
                {dayKey > item.weekday
                  ? `${day - (dayKey - item.weekday)}/${month}`
                  : `${day + (item.weekday - dayKey)}/${month}`}
              </h5>
              <p h5 className="modalAvailable--list-hours">{`${item.timeHour.length} horários`}</p>
            </label>
          </div>
        ))}
      </div>
      <div className="modalAvailable__lists">
          {selectDay
            ? week[selectDay].timeHour.map((item,indexHour) =>
            <div key={indexHour}>
            <input
              id={item}
              name="hours"
              value={item}
              type="radio"
              onChange={(e) => hourSelect(e.target.value)}
            />
            <label htmlFor={item} className="modalAvailable--hour">{`${item}:00`}</label>
            </div>)
            
            : ""}
        </div>
    </>
  );
}
