import Carousel from "react-material-ui-carousel";
import styles from "./slide.module.css";

const Slide = () => {
  return (
    <div className={styles.slide}>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            color: "#efefef", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#00ADEF", // 2
          },
        }}
      >
        <div className={styles.itemBox}>
          <img src="/images/slide-image/photo-1.jpg" />
          <p className={styles.depsContent}>
            <span className={styles.deps}>Faster way to create web pages</span>
            That’s my skill. I’m not really specifically talented at anything
            except for the ability to learn.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slide;
