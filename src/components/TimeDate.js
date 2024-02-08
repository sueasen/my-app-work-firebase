import { useEffect, useState } from 'react';
import TimeView from '../components/TimeView';
import TimeButtonGroup from './TimeButtonGroup';

// インターバル処理ID (setInterval の戻り値を設定、clearInterval の引数に設定することでインターバルの処理をクリアできる)
let intervalId;
// インターバル間隔(ミリ秒)
let intervalMs = 9;

const TimeDate = () => {
  // 表示時間(初期値なし)
  const [time, setTime] = useState();
  // タイマー実行中フラグ(初期値は実行なし)
  const [running, isRunning] = useState(false);

  // useEffect の第２引数を空配列にすると初回(マウント)時のみ実行になる
  useEffect(() => {
    // 第２引数に設定した間隔(ミリ秒)ごとに現在日時を表示時間に設定
    intervalId = setInterval(() => setTime(new Date()), intervalMs);
    // タイマー実行中フラグを true にする
    isRunning(true);
    // ※クリーンアップ関数 → コンポーネント削除(アンマウント)時の処理関数
    return () => {
      // インターバル処理をクリア
      clearInterval(intervalId);
    };
  }, []);

  // スタートクリック時の処理
  const clickStart = () => {
    // 第２引数に設定した間隔(ミリ秒)ごとに現在日時を表示時間に設定
    intervalId = setInterval(() => setTime(new Date()), intervalMs);
    // タイマー実行中フラグを true にする
    isRunning(true);
  };

  // ストップクリック時の処理
  const clickStop = () => {
    // インターバル処理をクリア
    clearInterval(intervalId);
    // タイマー実行中フラグを false にする
    isRunning(false);
  };

  // クリアクリック時の処理
  const clickClear = () => {
    // インターバル処理をクリア
    clearInterval(intervalId);
    // タイマー実行中フラグを false にする
    isRunning(false);
    // 表示時間を初期化する
    setTime();
  };

  return (
    <>
      <div className="text-center">
        <p>TimeDate</p>
        {/* TimeView time:表示時間 runnning:実行中フラグ */}
        <TimeView time={time} running={running}></TimeView>
        {/* TimeButtonGroup */}
        {/*   runnning    :実行中フラグ */}
        {/*   onClickStart:スタートクリック処理関数 */}
        {/*   onClickStop :ストップクリック処理関数 */}
        {/*   onClickClear:クリアクリック処理関数 */}
        <TimeButtonGroup
          running={running}
          onClickStart={clickStart}
          onClickStop={clickStop}
          onClickClear={clickClear}
        ></TimeButtonGroup>
      </div>
    </>
  );
};
export default TimeDate;
