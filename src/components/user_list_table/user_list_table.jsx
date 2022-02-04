import React, { useState } from "react";
import Pagination from "../pagination/Pagination";
import styles from "./user_list_table.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const UserListTable = ({ cards, openEditor, openDetail }) => {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fnOpenEditor = () => {
    openEditor(true);
  };

  const fnOpenDetail = () => {
    openDetail(true);
  };

  return (
    <div className={styles.list}>
      <table className={styles.table}>
        <thead>
          <div className={styles.header}>
            <div className={styles.top}>
              <span className={styles.title}>회원관리</span>
              <p className={styles.subtitle}>
                <i className="fas fa-check"></i>30 done this month
              </p>
            </div>
            <i className="fas fa-ellipsis-v"></i>
          </div>

          <tr className={styles.thead}>
            <th>이름</th>
            <th>나이</th>
            <th>전화번호</th>
            <th>직업</th>
            <th>구분</th>
            <th>등록일</th>
            <th>등록기간</th>
            <th>비고</th>
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
                <td>
                  {cards[key].phone
                    .replace(/[^0-9]/, "")
                    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
                </td>
                <td>{cards[key].job}</td>
                <td>일반</td>
                <td>{cards[key].registration}</td>
                <td> {cards[key].period}</td>
                <td>
                  <i className="fas fa-pencil-alt" onClick={fnOpenDetail}></i>
                </td>
              </tr>
            ))}
        </tbody>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="3">3</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
        <footer>
          <Pagination
            total={Object.keys(cards).length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </table>
      <i className="fas fa-edit" onClick={fnOpenEditor}></i>
    </div>
  );
};

export default UserListTable;
