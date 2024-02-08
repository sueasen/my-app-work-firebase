import { useEffect, useState } from 'react';
import TimeView from '../components/TimeView';
import TimeButtonGroup from './TimeButtonGroup';
import { TimeInput, parseInputTime } from './TimeInput';

// インターバル処理ID (setInterval の戻り値を設定、clearInterval の引数に設定することでインターバルの処理をクリアできる)
let intervalId;
// インターバル間隔(ミリ秒)
let intervalMs = 9;

const TimeDown = () => {
  // 表示時間(初期値なし)
  const [time, setTime] = useState();
  // タイマー実行中フラグ(初期値は実行なし)
  const [running, isRunning] = useState(false);
  // 入力時分秒(初期値は空文字)
  const [input, setInput] = useState('');

  // input 変更時の処理
  useEffect(() => {
    // 表示時間に input から生成した時間を設定
    setTime(parseInputTime(input));
  }, [input]);

  // 時分秒入力時の処理
  const changeInput = (e) => {
    // 時分秒に入力値を設定
    setInput(e.target.value);
  };

  // スタートクリック時の処理
  const clickStart = () => {
    if (!time) return;
    let dateTime = new Date(time.getTime());
    let endDateTime = new Date(time.getTime());
    endDateTime.setHours(0, 0, 0, 0);

    intervalId = setInterval(() => {
      dateTime = new Date(dateTime.getTime() - intervalMs);
      if (dateTime < endDateTime) {
        clearInterval(intervalId);
        isRunning(false);
        setTime(endDateTime);
      } else {
        setTime(dateTime);
      }
    }, intervalMs);
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
    // 入力値を初期化する
    setInput('');
  };

  return (
    <>
      <div className="text-center">
        <p>TimeClock</p>
        {/* TimeView time:表示時間 runnning:実行中フラグ */}
        <TimeView time={time} running={running}></TimeView>
        {/* TimeInput onChange:入力時処理関数 value:入力値 */}
        <TimeInput onChange={changeInput} value={input}></TimeInput>
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
export default TimeDown;
