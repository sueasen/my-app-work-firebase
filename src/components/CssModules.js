// CSSファイルをインポート
import styles from '../styles/CssModules.module.scss';

const CssModules = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>CSS Modulesです</p>
        <button>ボタン</button>
      </div>
    </>
  );
};

export default CssModules;
