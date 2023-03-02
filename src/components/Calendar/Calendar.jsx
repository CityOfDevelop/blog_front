import "./Calendar.css";
import Moment from "react-moment";
import moment from "moment";
import { Link } from "react-router-dom";

const Calendar = (props) => {
  const click = () => {
    const curYear = moment().format("YYYY");
    const curMonth = moment().format("MM");
    const week = ["월", "화", "수", "목", "금", "토", "일"];
    console.log("일주일 : " + week);
    console.log("현재 년도 : " + curYear);
    console.log("현재 월 : " + curMonth);
    console.log(
      "현재 월의 일수 : " +
        moment()
          .month(curMonth - 1)
          .daysInMonth()
    ); // 마지막 날짜 구하기 month-1값
    console.log(
      "현재 월의 1일이 첫주의 몇번째인지 : " +
        moment([curYear, curMonth - 1, 1]).day()
    ); // 첫번째날 요일 구하기
    console.log(
      "현재 월의 1일의 요일 : " +
        week[moment([curYear, curMonth - 1, 1]).day() - 1]
    ); // 첫번째날 요일 구하기
  };

  return (
    <div id="calendar_wrap">
      <table id="calendar_table">
        <thead>
          <tr>
            <th className="calendar_header">월</th>
            <th className="calendar_header">화</th>
            <th className="calendar_header">수</th>
            <th className="calendar_header">목</th>
            <th className="calendar_header">금</th>
            <th className="calendar_header">토</th>
            <th className="calendar_header">일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={click}>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
