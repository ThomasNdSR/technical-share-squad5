import React, { useState } from "react";
import { api } from "../../../services/api";
import "./style.css";
export function TableHourEdit({ id }) {
  const init = [];
  const [checkedHour, setCheckedHour] = useState(init);
  const [feedbackHour, setFeedbackHour] = useState("");

  const weekday = [0, 1, 2, 3, 4, 5, 6];
  const timeHour = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];
  const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayKey = new Date().getDay();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;

  const postHour = async () => {
    const order = groupHour();
    await api
      .post(`user/available/${id}`, { week: order })
      .then(() => {
        setFeedbackHour("Disponibilidade atualizada com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCheck = (event) => {
    var updatedList = [...checkedHour];
    if (event.target.checked) {
      updatedList = [...checkedHour, event.target.value];
    } else {
      updatedList.splice(checkedHour.indexOf(event.target.value), 1);
    }
    setCheckedHour(updatedList);
  };

  const groupHour = () => {
    const group = [];
    const setWekday = new Set();
    //Agrupar itens e ordenar array
    checkedHour.forEach((item) => {
      let res = item.split("/");
      group.push({ weekday: weeks.indexOf(res[0]) });
      group.forEach((data) => {
        if (data.weekday === weeks.indexOf(res[0])) {
          if (data.timeHour) {
            data.timeHour.push(Number(res[1]));
            data.timeHour.sort((a, b) => (a > b ? 1 : 0));
          } else {
            return (data["timeHour"] = [Number(res[1])]);
          }
        }
      });
    });
    //remover duplicidade
    const week = group.filter((w) => {
      const duplicatedWekday = setWekday.has(w.weekday);
      setWekday.add(w.weekday);
      return !duplicatedWekday;
    });
    //ordernar semanas
    week.sort((a, b) => (a.weekday > b.weekday ? 1 : 0));
    //atualizar state
    return week;
  };
  return (
    <>
      <p className="skillEdit_feedback">{feedbackHour}</p>
      <button
        className="tableHour__upload"
        onClick={() => {
          postHour();
        }}
      >
        Salvar alterações
      </button>
      <table>
        <tbody className="tableHour">
          {weekday.map((item, index) => (
            <tr key={index}>
              <th>{weeks[item]}</th>
              <td className="tableHour_day">
                {dayKey > item
                  ? `${day - (dayKey - item)}/${month}`
                  : `${day + (item - dayKey)}/${month}`}
              </td>
              {timeHour.map((hour, i) => (
                <div
                  key={`${weeks[item]}/${hour}`}
                  className="tableHour_day--key"
                >
                  <input
                    id={`${weeks[item]}/${hour}`}
                    value={`${weeks[item]}/${hour}`}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <label
                    htmlFor={`${weeks[item]}/${hour}`}
                    className="tableHour_hour--edit"
                  >
                    {`${hour}:00`}
                  </label>
                </div>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
