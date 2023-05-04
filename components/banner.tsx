import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>The</span>
        <span className={styles.title2}>Mate Shop</span>
      </h1>
      <p className={styles.subTitle}>Discover your local mate produts</p>
      <div className={styles.buttonWrapper}>

      XXX <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button> XXX

      </div>
    </div>
  );
};

export default Banner;
