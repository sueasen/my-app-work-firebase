import { Button, ButtonGroup } from '@material-tailwind/react';

/**
 * タイマー制御ボタンのコンポーネント
 * @component
 * @param {boolean} props.running - タイマー実行中フラグ
 * @param {function} props.onClickStart - スタートクリック時の処理関数
 * @param {function} props.onClickStop - ストップクリック時の処理関数
 * @param {function} props.onClickClear - クリアクリック時の処理関数
 * @returns {JSX.Element} タイマー制御ボタンコンポーネント
 */ const TimeButtonGroup = ({
  running,
  onClickStart,
  onClickStop,
  onClickClear,
}) => {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <ButtonGroup>
          <Button disabled={running} onClick={onClickStart}>
            start
          </Button>
          <Button disabled={!running} onClick={onClickStop}>
            stop
          </Button>
          <Button onClick={onClickClear}>clear</Button>
        </ButtonGroup>
      </div>
    </>
  );
};
export default TimeButtonGroup;
