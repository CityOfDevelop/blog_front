import "./Calendar.css";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { useEffect } from "react";

const Calendar = (props) => {
  const date = new Date();
  const sampleData = [
    {
      dataDay: 1,
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: 2,
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: 3,
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "4",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "5",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "6",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "7",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },

    {
      dataDay: "11",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "12",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "13",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "14",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "15",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "16",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "17",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "18",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },

    {
      dataDay: "22",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "23",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "24",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },

    {
      dataDay: "28",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: "29",
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험" },
        { cntnNo: 2, cntn: "정보처리기사 시험" },
      ],
    },
    {
      dataDay: 30,
      cntnList: [
        { cntnNo: 1, cntn: "빅데이터 분석기사 시험123" },
        { cntnNo: 2, cntn: "정보처리기사 시험123" },
        { cntnNo: 2, cntn: "정보처리기사 시험123" },
        { cntnNo: 2, cntn: "정보처리기사 시험123" },
        { cntnNo: 2, cntn: "정보처리기사 시험123" },
        { cntnNo: 2, cntn: "정보처리기사 시험123" },
      ],
    },
  ];

  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = "";

    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="calendar_wrap noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      const calendarDate = sampleData.findIndex(
        (date123) => date123.dataDay == i
      );

      htmlDummy +=
        `<div class="calendar_wrap item"><span class="calendar_date">${i}</span>` +
        (calendarDate != -1
          ? sampleData[calendarDate].cntnList
              .map(
                (item, index) =>
                  "<span class='schd_list'>" + "- " + item.cntn + "</span>"
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
