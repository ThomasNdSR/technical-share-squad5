import "./style.css";
export function TableHour(props) {
  const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayKey = new Date().getDay();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;

  return (
    <table>
      <tbody className="tableHour">
        {props.week.week.map((item) => (
          <tr key={item.weekday}>
            <th>{weeks[item.weekday]}</th>
            <td className="tableHour_day">
              {dayKey > item.weekday
                ? `${day - (dayKey - item.weekday)}/${month}`
                : `${day + (item.weekday - dayKey)}/${month}`}
            </td>
            {item.timeHour.map((hour) => (
              <td key={hour}>
                <p className="tableHour_hour">{`${hour}:00`}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
