import "./Calendar.css";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Calendar = (props) => {
  const date = new Date();
  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = "";

    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      htmlDummy += `<div class="item">${i}</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(
      `.dateTitle`
    ).innerText = `${currentYear}년 ${currentMonth}월`;
  };

  // 이전달 이동
  const nextDay = () => {
    console.log("next");
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  };

  // 다음달 이동
  const prevDay = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  };

  useEffect(() => {
    makeCalendar(date);
    return () => {};
  }, []);

  return (
    <div className="rap">
      <div className="header">
        <button className="btn prevDay" onClick={prevDay}>
          <BsFillCaretLeftFill />
        </button>
        <h2 className="dateTitle"></h2>

        <button className="btn nextDay" onClick={nextDay}>
          <BsFillCaretRightFill />
        </button>
      </div>

      <div className="grid dateHead">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>

      <div className="grid dateBoard"></div>
    </div>
  );
};

export default Calendar;
