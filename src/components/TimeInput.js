import { Input } from '@material-tailwind/react';

/**
 * 時分秒を入力するコンポーネント
 * @component
 * @param {Function} props.onChange - 入力時の処理関数
 * @param {string} props.value - 入力値.
 * @returns {JSX.Element} 時分秒入力コンポーネント
 */
export const TimeInput = ({ onChange, value }) => {
  return (
    <>
      <div className="mb-2 flex justify-center">
        <div className="flex">
          <Input
            label="time"
            type="time"
            step="1"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  );
};

/**
 * 時分秒の文字列より現在日付の Date を生成します
 * @param {string} input - 入力値(hh:mm:ss)
 * @returns {Date | null} 時分秒から生成したDate
 */
export const parseInputTime = (input) => {
  if (!input) return null;
  let date = new Date();
  date.setHours(...input.split(':'), 0, 0, 0, 0);
  return date;
};
