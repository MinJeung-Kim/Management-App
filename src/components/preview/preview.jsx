import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ FileInput, cards, updateCard, deleteCard, openDetail }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          openDetail={openDetail}
        />
      ))}
    </ul>
  </section>
);

export default Preview;
