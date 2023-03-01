import "./Beacon.css";
import { useState } from "react";
import {
  RiArrowUpSLine,
  RiPencilFill,
  RiCalendar2Fill,
  RiBuilding2Fill,
  RiBuilding2Line,
} from "react-icons/ri";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            스케줄 등록
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={2}>
                <label>제 목</label>
              </Col>
              <Col xs={12} md={10}>
                <input></input>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={2}>
                <label>날 짜</label>
              </Col>
              <Col xs={12} md={10}>
                <label>시작</label>
                <input type="date" defaultValue={today}></input>
                <label>종료</label>
                <input type="date" defaultValue={today}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={2}>
                <label>내 용</label>
              </Col>
              <Col xs={12} md={10}>
                <textarea></textarea>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState(false);
  return (
    <div id="beacon_wrap">
      <div id="baecon_main_frame">
        <button id="baecon_main_button" onClick={toggleHandler}>
          {isOpen ? <RiBuilding2Fill /> : <RiBuilding2Line />}
        </button>
      </div>
      <div
        id="baecon_schd_frame"
        className={isOpen ? "beacon_schd_open" : "beacon_schd_close"}
      >
        <button id="baecon_schd_button" onClick={() => setModalShow(true)}>
          <RiCalendar2Fill />
        </button>
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div
        id="baecon_write_frame"
        className={isOpen ? "beacon_write_open" : "beacon_write_close"}
      >
        <Link to="/writeBoard">
          <button id="baecon_write_button">
            <RiPencilFill />
          </button>
        </Link>
      </div>
      <div
        id="baecon_top_frame"
        className={isOpen ? "beacon_top_open" : "beacon_top_close"}
      >
        <button id="baecon_top_button" onClick={scrollToTop}>
          <RiArrowUpSLine />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
