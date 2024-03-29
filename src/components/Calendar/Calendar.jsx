import "./Calendar.css";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { useEffect } from "react";
import { lpad } from "utils/common_utils";

const Calendar = (props) => {
  const date = new Date();
  const tempDate = new Date();
  const sampleData = [
    {
      dataDay: "2023-03-01",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험", color: "red" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "blue" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "burlywood" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "burlywood" },
      ],
    },
    {
      dataDay: "2023-03-05",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험", color: "" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "burlywood" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "burlywood" },
      ],
    },
    {
      dataDay: "2023-03-16",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험", color: "" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "blue" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "" },
      ],
    },

    {
      dataDay: "2023-03-18",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험", color: "red" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "red" },
        { cntnNo: 2, cntn: "정보처리기사 시험", color: "" },
      ],
    },
  ];

  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
    const currentDay = new Date().getDate();
    const temp = currentYear + "-" + currentMonth + "-" + currentDay;

    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = "";

    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="calendar_wrap noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      console.log("테스트2");
      console.log(
        date.getFullYear() +
          "-" +
          lpad(date.getMonth() + 1, 2, "0") +
          "-" +
          lpad(i, 2, "0")
      );
      const calendarDate = sampleData.findIndex(
        (date123) =>
          date123.dataDay ==
          date.getFullYear() +
            "-" +
            lpad(date.getMonth() + 1, 2, "0") +
            "-" +
            lpad(i, 2, "0")
      );

      htmlDummy +=
        `<div class="calendar_wrap item">` +
        (temp ==
        tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + i
          ? `<span class="calendar_date calendar_today">${i}</span>`
          : `<span class="calendar_date">${i}</span>`) +
        (calendarDate != -1
          ? sampleData[calendarDate].cntnList
              .map(
                (item, index) =>
                  "<span class='schd_list" +
                  (item.color ? " schd_list_color_" + item.color : "") +
                  "'>" +
                  item.cntn +
                  "</span>"
              )
              .join("")
          : "") +
        `</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="calendar_wrap noColor"></div>`;
    }

    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(
      `.dateTitle`
    ).innerText = `${currentYear}년 ${currentMonth}월`;
  };

  // 이전달 이동
  const nextDay = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  };

  // 다음달 이동
  const prevDay = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  };

  useEffect(() => {
    makeCalendar(date);

    return () => {};
  });

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

      <div className="grid_calendar dateHead">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>

      <div className="grid_calendar dateBoard"></div>
    </div>
  );
};

export default Calendar;
