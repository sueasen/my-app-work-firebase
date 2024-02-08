// useState をインポート
import { useState } from 'react';
import ColorText1 from '../components/ColorText1';
import ColorText2 from '../components/ColorText2';

const Page1 = () => {
  // チェックボックス用の変数
  const [flg, setFlg] = useState(false);
  // 入力テキスト用の変数
  const [text, setText] = useState();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const qwe = () => {
    alert('ttttttttttttt');
  };
  const inp = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      {/* タグの要素名 をコンポーネント側と合わせて値を設定 */}
      <ColorText1 color="blue" fontSize="20px" text="適当に．．．" />
      {/* 開始タグ、終了タグで囲って値を設定 */}
      <ColorText2 color="blue" fontSize="50px">
        <li>適当に．．．</li>
      </ColorText2>

      <button onClick={qwe}>もんごん２</button>
      {/* // チェックボックス type の指定、 checked に値設定、onCange に変更時処理設定 */}
      <input type="checkbox" checked={flg} onChange={() => setFlg(!flg)} />
      <p>{String(flg)}</p>
      {flg && <p>trueの場合</p>}

      {/* // 入力テキスト onCange に変更時処理設定 */}
      <input onChange={(e) => setText(e.target.value)} />
      <input onChange={(e) => inp(e)} />
      <p>{text}</p>
      {text === 'react' ? <p>やりたくない</p> : <p>なにやる？？</p>}

      {array.map((v) => (
        <p key={v}>{v * 3}</p>
      ))}
      {array
        .filter((v) => v % 2 === 0)
        .map((v) => (
          <p key={v}>{v}</p>
        ))}
      <button onClick={() => alert('adsfasdasf')}>もんごん１</button>
    </>
  );
};
export default Page1;
