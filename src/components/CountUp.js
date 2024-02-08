// useState, useEffect をインポート
import { useState, useEffect } from 'react';

const CountUp = ({ text }) => {
  // カウントアップ
  // { 状態管理する変数名, 変数更新用のファンクション} = useState(初期値)
  const [count, setCount] = useState(10);
  // クリックしたときのカウントアップ処理（変数更新用のファンクション使う）
  const clickBtn = () => setCount(count + 1);

  // 背景色
  const [bgColor, setBgColor] = useState('#000000');
  // カウントアップしたときの背景色変更処理
  // useEffect(変更時の処理, [変更を監視する変数, ...複数OK, 空配列にすると初回だけ]
  useEffect(
    () => setBgColor('#' + Math.random().toString(16).slice(-6)),
    [count]
  );

  return (
    <>
      <button onClick={clickBtn}>add</button>
      <p style={{ backgroundColor: bgColor, fontSize: count }}>
        {`${text}：${count}：${bgColor}`}
      </p>
    </>
  );
};
export default CountUp;
