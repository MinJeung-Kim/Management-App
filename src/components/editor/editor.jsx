import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
