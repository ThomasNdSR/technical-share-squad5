import "./style.css";
export function TableHour(props) {
  const week = [
    { weekday: 2, timeHour: [12] },
    { weekday: 3, timeHour: [10] },
    { weekday: 4, timeHour: [8, 9, 10] },
  ];
  const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayKey = new Date().getDay();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  return (
    <table>
      <body className="tableHour">
        {week.map((item) => (
          <tr>
            <th>{weeks[item.weekday]}</th>
            <p className="tableHour_day">
              {dayKey > item.weekday
                ? `${day - dayKey}/${month}`
                : `${day + (item.weekday - dayKey)}/${month}`}
            </p>
            {item.timeHour.map((hour) => (
              <td>
                <p className="tableHour_hour">{`${hour}:00`}</p>
              </td>
            ))}
          </tr>
        ))}
      </body>
    </table>
  );
}
