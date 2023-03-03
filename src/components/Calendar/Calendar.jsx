import "./Calendar.css";

import { Link } from "react-router-dom";

const Calendar = (props) => {
 
  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
  
    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = '';
  
    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {    
      htmlDummy += `<div>${i}</div>`;
    }
  
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
  }
  
  
  const date = new Date();
  window.onload
  makeCalendar(date);

  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  }
  
  // 다음달 이동
  $(document).load().querySelector(`.nextDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  }
  return (
    <div class='calendar_wrap'>
    <div class="header">
       <div class="btn prevDay"></div>
      <h2 class='dateTitle'></h2>
      <div class="btn nextDay"></div>
    </div>
    
    <div class="grid dateHead">
      <div>일</div>
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div>토</div>
    </div>

    <div class="grid dateBoard"></div>
  </div>
  );
};

export default Calendar;
