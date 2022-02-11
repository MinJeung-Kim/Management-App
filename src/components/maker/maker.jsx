import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Header from "../header/header";
import UserListTable from "../user_list_table/user_list_table";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserID] = useState(historyState && historyState.id);
  const [cardId, setCardID] = useState("");

  const [totalPrice, setTotalPrice] = useState({});

  // 팝업 on/off
  const [openEditor, setOpenEditor] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  // 결제 금액
  const payPrice = 10000;
  const [sale, setSale] = useState(0);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  // 사용자 id 변경
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      // console.log(cards);
      setCards(cards);
      test();
    });
    // 컴포넌트가 Unmount됬을때 호출할 함수 리턴
    return () => stopSync();
  }, [userId, cardRepository]);

  // 로그인
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrUpdateCard = (card) => {
    // updated의 key를 이용
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  // 등록일 가져오기
  const test = () => {
    Object.keys(cards).map((item) => {
      console.log(cards[item].registration);
    });
  };

  return (
    <section className={styles.maker}>
      <div className={styles.main}>
        <Header onLogout={onLogout} />
        <div className={styles.container}>
          <UserListTable
            cards={cards}
            openEditor={setOpenEditor}
            openDetail={setOpenDetail}
            cardId={setCardID}
          />

          {openEditor && (
            <Editor
              FileInput={FileInput}
              addCard={createOrUpdateCard}
              payPrice={payPrice}
              sale={sale}
              setSale={setSale}
              openEditor={setOpenEditor}
            />
          )}
          {openDetail && (
            <Preview
              FileInput={FileInput}
              cards={cards}
              updateCard={createOrUpdateCard}
              deleteCard={deleteCard}
              openDetail={setOpenDetail}
              cardId={cardId}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Maker;
