import { Title } from "shared/Title/Title";
import { Card } from "./Card/Card";
import styles from "./PersonCardsBlock.module.scss";


export const PersonCardsBlock = () => {

  const addtext = "Well, not quite a village, but two of the villages best lending heroes!";

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Title variant="h2" addText={addtext} classNameProp={styles.title}>
          Getting a mortgage funded takes a village.
        </Title>
        <div className={styles.cardsContainer}>
          <Card name="Justin" />
          <Card name="Scott"/>
          <div className={styles.skeleton}></div>
        </div>
      </div>
    </section>
  );
};
