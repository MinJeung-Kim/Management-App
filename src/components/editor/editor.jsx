import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, addCard, sale, setSale, openEditor }) => (
  <section className={styles.editor}>
    <CardAddForm
      FileInput={FileInput}
      onAdd={addCard}
      sale={sale}
      setSale={setSale}
      openEditor={openEditor}
    />
  </section>
);

export default Editor;
