import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, addCard, payPrice, sale, setSale }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <CardAddForm
      FileInput={FileInput}
      onAdd={addCard}
      payPrice={payPrice}
      sale={sale}
      setSale={setSale}
    />
  </section>
);

export default Editor;
