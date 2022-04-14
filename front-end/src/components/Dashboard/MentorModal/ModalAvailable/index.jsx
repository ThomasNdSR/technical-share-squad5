import { CgSmileSad } from "react-icons/cg";
import "./style.css";
export function ModalAvailable({ weekData,day,setDay,hour,setHour,}) {
  const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayKey = new Date().getDay();
  const dayNow = new Date().getDate()
  const month = new Date().getMonth() + 1;

  const daySelect = (value) => {
    setDay(value);
  };
  const hourSelect = (value) => {
    setHour(value);
  };
  const dateSelect = () => {
    const data = new Date();
    let dayweek
    if (day) {
      dayweek = weekData[0].week[day].weekday;
      if (dayKey > dayweek) {
        data.setDate(data.getDate() - (dayKey - dayweek));
      } else {
        data.setDate(data.getDate() + (dayweek - dayKey));
      }
    }
    return data.toLocaleString();
  };
  return (
    <>
      {weekData[0].week ? (
        <>
          {console.log(dateSelect())}
          <p>{hour}</p>
          <div className="modalAvailable">
            {weekData[0].week.map((item, indexInput) => (
              <div key={indexInput}>
                <input
                  id={item.weekday}
                  name="available"
                  value={indexInput}
                  type="radio"
                  onChange={(e) => daySelect(e.target.value)}
                />
                <label htmlFor={item.weekday} className="modalAvailable--item">
                  <p className="modalAvailable--weekday">
                    {weeks[item.weekday]}
                  </p>
                  <h5 className="modalAvailable--date">
                    {dayKey > item.weekday
                      ? `${dayNow - (dayKey - item.weekday)}/${month}`
                      : `${dayNow + (item.weekday - dayKey)}/${month}`}
                  </h5>
                  <p
                    h5
                    className="modalAvailable--list-hours"
                  >{`${item.timeHour.length} horários`}</p>
                </label>
              </div>
            ))}
          </div>
          <div className="modalAvailable__lists">
            {day
              ? weekData[0].week[day].timeHour.map((item, indexHour) => (
                  <div key={indexHour}>
                    <input
                      id={item}
                      name="hours"
                      value={item}
                      type="radio"
                      onChange={(e) => hourSelect(e.target.value)}
                    />
                    <label
                      htmlFor={item}
                      className="modalAvailable--hour"
                    >{`${item}:00`}</label>
                  </div>
                ))
              : ""}
          </div>
        </>
      ) : (
        <div className="modalAvailable">
          <p className="modalAvailable__notAvailable">
            Sem horário de agendamento disponíveis
          </p>
          <CgSmileSad size={32} color="var(--primary-03)" />
        </div>
      )}
    </>
  );
}
