import React, { useState } from "react";
import DdayCountDown from "../dday_count_down/dday_count_down";
import Pagination from "../pagination/Pagination";
import styles from "./user_list_table.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const UserListTable = ({ cards, openEditor, openDetail, cardId }) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fnOpenEditor = () => {
    openEditor(true);
  };

  const fnOpenDetail = (event) => {
    cardId(event.target.dataset.id);
    openDetail(true);
  };

  const pageValue = ["5", "10", "15", "20"];
  const tableTitle = [
    "이름",
    "나이",
    "전화번호",
    "직업",
    "구분",
    "등록일",
    "등록기간",
    "비고",
    "D-Day",
  ];

  return (
    <div className={styles.list}>
      <table className={styles.table}>
        <thead>
          <div className={styles.header}>
            <div className={styles.top}>
              <span className={styles.title}>회원관리</span>
              <p className={styles.subtitle}>
                <i className="fas fa-check"></i>
                {Object.keys(cards).length} done this total
              </p>
            </div>
            <label>
              페이지 당 표시할 게시물 수:&nbsp;
              <select
                type="number"
                value={limit}
                onChange={({ target: { value } }) => setLimit(Number(value))}
              >
                {pageValue.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <tr className={styles.thead}>
            {tableTitle.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Object.keys(cards)
            .slice(offset, offset + limit)
            .map((key) => (
              <tr key={key}>
                <td className={styles.profile}>
                  <img
                    src={cards[key].fileURL || DEFAULT_IMAGE}
                    alt="profile"
                  />
                  {cards[key].name}
                </td>
                <td> {cards[key].age}</td>
                <td>{cards[key].phone}</td>
                <td>{cards[key].job}</td>
                <td>{cards[key].discount}</td>
                <td>{cards[key].registration}</td>
                <td>{cards[key].period}</td>
                <td>
                  <i
                    className="fas fa-pencil-alt"
                    data-id={cards[key].id}
                    onClick={fnOpenDetail}
                  ></i>
                </td>
                <td>
                  <DdayCountDown
                    registration={cards[key].registration}
                    period={cards[key].period}
                  />
                </td>
              </tr>
            ))}

          <Pagination
            total={Object.keys(cards).length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
          <div className={styles.add}>
            <i className="fas fa-edit" onClick={fnOpenEditor}></i>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
