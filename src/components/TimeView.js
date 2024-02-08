import { Typography } from '@material-tailwind/react';

// 色定義（true:動いてる時, false:止まってる時)
const colors = {
  true: 'blue',
  false: 'blue-gray',
};

/**
 * Date を hh:mm:ss.SSS 形式の文字列にフォーマットします
 * @param {Date} time - 表示したい時間
 * @returns {string} - hh:mm:ss.SSS 形式の文字列
 */
const formatTime = (time) => {
  if (time instanceof Date) {
    return formatTimeNums(
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
      time.getMilliseconds()
    );
  } else {
    return formatTimeNums(0, 0, 0, 0);
  }
};

/**
 * Date を hh:mm:ss.SSS 形式の文字列にフォーマットします
 * @param {number} hh - 時間
 * @param {number} mm - 時間
 * @returns {string} - hh:mm:ss.SSS 形式の文字列
 */

/**
 * hh:mm:ss.SSS 形式の文字列にフォーマットします
 * @param {number} hh 時
 * @param {number} mm 分
 * @param {number} ss 秒
 * @param {number} ms ミリ秒
 * @returns {string} - hh:mm:ss.SSS 形式の文字列
 */
const formatTimeNums = (hh, mm, ss, ms) => {
  let result = [hh, mm, ss].map((v, i) => String(v).padStart(2, '0')).join(':');
  result += '.' + String(ms).padStart(3, '0');
  return result;
};

/**
 * 時間を表示するコンポーネント
 * @component
 * @param {number} props.time - 表示する時間
 * @param {boolean} props.running - 実行中フラグ
 * @returns {JSX.Element} 時間表示コンポーネント
 */
const TimeView = ({ time, running }) => {
  return (
    <>
      <Typography variant="h4" color={colors[running]}>
        {formatTime(time)}
      </Typography>
    </>
  );
};
export default TimeView;
